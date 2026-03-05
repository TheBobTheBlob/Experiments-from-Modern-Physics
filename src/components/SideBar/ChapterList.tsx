import { useEffect, useState } from "react";

import { useChapterStore } from "../../Consts";
import data from "../../data/chapters.json";

interface Chapter {
    id: number;
    chapter: number;
    title: string;
}

const ChapterList = () => {
    const [chapters, setChapters] = useState<Chapter[]>([]);

    const chapter = useChapterStore((state) => state.chapter);
    const setChapter = useChapterStore((state) => state.setChapter);

    useEffect(() => {
        setChapters(JSON.parse(JSON.stringify(data)));
    }, []);

    return (
        <ul className="list-none p-0 m-0 space-y-0.5">
            {chapters.map((item) => (
                <li key={item.id}>
                    <button
                        className={`flex items-center gap-3 w-[260px] px-3 py-2 rounded-lg text-left
                            transition-all duration-200 cursor-pointer
                            hover:bg-accent-blue/8 dark:hover:bg-accent-blue/15
                            ${item.id === chapter
                                ? "bg-accent-blue/10 dark:bg-accent-blue/20"
                                : "bg-transparent"}`}
                        onClick={item.id === chapter ? () => setChapter(0) : () => setChapter(item.id)}
                    >
                        <span className={`flex items-center justify-center w-[26px] h-[26px] rounded-md shrink-0 text-sm font-bold text-white
                            ${item.id === chapter
                                ? "bg-gradient-to-br from-accent-blue to-accent-indigo"
                                : "bg-gradient-to-br from-accent-blue/70 to-accent-indigo/70"}`}>
                            {item.chapter}
                        </span>
                        <span
                            className={`text-left text-sm
                                ${item.id === chapter
                                    ? "text-slate-900 dark:text-slate-100 font-medium"
                                    : "text-slate-600 dark:text-slate-400"}`}
                        >
                            {item.title}
                        </span>
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default ChapterList;
