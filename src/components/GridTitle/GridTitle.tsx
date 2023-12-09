import { Show } from "@chakra-ui/react";

import GridTitleDesktop from "./GridTitleDesktop";
import GridTitleMobile from "./GridTitleMobile";

const GridTitle = () => {
    return (
        <>
            <Show above="lg">
                <GridTitleDesktop />
            </Show>
            <Show below="lg">
                <GridTitleMobile />
            </Show>
        </>
    );
};

export default GridTitle;
