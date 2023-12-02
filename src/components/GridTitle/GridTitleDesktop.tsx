import { Button, HStack, Heading, Spacer, Text, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDown } from "react-feather";

interface Props {
    onSelectChapter: (chapter: number) => void;
    onSelectSort: (sort: string) => void;
    chapter: number;
    sort: string;
    total: number;
    visible: number;
}

const GridTitleDesktop = ({ onSelectChapter, onSelectSort, chapter, sort, total, visible }: Props) => {
    return (
        <HStack margin="20px 10px 20px 10px" spacing="20px">
            <Heading>{chapter === 0 ? "All Experiments" : `Chapter ${chapter} Experiments`}</Heading>
            {chapter !== 0 && (
                <Button onClick={() => onSelectChapter(0)} colorScheme="modblue" variant="ghost">
                    Clear filter
                </Button>
            )}
            <Spacer />

            <Text fontSize="sm" opacity="0.75" textAlign="right">
                Showing {visible} of {total}
            </Text>

            <Menu variant="filled" colorScheme="modblue" placement="bottom-end">
                <MenuButton as={Button} rightIcon={<ChevronDown />}>
                    Sort by: {sort.charAt(0).toUpperCase() + sort.slice(1)}
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={() => onSelectSort("chapter")}>Chapter</MenuItem>
                    <MenuItem onClick={() => onSelectSort("title")}>Title</MenuItem>
                    <MenuItem onClick={() => onSelectSort("duration")}>Duration</MenuItem>
                </MenuList>
            </Menu>
        </HStack>
    );
};

export default GridTitleDesktop;
