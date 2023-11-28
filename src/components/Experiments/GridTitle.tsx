import { Button, HStack, Heading, Spacer, Show, Text, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDown } from "react-feather";

interface Props {
    onClearChapter: (chapter: number) => void;
    onSelectSort: (sort: string) => void;
    chapter: number;
    sort: string;
    total: number;
    visible: number;
}

const GridTitle = ({ onClearChapter, onSelectSort, chapter, sort, total, visible }: Props) => {
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
                <Text fontSize="sm" opacity="0.75">
                    Showing {visible} of {total}
                </Text>
                <Menu variant="filled" colorScheme="modblue" placement="top-end">
                    <MenuButton as={Button} rightIcon={<ChevronDown />}>
                        Sort by: {sort.charAt(0).toUpperCase() + sort.slice(1)}
                    </MenuButton>
                    <MenuList>
                        <MenuItem onClick={() => onSelectSort("chapter")}>Chapter</MenuItem>
                        <MenuItem onClick={() => onSelectSort("title")}>Title</MenuItem>
                        <MenuItem onClick={() => onSelectSort("duration")}>Duration</MenuItem>
                    </MenuList>
                </Menu>
            </Show>
        </HStack>
    );
};

export default GridTitle;
