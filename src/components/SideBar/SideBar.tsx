import ChapterList from "./ChapterList";

const SideBar = () => {
    return (
        <>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 py-2.5 pl-4">
                Filter by Chapter
            </h3>
            <div className="overflow-y-auto max-h-[calc(100vh-120px)] pr-1">
                <ChapterList />
            </div>
        </>
    );
};

export default SideBar;
