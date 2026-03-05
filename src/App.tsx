import ExperimentGrid from "./components/Experiments/ExperimentGrid";
import Footer from "./components/Footer";
import GridTitle from "./components/GridTitle/GridTitle";
import SideBar from "./components/SideBar/SideBar";
import NavBar from "./components/TopBar/NavBar";

function App() {
    return (
        <div className="min-h-screen">
            {/* Nav - fixed top */}
            <div className="bg-white dark:bg-gray-900 p-2.5 pr-2.5 lg:pr-6 fixed w-full z-10">
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
                <hr className="border-gray-200 dark:border-gray-700" />
                <Footer />
            </div>
        </div>
    );
}

export default App;
