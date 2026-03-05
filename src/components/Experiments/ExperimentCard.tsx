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
        <div className="rounded-2xl border border-border-light dark:border-border-dark
            bg-surface-card-light dark:bg-surface-card-dark overflow-hidden card-glow">
            <img
                src={`/thumbnails/${experiment.id}.webp`}
                className="w-full aspect-video object-cover"
                alt={`Experiment ${experiment.id} thumbnail`}
            />

            <div className="p-4">
                <div className="flex items-center gap-2 mb-3">
                    <span
                        className="px-2.5 py-1 text-xs font-semibold rounded-full
                            bg-accent-violet/10 dark:bg-accent-violet/20
                            text-accent-violet dark:text-violet-400 cursor-pointer
                            hover:bg-accent-violet/20 dark:hover:bg-accent-violet/30 transition-colors"
                        onClick={() => setChapter(experiment.chapter)}
                    >
                        Chapter {experiment.chapter}
                    </span>
                    <span
                        className="px-2.5 py-1 text-xs font-semibold rounded-full
                            bg-accent-cyan/10 dark:bg-accent-cyan/20
                            text-accent-cyan dark:text-cyan-400 cursor-pointer
                            hover:bg-accent-cyan/20 dark:hover:bg-accent-cyan/30 transition-colors"
                        onClick={() => openInNewTab(experiment.channelLink)}
                    >
                        <span className="flex items-center gap-1">
                            {experiment.channel}
                            <ExternalLink width="12px" height="12px" />
                        </span>
                    </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {experiment.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {experiment.description}
                </p>
            </div>

            <div className="px-4 pb-4">
                <button
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl
                        bg-gradient-to-r from-accent-blue to-accent-indigo
                        text-white font-medium cursor-pointer
                        hover:brightness-110 hover:shadow-lg hover:shadow-accent-blue/30
                        shadow-md shadow-accent-blue/20
                        transition-all duration-300"
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
