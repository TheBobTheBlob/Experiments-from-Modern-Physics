import { Card, CardBody, CardFooter, Skeleton, SkeletonText } from "@chakra-ui/react";

const ExperimentCardSkeleton = () => {
    return (
        <Card width="500px">
            <Skeleton height="200px" />
            <CardBody padding="10px">
                <SkeletonText></SkeletonText>
                {/* <HStack marginTop="10px">
                    <Badge>{experiment.category}</Badge>
                    <Badge>Chapter {experiment.chapter}</Badge>
                </HStack> */}
                {/* <Text marginTop="10px">{experiment.description}</Text> */}
            </CardBody>
            <CardFooter padding="10px">
                {/* <ButtonGroup spacing="1" margin="0px">
                    <Button
                        variant="solid"
                        leftIcon={<ExternalLink />}
                        colorScheme="modblue"
                        onClick={() => openInNewTab(experiment.link)}
                    >
                        Watch
                    </Button>
                    <Button variant="ghost" leftIcon={<Info />}>
                        Info
                    </Button> */}
                {/* </ButtonGroup> */}
            </CardFooter>
        </Card>
    );
};

export default ExperimentCardSkeleton;
