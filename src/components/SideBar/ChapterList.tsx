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
        <ul className="list-none p-0 m-0">
            {chapters.map((item) => (
                <li key={item.id}>
                    <button
                        className={`flex items-center gap-2 w-[260px] px-3 py-2 rounded-md text-left
                            transition-colors cursor-pointer
                            hover:bg-modblue-50 dark:hover:bg-modblue-900
                            ${item.id === chapter ? "bg-modblue-50 dark:bg-modblue-900" : "bg-transparent"}`}
                        onClick={item.id === chapter ? () => setChapter(0) : () => setChapter(item.id)}
                    >
                        <span className="flex items-center justify-center bg-modblue-200 w-[25px] h-[25px] rounded-[5px] shrink-0">
                            <span className="font-bold text-white dark:text-gray-900 text-sm">{item.chapter}</span>
                        </span>
                        <span
                            className={`text-left text-sm text-gray-900 dark:text-gray-100
                                ${item.id === chapter ? "opacity-100" : "opacity-75"}`}
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
