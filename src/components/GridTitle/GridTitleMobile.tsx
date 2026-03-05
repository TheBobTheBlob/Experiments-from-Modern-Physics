import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "react-feather";

import { useChapterStore, useCountStore, useSortStore } from "../../Consts";
import data from "../../data/chapters.json";

const GridTitleMobile = () => {
    const chapter = useChapterStore((state) => state.chapter);
    const setChapter = useChapterStore((state) => state.setChapter);

    const sort = useSortStore((state) => state.sort);
    const setSort = useSortStore((state) => state.setSort);

    const visibleCount = useCountStore((state) => state.visibleCount);
    const totalCount = useCountStore((state) => state.totalCount);

    const ChapterMenuLabel = (chapterId: number) => {
        if (chapterId === 0) return "All Chapters";
        else {
            const chapterData = data.find((chapter) => chapter.id === chapterId);
            return `Chapter ${chapterData?.id}: ${chapterData?.title}`;
        }
    };

    return (
        <div className="flex flex-col items-center mx-2.5 my-5 gap-5">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                {chapter === 0 ? "All Experiments" : `Chapter ${chapter} Experiments`}
            </h1>
            <span className="text-sm text-slate-500 dark:text-slate-400">
                Showing {visibleCount} of {totalCount}
            </span>

            <DropdownMenu.Root modal={false}>
                <DropdownMenu.Trigger asChild>
                    <button
                        className="flex items-center justify-between w-full px-4 py-2 rounded-xl
                        bg-surface-elevated-light dark:bg-surface-elevated-dark
                        border border-border-light dark:border-border-dark
                        text-slate-700 dark:text-slate-300 hover:border-accent-blue/30
                        transition-all font-medium cursor-pointer"
                    >
                        {ChapterMenuLabel(chapter)}
                        <ChevronDown size={16} />
                    </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                    <DropdownMenu.Content
                        className="bg-white dark:bg-slate-800 rounded-xl shadow-lg
                            border border-border-light dark:border-border-dark
                            py-1.5 min-w-[200px] max-h-[300px] overflow-y-auto z-50
                            backdrop-blur-xl"
                        sideOffset={5}
                    >
                        <DropdownMenu.Item
                            className="px-3 py-2 text-sm cursor-pointer outline-none rounded-lg mx-1
                                hover:bg-accent-blue/10 dark:hover:bg-accent-blue/15
                                text-slate-700 dark:text-slate-300"
                            onSelect={() => setChapter(0)}
                        >
                            All Chapters
                        </DropdownMenu.Item>
                        {data.map((ch) => (
                            <DropdownMenu.Item
                                key={ch.id}
                                className="px-3 py-2 text-sm cursor-pointer outline-none rounded-lg mx-1
                                    hover:bg-accent-blue/10 dark:hover:bg-accent-blue/15
                                    text-slate-700 dark:text-slate-300"
                                onSelect={() => setChapter(ch.id)}
                            >
                                Chapter {ch.id}: {ch.title}
                            </DropdownMenu.Item>
                        ))}
                    </DropdownMenu.Content>
                </DropdownMenu.Portal>
            </DropdownMenu.Root>

            <DropdownMenu.Root modal={false}>
                <DropdownMenu.Trigger asChild>
                    <button
                        className="flex items-center justify-between w-full px-4 py-2 rounded-xl
                        bg-surface-elevated-light dark:bg-surface-elevated-dark
                        border border-border-light dark:border-border-dark
                        text-slate-700 dark:text-slate-300 hover:border-accent-blue/30
                        transition-all font-medium cursor-pointer"
                    >
                        Sort by: {sort.charAt(0).toUpperCase() + sort.slice(1)}
                        <ChevronDown size={16} />
                    </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                    <DropdownMenu.Content
                        className="bg-white dark:bg-slate-800 rounded-xl shadow-lg
                            border border-border-light dark:border-border-dark
                            py-1.5 min-w-[150px] z-50
                            backdrop-blur-xl"
                        sideOffset={5}
                    >
                        <DropdownMenu.Item
                            className="px-3 py-2 text-sm cursor-pointer outline-none rounded-lg mx-1
                                hover:bg-accent-blue/10 dark:hover:bg-accent-blue/15
                                text-slate-700 dark:text-slate-300"
                            onSelect={() => setSort("chapter")}
                        >
                            Chapter
                        </DropdownMenu.Item>
                        <DropdownMenu.Item
                            className="px-3 py-2 text-sm cursor-pointer outline-none rounded-lg mx-1
                                hover:bg-accent-blue/10 dark:hover:bg-accent-blue/15
                                text-slate-700 dark:text-slate-300"
                            onSelect={() => setSort("title")}
                        >
                            Title
                        </DropdownMenu.Item>
                        <DropdownMenu.Item
                            className="px-3 py-2 text-sm cursor-pointer outline-none rounded-lg mx-1
                                hover:bg-accent-blue/10 dark:hover:bg-accent-blue/15
                                text-slate-700 dark:text-slate-300"
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

export default GridTitleMobile;
