import { Card, CardBody, CardFooter, Skeleton, SkeletonText } from "@chakra-ui/react";

const ExperimentCardSkeleton = () => {
    return (
        <Card>
            <Skeleton height="200px" />
            <CardBody padding="10px">
                <SkeletonText />
            </CardBody>
            <CardFooter padding="10px">
                <SkeletonText />
            </CardFooter>
        </Card>
    );
};

export default ExperimentCardSkeleton;
