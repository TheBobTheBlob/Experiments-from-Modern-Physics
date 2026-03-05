import logo from "../../assets/logo.webp";

import { useChapterStore } from "../../Consts";

import SearchBar from "./SearchBar";

const NavBar = () => {
    const setChapter = useChapterStore((state) => state.setChapter);

    return (
        <div className="flex items-center gap-5">
            <img
                src={logo}
                title="logo"
                className="w-10 h-10 p-[3px] cursor-pointer"
                onClick={() => setChapter(0)}
                alt="logo"
            />
            <h2 className="hidden lg:block text-sm font-bold whitespace-nowrap text-modblue-200">
                Experiments from Modern Physics
            </h2>
            <SearchBar />
        </div>
    );
};

export default NavBar;
