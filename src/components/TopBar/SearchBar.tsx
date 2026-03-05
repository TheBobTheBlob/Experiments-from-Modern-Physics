import { useRef, useState } from "react";
import { Search } from "react-feather";
import { useHotkeys } from "react-hotkeys-hook";

import { useSearchStore } from "../../Consts";

const SearchBar = () => {
    const searchRef = useRef<HTMLInputElement>(null);

    const [seeShortcut, setSeeShortcut] = useState(true);

    const search = useSearchStore((store) => store.search);
    const setSearch = useSearchStore((store) => store.setSearch);

    useHotkeys(
        "ctrl+k",
        () => {
            searchRef.current?.focus();
        },
        { preventDefault: true },
    );

    return (
        <form
            className="w-full"
            onSubmit={(event) => event.preventDefault()}
            onFocus={() => setSeeShortcut(false)}
            onBlur={() => setSeeShortcut(true)}
        >
            <div className="relative flex items-center">
                <div className="absolute left-3 pointer-events-none text-gray-500 dark:text-gray-400">
                    <Search size={18} />
                </div>
                <input
                    ref={searchRef}
                    placeholder="Search experiments..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    name="search"
                    className="w-full pl-10 pr-4 lg:pr-[120px] py-2 rounded-md bg-gray-100 dark:bg-gray-800
                        text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400
                        border border-transparent focus:border-modblue-400 focus:outline-none
                        transition-colors"
                />
                <div className="hidden lg:flex absolute right-3 items-center gap-2">
                    {seeShortcut && !search && (
                        <span className="flex items-center gap-1 pointer-events-none">
                            <kbd className="px-1.5 py-0.5 text-xs rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                                Ctrl
                            </kbd>
                            <kbd className="px-1.5 py-0.5 text-xs rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                                K
                            </kbd>
                        </span>
                    )}
                    {search && (
                        <button
                            type="button"
                            className="text-sm text-modblue-500 hover:text-modblue-600 dark:text-modblue-300 dark:hover:text-modblue-200 font-medium cursor-pointer"
                            onClick={() => {
                                setSearch("");
                                setSeeShortcut(true);
                            }}
                        >
                            Clear search
                        </button>
                    )}
                </div>
            </div>
        </form>
    );
};

export default SearchBar;
