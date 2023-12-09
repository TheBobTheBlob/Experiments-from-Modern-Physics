import { useState, useEffect } from "react";
import { List, ListItem, Text, Button, Center } from "@chakra-ui/react";

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
        <List>
            {chapters.map((item) => (
                <ListItem key={item.id}>
                    <Button
                        variant="ghost"
                        colorScheme="modblue"
                        width="260px"
                        isActive={item.id === chapter}
                        leftIcon={
                            <Center bgColor="modblue.200" width="25px" height="25px" borderRadius="5px">
                                <Text as="b" color="chakra-body-bg">
                                    {item.chapter}
                                </Text>
                            </Center>
                        }
                        onClick={item.id === chapter ? () => setChapter(0) : () => setChapter(item.id)}
                    >
                        <Text
                            width="260px"
                            align="left"
                            color="chakra-body-text"
                            opacity={item.id === chapter ? 1 : 0.75}
                            fontWeight="normal"
                        >
                            {item.title}
                        </Text>
                    </Button>
                </ListItem>
            ))}
        </List>
    );
};

export default ChapterList;
