import { Box, Grid, GridItem, Heading, Show } from "@chakra-ui/react";
import { useState } from "react";

import ExperimentGrid from "./components/ExperimentGrid";
import Footer from "./components/Footer";
import GridTitle from "./components/GridTitle";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
    const [chapter, setChapter] = useState(0);
    const [search, setSearch] = useState("");

    return (
        <>
            <Grid
                templateAreas={{ base: `"nav" "main" "footer"`, lg: `"nav nav" "sidebar main" "footer footer"` }}
                templateColumns={{ base: "1fr", lg: "300px 1fr" }}
            >
                <GridItem area="nav" bg="chakra-body-bg" padding="10px" position="sticky" top="0" zIndex="2">
                    <NavBar onSearch={(searchText) => setSearch(searchText)} />
                </GridItem>
                <Box>
                    <Show above="lg">
                        <GridItem area="sidebar" position="sticky" top="40px" bottom="0" padding="20px">
                            <Heading size="sm" margin="0px 0px 10px 15px">
                                Filter by Chapter
                            </Heading>
                            <SideBar pickedChapter={chapter} onPickChapter={(chapter) => setChapter(chapter)} />
                        </GridItem>
                    </Show>
                </Box>

                <GridItem area="main" paddingRight="5px">
                    <GridTitle onClearChapter={(chapter) => setChapter(chapter)} chapter={chapter} />
                    <ExperimentGrid chapter={chapter} search={search} />
                </GridItem>
                <GridItem area="footer">
                    <Footer />
                </GridItem>
            </Grid>
        </>
    );
}

export default App;
