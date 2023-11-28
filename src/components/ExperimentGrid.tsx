import { useEffect, useState } from "react";
import { SimpleGrid } from "@chakra-ui/react";

import ExperimentCard from "./ExperimentCard";
import ExperimentCardSkeleton from "./ExperimentCardSkeleton";

import data from "../data/experiments.json";

export interface Experiment {
    id: number;
    title: string;
    chapter: number;
    link: string;
    duration: string;
    description: string;
}

interface Props {
    chapter: number;
    search: string;
}

const ExperimentGrid = ({ chapter, search }: Props) => {
    const [experiments, setExperiments] = useState<Experiment[]>([]);

    const [loading, setLoading] = useState(true);
    const skeletons = [1, 2, 3, 4, 5, 6];

    useEffect(() => {
        let json = JSON.parse(JSON.stringify(data));

        if (chapter > 0) json = json.filter((experiment: Experiment) => experiment.chapter === chapter);
        if (search)
            json = json.filter(
                (experiment: Experiment) =>
                    experiment.title.toLowerCase().includes(search.toLowerCase()) ||
                    experiment.description.toLowerCase().includes(search.toLowerCase())
            );

        setExperiments(json);
        setLoading(false);
    }, [chapter, search]);

    return (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding="10px" spacing={10}>
            {loading
                ? skeletons.map((skeleton) => <ExperimentCardSkeleton key={skeleton} />)
                : experiments.map((experiment) => <ExperimentCard key={experiment.id} experiment={experiment} />)}
        </SimpleGrid>
    );
};

export default ExperimentGrid;
