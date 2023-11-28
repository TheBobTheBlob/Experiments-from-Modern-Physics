import { Badge, Button, HStack, Heading, Spacer, Show, Text } from "@chakra-ui/react";

interface Props {
    onClearChapter: (chapter: number) => void;
    chapter: number;
    total: number;
    visible: number;
}

const GridTitle = ({ onClearChapter, chapter, total, visible }: Props) => {
    return (
        <HStack margin="20px 10px 20px 10px" spacing="20px">
            <Heading>{chapter === 0 ? "All Experiments" : `Chapter ${chapter} Experiments`}</Heading>
            {chapter !== 0 && (
                <Button onClick={() => onClearChapter(0)} colorScheme="modblue" variant="ghost">
                    Clear filter
                </Button>
            )}
            <Show above="lg">
                <Spacer />
                <Text fontSize="sm" opacity="0.5">
                    Showing {visible} of {total}
                </Text>
                <Badge fontSize="2xl">Text</Badge>
            </Show>
        </HStack>
    );
};

export default GridTitle;
