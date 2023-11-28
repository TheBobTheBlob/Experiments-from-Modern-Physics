import { useRef, useState } from "react";
import { Input, InputGroup, InputLeftElement, InputRightElement, Kbd, Show, Button } from "@chakra-ui/react";
import { Search } from "react-feather";
import { useHotkeys } from "react-hotkeys-hook";

interface Props {
    onSearch: (searchText: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
    const ref = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState("");
    const [seeShortcut, setSeeShortcut] = useState(true);

    useHotkeys(
        "ctrl+k",
        () => {
            ref.current?.focus();
        },
        { preventDefault: true }
    );

    const updateSearch = (text: string) => {
        onSearch(text);
        setValue(text);
    };

    return (
        <form
            style={{ width: "100%" }}
            onInput={() => {
                if (ref.current) {
                    updateSearch(ref.current.value);
                }
            }}
            onSubmit={(event) => event.preventDefault()}
            onFocus={() => setSeeShortcut(false)}
            onBlur={() => setSeeShortcut(true)}
        >
            <InputGroup>
                <InputLeftElement pointerEvents="none">
                    <Search />
                </InputLeftElement>
                <Input
                    ref={ref}
                    placeholder="Search experiments..."
                    name="search"
                    variant="filled"
                    colorScheme="modblue"
                    paddingRight={{ base: "0px", lg: seeShortcut ? "195px" : "120px" }}
                />
                <Show above="lg">
                    {seeShortcut && (
                        <InputRightElement paddingRight={value ? "155px" : "40px"} pointerEvents="none">
                            <>
                                <Kbd>Ctrl</Kbd>
                                <Kbd>K</Kbd>
                            </>
                        </InputRightElement>
                    )}
                    {value && (
                        <InputRightElement width="115px">
                            <Button
                                variant="ghost"
                                colorScheme="modblue"
                                onClick={() => {
                                    if (ref.current) {
                                        ref.current.value = "";
                                        updateSearch(ref.current.value);
                                        ref.current.focus();
                                    }
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
