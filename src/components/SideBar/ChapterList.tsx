import { List, ListItem, Text, Button, Center } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import data from "../../data/chapters.json";

interface Chapter {
    id: number;
    chapter: number;
    title: string;
}

interface Props {
    onPickChapter: (chapter: number) => void;
    pickedChapter: number;
}

const ChapterList = ({ onPickChapter, pickedChapter }: Props) => {
    const [chapters, setChapters] = useState<Chapter[]>([]);

    useEffect(() => {
        setChapters(JSON.parse(JSON.stringify(data)));
    }, []);

    return (
        <List>
            {chapters.map((chapter) => (
                <ListItem key={chapter.id}>
                    <Button
                        variant="ghost"
                        colorScheme="modblue"
                        width="260px"
                        isActive={pickedChapter === chapter.id}
                        leftIcon={
                            <Center bgColor="modblue.200" width="25px" height="25px" borderRadius="5px">
                                <Text as="b" color="chakra-body-text">
                                    {chapter.chapter}
                                </Text>
                            </Center>
                        }
                        onClick={
                            pickedChapter === chapter.id ? () => onPickChapter(0) : () => onPickChapter(chapter.id)
                        }
                    >
                        <Text
                            width="260px"
                            align="left"
                            color="chakra-body-text"
                            opacity={pickedChapter === chapter.id ? 1 : 0.5}
                            fontWeight="normal"
                        >
                            {chapter.title}
                        </Text>
                    </Button>
                </ListItem>
            ))}
        </List>
    );
};

export default ChapterList;
