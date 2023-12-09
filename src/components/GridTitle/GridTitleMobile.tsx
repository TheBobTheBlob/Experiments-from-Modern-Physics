import { Button, Heading, Menu, MenuButton, MenuItem, MenuList, Text, VStack } from "@chakra-ui/react";
import { ChevronDown } from "react-feather";

import { useChapterStore, useCountStore, useSortStore } from "../../Consts";
import data from "../../data/chapters.json";

const GridTitleMobile = () => {
    const chapter = useChapterStore((state) => state.chapter);
    const setChapter = useChapterStore((state) => state.setChapter);

    const sort = useSortStore((state) => state.sort);
    const setSort = useSortStore((state) => state.setSort);

    const visibleCount = useCountStore((state) => state.visibleCount);
    const totalCount = useCountStore((state) => state.totalCount);

    const ChapterMenu = (chapterId: number) => {
        if (chapterId === 0) return "All Chapters";
        else {
            const chapterData = data.find((chapter) => chapter.id === chapterId);
            return `Chapter ${chapterData?.id}: ${chapterData?.title}`;
        }
    };

    return (
        <VStack margin="20px 10px 20px 10px" spacing="20px">
            <Heading>{chapter === 0 ? "All Experiments" : `Chapter ${chapter} Experiments`}</Heading>
            <Text fontSize="sm" opacity="0.75">
                Showing {visibleCount} of {totalCount}
            </Text>

            <Menu variant="filled" colorScheme="modblue" matchWidth={true}>
                <MenuButton as={Button} rightIcon={<ChevronDown />} width="100%">
                    {ChapterMenu(chapter)}
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={() => setChapter(0)} key={0}>
                        All Chapters
                    </MenuItem>
                    {data.map((chapter) => (
                        <MenuItem onClick={() => setChapter(chapter.id)} key={chapter.id}>
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
                    <MenuItem onClick={() => setSort("chapter")}>Chapter</MenuItem>
                    <MenuItem onClick={() => setSort("title")}>Title</MenuItem>
                    <MenuItem onClick={() => setSort("duration")}>Duration</MenuItem>
                </MenuList>
            </Menu>
        </VStack>
    );
};

export default GridTitleMobile;
