import { Badge, Button, Card, CardBody, CardFooter, Flex, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { ExternalLink } from "react-feather";

import { useChapterStore } from "../../Consts";
import { Experiment } from "./ExperimentGrid";

// Forces links to open in new tab
const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
};

// Converts an integer into a minutes and seconds
// Eg. 78 -> 1m 16s
const intToTime = (time: number) => {
    const minutes = Math.floor(time / 60).toString();
    const seconds = (time % 60).toString().padStart(2, "0");

    if (minutes === "0") return `${seconds}s`;
    else return `${minutes}m ${seconds}s`;
};

interface Props {
    experiment: Experiment;
}

const ExperimentCard = ({ experiment }: Props) => {
    const setChapter = useChapterStore((state) => state.setChapter);

    return (
        <Card>
            <Image
                src={`/thumbnails/${experiment.id}.webp`}
                borderTopRadius="5px"
                aspectRatio="16 / 9" // Helps avoid content shifts as image loads
                alt={`Experiment ${experiment.id} thumbnail`}
            />

            <CardBody padding="10px">
                <HStack marginTop="10px">
                    <Badge onClick={() => setChapter(experiment.chapter)} cursor="pointer">
                        Chapter {experiment.chapter}
                    </Badge>
                    <Badge onClick={() => openInNewTab(experiment.channelLink)} cursor="pointer">
                        <Flex alignItems="center" gap="5px">
                            {experiment.channel}
                            <ExternalLink width="15px" height="15px" />
                        </Flex>
                    </Badge>
                </HStack>

                <Heading size="md" marginTop="10px">
                    {experiment.title}
                </Heading>

                <Text marginTop="10px">{experiment.description}</Text>
            </CardBody>

            <CardFooter padding="10px">
                <Button
                    variant="solid"
                    leftIcon={<ExternalLink />}
                    colorScheme="modblue"
                    onClick={() => openInNewTab(experiment.link)}
                >
                    Watch ({intToTime(experiment.duration)})
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ExperimentCard;
