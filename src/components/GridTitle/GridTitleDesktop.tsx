import { Button, HStack, Heading, Menu, MenuButton, MenuItem, MenuList, Spacer, Text } from "@chakra-ui/react";
import { ChevronDown } from "react-feather";

import { useChapterStore, useCountStore, useSortStore } from "../../Consts";

const GridTitleDesktop = () => {
    const chapter = useChapterStore((state) => state.chapter);
    const setChapter = useChapterStore((state) => state.setChapter);

    const sort = useSortStore((state) => state.sort);
    const setSort = useSortStore((state) => state.setSort);

    const visibleCount = useCountStore((state) => state.visibleCount);
    const totalCount = useCountStore((state) => state.totalCount);

    return (
        <HStack margin="20px 10px 20px 10px" spacing="20px">
            <Heading>{chapter === 0 ? "All Experiments" : `Chapter ${chapter} Experiments`}</Heading>
            {chapter !== 0 && (
                <Button onClick={() => setChapter(0)} colorScheme="modblue" variant="ghost">
                    Clear filter
                </Button>
            )}
            <Spacer />

            <Text fontSize="sm" opacity="0.75" textAlign="right">
                Showing {visibleCount} of {totalCount}
            </Text>

            <Menu variant="filled" colorScheme="modblue" placement="bottom-end">
                <MenuButton as={Button} rightIcon={<ChevronDown />}>
                    Sort by: {sort.charAt(0).toUpperCase() + sort.slice(1)}
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={() => setSort("chapter")}>Chapter</MenuItem>
                    <MenuItem onClick={() => setSort("title")}>Title</MenuItem>
                    <MenuItem onClick={() => setSort("duration")}>Duration</MenuItem>
                </MenuList>
            </Menu>
        </HStack>
    );
};

export default GridTitleDesktop;
