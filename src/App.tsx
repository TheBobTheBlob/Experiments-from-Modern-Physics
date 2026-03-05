import ExperimentGrid from "./components/Experiments/ExperimentGrid";
import Footer from "./components/Footer";
import GridTitle from "./components/GridTitle/GridTitle";
import SideBar from "./components/SideBar/SideBar";
import NavBar from "./components/TopBar/NavBar";

function App() {
    return (
        <div className="min-h-screen mesh-bg">
            {/* Nav - fixed top, glassmorphism */}
            <div className="backdrop-blur-[20px] backdrop-saturate-[1.8] bg-transparent p-2.5 pr-2.5 lg:pr-6 fixed w-full z-10 border-b border-border-light dark:border-border-dark">
                <NavBar />
            </div>

            {/* Sidebar - fixed left, desktop only */}
            <div className="hidden lg:block py-5 px-2.5 fixed top-[50px] left-0 w-[300px]">
                <SideBar />
            </div>

            {/* Main content */}
            <div className="pt-[50px] lg:ml-[300px] min-h-[75vh]">
                <GridTitle />
                <ExperimentGrid />
            </div>

            {/* Footer */}
            <div className="lg:ml-[300px] px-2.5 pt-8">
                <hr className="border-border-light dark:border-border-dark" />
                <Footer />
            </div>
        </div>
    );
}

export default App;
