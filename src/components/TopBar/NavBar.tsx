import { HStack, Image, Heading, Show } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";

import SearchBar from "./SearchBar";

interface Props {
    onSearch: (searchText: string) => void;
    onPickChapter: (chapter: number) => void;
}

const NavBar = ({ onSearch, onPickChapter }: Props) => {
    return (
        <HStack spacing="5">
            <Image
                src={logo}
                title="logo"
                boxSize="40px"
                padding="3px 0px 3px 3px"
                onClick={() => onPickChapter(0)}
                cursor="pointer"
            />
            <Show above="lg">
                <Heading size="sm" whiteSpace="nowrap" color="modblue.200">
                    Experiments from Modern Physics
                </Heading>
            </Show>
            <SearchBar onSearch={onSearch} />
        </HStack>
    );
};

export default NavBar;
