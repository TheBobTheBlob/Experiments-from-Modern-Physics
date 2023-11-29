import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: "system",
    useSystemColorMode: true,
};

const theme = extendTheme({
    config,
    colors: {
        modblue: {
            50: "#e0f4ff",
            100: "#b5dbfd",
            200: "#4ea5ef",
            300: "#5bacf0",
            400: "#3194eb",
            500: "#1a7ad1",
            600: "#0f5fa4",
            700: "#064476",
            800: "#002949",
            900: "#000f1d",
        },
    },
});

export default theme;
