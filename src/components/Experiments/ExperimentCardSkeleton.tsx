const ExperimentCardSkeleton = () => {
    return (
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden shadow-sm">
            <div className="h-[200px] bg-gray-200 dark:bg-gray-700 animate-skeleton" />
            <div className="p-2.5">
                <div className="space-y-2">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-skeleton w-3/4" />
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-skeleton w-full" />
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-skeleton w-2/3" />
                </div>
            </div>
            <div className="p-2.5">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-skeleton w-1/2" />
            </div>
        </div>
    );
};

export default ExperimentCardSkeleton;
