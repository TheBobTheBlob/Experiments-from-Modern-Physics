import { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";

import ExperimentGrid from "./components/Experiments/ExperimentGrid";
import GridTitle from "./components/Experiments/GridTitle";
import NavBar from "./components/TopBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer";

function App() {
    const [chapter, setChapter] = useState(0);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("chapter");
    const [totalExperiments, setTotalExperiments] = useState(0);
    const [visibleExperiments, setVisibleExperiments] = useState(0);

    return (
        <>
            <Grid
                templateAreas={{ base: `"nav" "main" "footer"`, lg: `"nav nav" "sidebar main" "sidebar footer"` }}
                templateColumns={{ base: "1fr", lg: "300px 1fr" }}
            >
                <GridItem
                    area="nav"
                    bg="chakra-body-bg"
                    padding="10px"
                    position="fixed"
                    top="0"
                    left="0"
                    right="0"
                    zIndex="1"
                >
                    <NavBar
                        onSearch={(searchText) => setSearch(searchText)}
                        onPickChapter={(chapter) => setChapter(chapter)}
                    />
                </GridItem>

                <GridItem area="sidebar" padding="20px 10px 10px 10px" position="fixed" top="50px" left="0">
                    <SideBar pickedChapter={chapter} onPickChapter={(chapter) => setChapter(chapter)} />
                </GridItem>

                <GridItem area="main" marginTop="50px" minHeight="80vh">
                    <GridTitle
                        onClearChapter={(chapter) => setChapter(chapter)}
                        onSelectSort={(sort) => setSort(sort)}
                        chapter={chapter}
                        sort={sort}
                        total={totalExperiments}
                        visible={visibleExperiments}
                    />
                    <ExperimentGrid
                        chapter={chapter}
                        search={search}
                        sort={sort}
                        onPickChapter={(chapter) => setChapter(chapter)}
                        onTotalChange={(experiments) => setTotalExperiments(experiments)}
                        onVisibleChange={(experiments) => setVisibleExperiments(experiments)}
                    />
                </GridItem>
                <GridItem area="footer" position="relative" bottom="0">
                    <Footer />
                </GridItem>
            </Grid>
        </>
    );
}

export default App;
