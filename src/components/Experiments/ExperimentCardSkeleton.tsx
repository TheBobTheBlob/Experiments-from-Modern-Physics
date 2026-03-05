const ExperimentCardSkeleton = () => {
    return (
        <div className="rounded-2xl border border-border-light dark:border-border-dark bg-surface-card-light dark:bg-surface-card-dark overflow-hidden">
            <div className="h-[200px] bg-slate-200 dark:bg-slate-700 animate-skeleton animate-shimmer" />
            <div className="p-4">
                <div className="flex gap-2 mb-3">
                    <div className="h-6 w-20 bg-slate-200 dark:bg-slate-700 rounded-full animate-skeleton" />
                    <div className="h-6 w-24 bg-slate-200 dark:bg-slate-700 rounded-full animate-skeleton" />
                </div>
                <div className="space-y-2">
                    <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded-lg animate-skeleton w-3/4" />
                    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-lg animate-skeleton w-full" />
                    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-lg animate-skeleton w-2/3" />
                </div>
            </div>
            <div className="px-4 pb-4">
                <div className="h-10 w-32 bg-gradient-to-r from-accent-blue/20 to-accent-indigo/20 rounded-xl animate-skeleton" />
            </div>
        </div>
    );
};

export default ExperimentCardSkeleton;
