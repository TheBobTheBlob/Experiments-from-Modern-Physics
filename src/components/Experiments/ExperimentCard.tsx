import { ExternalLink } from "react-feather";

import { useChapterStore } from "../../Consts";
import { Experiment } from "./ExperimentGrid";

// Forces links to open in new tab
const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
};

// Converts an integer into a minutes and seconds
// Eg. 78 -> 1m 16s
const intToTime = (time: number) => {
    const minutes = Math.floor(time / 60).toString();
    const seconds = (time % 60).toString().padStart(2, "0");

    if (minutes === "0") return `${seconds}s`;
    else return `${minutes}m ${seconds}s`;
};

interface Props {
    experiment: Experiment;
}

const ExperimentCard = ({ experiment }: Props) => {
    const setChapter = useChapterStore((state) => state.setChapter);

    return (
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img
                src={`/thumbnails/${experiment.id}.webp`}
                className="w-full aspect-video object-cover"
                alt={`Experiment ${experiment.id} thumbnail`}
            />

            <div className="p-2.5">
                <div className="flex items-center gap-2 mt-2.5">
                    <span
                        className="px-2 py-0.5 text-xs font-semibold rounded bg-gray-100 dark:bg-gray-700
                            text-gray-700 dark:text-gray-300 cursor-pointer
                            hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        onClick={() => setChapter(experiment.chapter)}
                    >
                        Chapter {experiment.chapter}
                    </span>
                    <span
                        className="px-2 py-0.5 text-xs font-semibold rounded bg-gray-100 dark:bg-gray-700
                            text-gray-700 dark:text-gray-300 cursor-pointer
                            hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        onClick={() => openInNewTab(experiment.channelLink)}
                    >
                        <span className="flex items-center gap-1">
                            {experiment.channel}
                            <ExternalLink width="15px" height="15px" />
                        </span>
                    </span>
                </div>

                <h3 className="text-lg font-bold mt-2.5 text-gray-900 dark:text-gray-100">{experiment.title}</h3>

                <p className="mt-2.5 text-sm text-gray-700 dark:text-gray-300">{experiment.description}</p>
            </div>

            <div className="p-2.5">
                <button
                    className="flex items-center gap-2 px-4 py-2 rounded-md bg-modblue-500 text-white
                        hover:bg-modblue-600 transition-colors font-medium cursor-pointer"
                    onClick={() => openInNewTab(experiment.link)}
                >
                    <ExternalLink size={16} />
                    Watch ({intToTime(experiment.duration)})
                </button>
            </div>
        </div>
    );
};

export default ExperimentCard;
