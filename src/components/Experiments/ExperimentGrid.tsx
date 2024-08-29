import { SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { useChapterStore, useCountStore, useSearchStore, useSortStore } from "../../Consts";

import ExperimentCard from "./ExperimentCard";
import ExperimentCardSkeleton from "./ExperimentCardSkeleton";

import data from "../../data/experiments.json";

export interface Experiment {
    id: number;
    title: string;
    chapter: number;
    link: string;
    duration: number;
    channel: string;
    channelLink: string;
    description: string;
}

const sortString = (string1: string, string2: string) => {
    if (string1 > string2) return 1;
    if (string1 < string2) return -1;
    return 0;
};

const ExperimentGrid = () => {
    const [experiments, setExperiments] = useState<Experiment[]>([]);

    const chapter = useChapterStore((state) => state.chapter);
    const sort = useSortStore((state) => state.sort);
    const search = useSearchStore((state) => state.search);

    const setVisibleCount = useCountStore((state) => state.setVisibleCount);
    const setTotalCount = useCountStore((state) => state.setTotalCount);

    const [loading, setLoading] = useState(true);
    const skeletons = [1, 2, 3, 4, 5, 6]; // Array to help with skeleton generation

    useEffect(() => {
        setTotalCount(data.length);
    }, [setTotalCount]);

    useEffect(() => {
        setLoading(true);
        let json = [...data];

        if (chapter > 0) json = json.filter((experiment: Experiment) => experiment.chapter === chapter);
        if (search) {
            const searchLC = search.toLowerCase();
            json = json.filter(
                (experiment: Experiment) =>
                    experiment.title.toLowerCase().includes(searchLC) ||
                    experiment.description.toLowerCase().includes(searchLC) ||
                    experiment.channel.toLowerCase().includes(searchLC)
            );
        }

        if (sort === "chapter") {
            json = json.sort((a: Experiment, b: Experiment) => a.chapter - b.chapter);
        } else if (sort === "duration") {
            json = json.sort((a: Experiment, b: Experiment) => a.duration - b.duration);
        } else {
            json = json.sort((a: Experiment, b: Experiment) =>
                sortString(a.title.toLowerCase(), b.title.toLowerCase())
            );
        }

        setVisibleCount(json.length);
        setExperiments(json);

        setLoading(false);
    }, [chapter, search, sort, setVisibleCount]);

    return (
        <SimpleGrid
            padding="10px"
            spacing="30px"
            gridTemplateColumns="repeat(auto-fill, minmax(350px, 1fr))"
            justifyContent="space-between"
        >
            {loading
                ? skeletons.map((skeleton) => <ExperimentCardSkeleton key={skeleton} />)
                : experiments.map((experiment) => <ExperimentCard key={experiment.id} experiment={experiment} />)}
        </SimpleGrid>
    );
};

export default ExperimentGrid;
