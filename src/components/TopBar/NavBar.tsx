import { HStack, Heading, Image, Show } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";

import { useChapterStore } from "../../Consts";

import SearchBar from "./SearchBar";

const NavBar = () => {
    const setChapter = useChapterStore((state) => state.setChapter);

    return (
        <HStack spacing="5">
            <Image
                src={logo}
                title="logo"
                boxSize="40px"
                padding="3px 0px 3px 3px"
                onClick={() => setChapter(0)}
                cursor="pointer"
            />
            <Show above="lg">
                <Heading size="sm" whiteSpace="nowrap" color="modblue.200">
                    Experiments from Modern Physics
                </Heading>
            </Show>
            <SearchBar />
        </HStack>
    );
};

export default NavBar;
