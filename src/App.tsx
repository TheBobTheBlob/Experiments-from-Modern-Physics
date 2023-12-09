import { Divider, Grid, GridItem } from "@chakra-ui/react";

import ExperimentGrid from "./components/Experiments/ExperimentGrid";
import Footer from "./components/Footer";
import GridTitle from "./components/GridTitle/GridTitle";
import SideBar from "./components/SideBar/SideBar";
import NavBar from "./components/TopBar/NavBar";

function App() {
    return (
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
                <NavBar />
            </GridItem>

            <GridItem area="sidebar" padding="20px 5px 10px 10px" position="fixed" top="50px" left="0">
                <SideBar />
            </GridItem>

            <GridItem area="main" marginTop="50px" minHeight="75vh">
                <GridTitle />
                <ExperimentGrid />
            </GridItem>

            <GridItem area="footer" padding="30px 10px 0px 10px">
                <Divider />
                <Footer />
            </GridItem>
        </Grid>
    );
}

export default App;
