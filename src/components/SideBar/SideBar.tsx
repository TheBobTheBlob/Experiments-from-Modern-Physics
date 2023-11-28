import { Heading, Show } from "@chakra-ui/react";

import ChapterList from "./ChapterList";

interface Props {
    onPickChapter: (chapter: number) => void;
    pickedChapter: number;
}

const SideBar = ({ onPickChapter, pickedChapter }: Props) => {
    return (
        <Show above="lg">
            <Heading size="sm" margin="10px 0px 10px 15px">
                Filter by Chapter
            </Heading>
            <ChapterList onPickChapter={onPickChapter} pickedChapter={pickedChapter} />
        </Show>
    );
};

export default SideBar;
