import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: "system",
    useSystemColorMode: true,
};

const theme = extendTheme({
    config,
    colors: {
        modblue: {
            50: "red",
            100: "orange",
            200: "#4EA5EF",
            300: "#7ABCF3",
            400: "#9ECEF6",
            500: "#2B5B83",
            600: "#1B3A54",
            700: "#102130",
            800: "blue",
            900: "black",
        },
    },
});

export default theme;
