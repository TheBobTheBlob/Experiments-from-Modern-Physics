import { Box, Heading, Show } from "@chakra-ui/react";

import ChapterList from "./ChapterList";

const SideBar = () => {
    return (
        <Show above="lg">
            <Heading size="sm" padding="10px 0px 10px 15px">
                Filter by Chapter
            </Heading>
            <Box overflowY="auto" maxHeight="calc(100vh - 120px)" paddingRight="5px">
                <ChapterList />
            </Box>
        </Show>
    );
};

export default SideBar;
