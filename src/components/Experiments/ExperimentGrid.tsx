import { useEffect, useState } from "react";
import { SimpleGrid } from "@chakra-ui/react";

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

interface Props {
    chapter: number;
    search: string;
    sort: string;
    onPickChapter: (chapter: number) => void;
    onTotalChange: (experiments: number) => void;
    onVisibleChange: (experiments: number) => void;
}

export const sortString = (string1: string, string2: string) => {
    if (string1 > string2) return 1;
    if (string1 < string2) return -1;
    return 0;
};

const ExperimentGrid = ({ chapter, search, sort, onPickChapter, onTotalChange, onVisibleChange }: Props) => {
    let json = JSON.parse(JSON.stringify(data));

    const [experiments, setExperiments] = useState<Experiment[]>([]);

    const [loading, setLoading] = useState(true);
    const skeletons = [1, 2, 3, 4, 5, 6];

    useEffect(() => {
        onTotalChange(json.length);
    }, []);

    useEffect(() => {
        setLoading(true);

        if (chapter > 0) json = json.filter((experiment: Experiment) => experiment.chapter === chapter);
        if (search) {
            search = search.toLowerCase();
            json = json.filter(
                (experiment: Experiment) =>
                    experiment.title.toLowerCase().includes(search) ||
                    experiment.description.toLowerCase().includes(search) ||
                    experiment.channel.toLowerCase().includes(search)
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

        onVisibleChange(json.length);
        setExperiments(json);

        setLoading(false);
    }, [chapter, search, sort]);

    return (
        <SimpleGrid
            padding="10px"
            spacing="30px"
            gridTemplateColumns="repeat(auto-fill, minmax(350px, 1fr))"
            justifyContent="space-between"
        >
            {loading
                ? skeletons.map((skeleton) => <ExperimentCardSkeleton key={skeleton} />)
                : experiments.map((experiment) => (
                      <ExperimentCard
                          key={experiment.id}
                          experiment={experiment}
                          onPickChapter={(chapter) => onPickChapter(chapter)}
                      />
                  ))}
        </SimpleGrid>
    );
};

export default ExperimentGrid;
