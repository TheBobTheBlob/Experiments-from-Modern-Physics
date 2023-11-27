import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
    return (
        <div>
            <h1>Modern Physics Experiments</h1>
            <Grid templateAreas={{ base: `"nav" "sidebar" "main"`, lg: `"nav nav" "sidebar main"` }} padding="10px">
                <GridItem area="nav">
                    <NavBar />
                </GridItem>
                <GridItem area="sidebar" bg="gold">
                    Sidebar
                </GridItem>
                <GridItem area="main" bg="dodgerblue">
                    Main
                </GridItem>
            </Grid>
        </div>
    );
}

export default App;
