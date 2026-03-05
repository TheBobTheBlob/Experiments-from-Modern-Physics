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
                <div className="absolute left-3 pointer-events-none text-slate-400 dark:text-slate-500">
                    <Search size={18} />
                </div>
                <input
                    ref={searchRef}
                    placeholder="Search experiments..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    name="search"
                    className="w-full pl-10 pr-4 lg:pr-[120px] py-2 rounded-xl
                        bg-surface-elevated-light dark:bg-surface-elevated-dark
                        text-slate-800 dark:text-slate-200
                        placeholder-slate-400 dark:placeholder-slate-500
                        border border-border-light dark:border-border-dark
                        focus:border-accent-blue/50 focus:ring-2 focus:ring-accent-blue/20
                        focus:outline-none transition-all"
                />
                <div className="hidden lg:flex absolute right-3 items-center gap-2">
                    {seeShortcut && !search && (
                        <span className="flex items-center gap-1 pointer-events-none">
                            <kbd className="px-1.5 py-0.5 text-xs rounded-md border border-border-light dark:border-border-dark bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                                Ctrl
                            </kbd>
                            <kbd className="px-1.5 py-0.5 text-xs rounded-md border border-border-light dark:border-border-dark bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                                K
                            </kbd>
                        </span>
                    )}
                    {search && (
                        <button
                            type="button"
                            className="text-sm text-accent-blue hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium cursor-pointer transition-colors"
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
