import { Badge, Button, Card, CardBody, CardFooter, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Experiment } from "./ExperimentGrid";
import { ExternalLink } from "react-feather";

export const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
};

export const intToTime = (time: number) => {
    let minutes = Math.floor(time / 60).toString();
    let seconds = (time % 60).toString().padStart(2, "0");

    if (minutes === "0") return `${seconds}s`;
    else return `${minutes}m ${seconds}s`;
};

interface Props {
    experiment: Experiment;
    onPickChapter: (chapter: number) => void;
}

const ExperimentCard = ({ experiment, onPickChapter }: Props) => {
    return (
        <Card>
            <Image
                src={`/src/assets/thumbnails/${experiment.id}.jpg`}
                borderTopRadius="5px"
                alt={`Thumbnail of experiment ${experiment.id} video`}
            />
            <CardBody padding="10px">
                <HStack marginTop="10px">
                    <Badge onClick={() => onPickChapter(experiment.chapter)} cursor="pointer">
                        Chapter {experiment.chapter}
                    </Badge>
                    <Badge onClick={() => openInNewTab(experiment.channelLink)} cursor="pointer">
                        {experiment.channel}
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
