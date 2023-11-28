import { Badge, Button, Card, CardBody, CardFooter, Heading, Image, Text } from "@chakra-ui/react";
import { Experiment } from "./ExperimentGrid";
import { ExternalLink } from "react-feather";

interface Props {
    experiment: Experiment;
}

export const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
};

const ExperimentCard = ({ experiment }: Props) => {
    return (
        <Card>
            <Image
                src={`/src/assets/thumbnails/${experiment.id}.jpg`}
                borderTopRadius="5px"
                alt={`Thumbnail of experiment ${experiment.id} video`}
            />
            <CardBody padding="10px">
                <Heading size="md" marginTop="10px">
                    {experiment.title}
                </Heading>
                <Badge marginTop="10px">Chapter {experiment.chapter}</Badge>
                <Text marginTop="20px">{experiment.description}</Text>
            </CardBody>
            <CardFooter padding="10px">
                <Button
                    variant="solid"
                    leftIcon={<ExternalLink />}
                    colorScheme="modblue"
                    onClick={() => openInNewTab(experiment.link)}
                >
                    Watch ({experiment.duration})
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ExperimentCard;
