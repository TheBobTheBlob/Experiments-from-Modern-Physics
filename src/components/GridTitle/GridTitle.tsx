import { Show } from "@chakra-ui/react";

import GridTitleDesktop from "./GridTitleDesktop";
import GridTitleMobile from "./GridTitleMobile";

interface Props {
    onSelectChapter: (chapter: number) => void;
    onSelectSort: (sort: string) => void;
    chapter: number;
    sort: string;
    total: number;
    visible: number;
}

const GridTitle = ({ onSelectChapter, onSelectSort, chapter, sort, total, visible }: Props) => {
    return (
        <>
            <Show above="lg">
                <GridTitleDesktop
                    onSelectChapter={onSelectChapter}
                    onSelectSort={(sort) => onSelectSort(sort)}
                    chapter={chapter}
                    sort={sort}
                    total={total}
                    visible={visible}
                />
            </Show>
            <Show below="lg">
                <GridTitleMobile
                    onSelectChapter={onSelectChapter}
                    onSelectSort={(sort) => onSelectSort(sort)}
                    chapter={chapter}
                    sort={sort}
                    total={total}
                    visible={visible}
                />
            </Show>
        </>
    );
};

export default GridTitle;
