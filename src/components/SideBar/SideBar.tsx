import ChapterList from "./ChapterList";

const SideBar = () => {
    return (
        <>
            <h3 className="text-sm font-bold py-2.5 pl-4">Filter by Chapter</h3>
            <div className="overflow-y-auto max-h-[calc(100vh-120px)] pr-1">
                <ChapterList />
            </div>
        </>
    );
};

export default SideBar;
