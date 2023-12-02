import { Button, VStack, Heading, Text, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDown } from "react-feather";

import data from "../../data/chapters.json";

interface Props {
    onSelectChapter: (chapter: number) => void;
    onSelectSort: (sort: string) => void;
    chapter: number;
    sort: string;
    total: number;
    visible: number;
}

const GridTitleMobile = ({ onSelectChapter, onSelectSort, chapter, sort, total, visible }: Props) => {
    const ChapterMenu = (chp_id: number) => {
        if (chp_id === 0) return "All Chapters";
        else {
            let chp_data = data.find((chp) => chp.id === chp_id);
            return `Chapter ${chp_data?.id}: ${chp_data?.title}`;
        }
    };

    return (
        <VStack margin="20px 10px 20px 10px" spacing="20px">
            <Heading>{chapter === 0 ? "All Experiments" : `Chapter ${chapter} Experiments`}</Heading>
            <Text fontSize="sm" opacity="0.75">
                Showing {visible} of {total}
            </Text>

            <Menu variant="filled" colorScheme="modblue" matchWidth={true}>
                <MenuButton as={Button} rightIcon={<ChevronDown />} width="100%">
                    {ChapterMenu(chapter)}
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={() => onSelectChapter(0)} key={0}>
                        All Chapters
                    </MenuItem>
                    {data.map((chapter) => (
                        <MenuItem
                            onClick={() => {
                                onSelectChapter(chapter.id);
                            }}
                            key={chapter.id}
                        >
                            Chapter {chapter.id}: {chapter.title}
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>

            <Menu variant="filled" colorScheme="modblue" matchWidth={true}>
                <MenuButton as={Button} rightIcon={<ChevronDown />} width="100%">
                    Sort by: {sort.charAt(0).toUpperCase() + sort.slice(1)}
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={() => onSelectSort("chapter")}>Chapter</MenuItem>
                    <MenuItem onClick={() => onSelectSort("title")}>Title</MenuItem>
                    <MenuItem onClick={() => onSelectSort("duration")}>Duration</MenuItem>
                </MenuList>
            </Menu>
        </VStack>
    );
};

export default GridTitleMobile;
