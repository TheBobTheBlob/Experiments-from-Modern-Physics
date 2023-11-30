import { Heading, Show, Box } from "@chakra-ui/react";

import ChapterList from "./ChapterList";

interface Props {
    onPickChapter: (chapter: number) => void;
    pickedChapter: number;
}

const SideBar = ({ onPickChapter, pickedChapter }: Props) => {
    return (
        <Show above="lg">
            <Heading size="sm" padding="10px 0px 10px 15px">
                Filter by Chapter
            </Heading>
            <Box overflowY="auto" maxHeight="calc(100vh - 120px)" paddingRight="5px">
                <ChapterList onPickChapter={onPickChapter} pickedChapter={pickedChapter} />
            </Box>
        </Show>
    );
};

export default SideBar;
