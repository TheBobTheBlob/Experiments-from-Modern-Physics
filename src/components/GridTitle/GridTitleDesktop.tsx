import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "react-feather";

import { useChapterStore, useCountStore, useSortStore } from "../../Consts";

const GridTitleDesktop = () => {
    const chapter = useChapterStore((state) => state.chapter);
    const setChapter = useChapterStore((state) => state.setChapter);

    const sort = useSortStore((state) => state.sort);
    const setSort = useSortStore((state) => state.setSort);

    const visibleCount = useCountStore((state) => state.visibleCount);
    const totalCount = useCountStore((state) => state.totalCount);

    return (
        <div className="flex items-center mx-2.5 my-5 gap-5">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {chapter === 0 ? "All Experiments" : `Chapter ${chapter} Experiments`}
            </h1>
            {chapter !== 0 && (
                <button
                    onClick={() => setChapter(0)}
                    className="text-modblue-500 hover:bg-modblue-50 dark:text-modblue-300 dark:hover:bg-modblue-900
                        px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer"
                >
                    Clear filter
                </button>
            )}
            <div className="flex-1" />

            <span className="text-sm opacity-75 text-right text-gray-900 dark:text-gray-100">
                Showing {visibleCount} of {totalCount}
            </span>

            <DropdownMenu.Root modal={false}>
                <DropdownMenu.Trigger asChild>
                    <button
                        className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800
                        text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700
                        transition-colors font-medium cursor-pointer"
                    >
                        Sort by: {sort.charAt(0).toUpperCase() + sort.slice(1)}
                        <ChevronDown size={16} />
                    </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                    <DropdownMenu.Content
                        className="bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200
                            dark:border-gray-700 py-1 min-w-[150px] z-50"
                        align="end"
                        sideOffset={5}
                    >
                        <DropdownMenu.Item
                            className="px-3 py-2 text-sm cursor-pointer outline-none
                                hover:bg-modblue-50 dark:hover:bg-modblue-900
                                text-gray-900 dark:text-gray-100"
                            onSelect={() => setSort("chapter")}
                        >
                            Chapter
                        </DropdownMenu.Item>
                        <DropdownMenu.Item
                            className="px-3 py-2 text-sm cursor-pointer outline-none
                                hover:bg-modblue-50 dark:hover:bg-modblue-900
                                text-gray-900 dark:text-gray-100"
                            onSelect={() => setSort("title")}
                        >
                            Title
                        </DropdownMenu.Item>
                        <DropdownMenu.Item
                            className="px-3 py-2 text-sm cursor-pointer outline-none
                                hover:bg-modblue-50 dark:hover:bg-modblue-900
                                text-gray-900 dark:text-gray-100"
                            onSelect={() => setSort("duration")}
                        >
                            Duration
                        </DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Portal>
            </DropdownMenu.Root>
        </div>
    );
};

export default GridTitleDesktop;
