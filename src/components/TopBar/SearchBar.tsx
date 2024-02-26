import { Button, Input, InputGroup, InputLeftElement, InputRightElement, Kbd, Show } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { Search } from "react-feather";
import { useHotkeys } from "react-hotkeys-hook";

import { useSearchStore } from "../../Consts";

const SearchBar = () => {
    const searchRef = useRef<HTMLInputElement>(null);

    const [seeShortcut, setSeeShortcut] = useState(true);

    const search = useSearchStore((store) => store.search);
    const setSearch = useSearchStore((store) => store.setSearch);

    useHotkeys(
        "ctrl+k",
        () => {
            searchRef.current?.focus();
        },
        { preventDefault: true }
    );

    return (
        <form
            style={{ width: "100%" }}
            onSubmit={(event) => event.preventDefault()}
            onFocus={() => setSeeShortcut(false)}
            onBlur={() => setSeeShortcut(true)}
        >
            <InputGroup>
                <InputLeftElement pointerEvents="none">
                    <Search />
                </InputLeftElement>
                <Input
                    ref={searchRef}
                    placeholder="Search experiments..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    name="search"
                    variant="filled"
                    colorScheme="modblue"
                    paddingRight={{ base: "0px", lg: seeShortcut ? "195px" : "120px" }}
                />
                <Show above="lg">
                    {seeShortcut && (
                        <InputRightElement paddingRight={search ? "155px" : "40px"} pointerEvents="none">
                            <Kbd>Ctrl</Kbd>
                            <Kbd>K</Kbd>
                        </InputRightElement>
                    )}
                    {search && (
                        <InputRightElement width="115px">
                            <Button
                                variant="ghost"
                                colorScheme="modblue"
                                onClick={() => {
                                    setSearch("");
                                    setSeeShortcut(true);
                                }}
                            >
                                Clear search
                            </Button>
                        </InputRightElement>
                    )}
                </Show>
            </InputGroup>
        </form>
    );
};

export default SearchBar;
