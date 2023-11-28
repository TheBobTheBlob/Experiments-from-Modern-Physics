import { useState, useEffect } from "react";
import { List, ListItem, Text, HStack, Button, Center } from "@chakra-ui/react";

import data from "../data/chapters.json";

interface Chapter {
    id: number;
    chapter: number;
    title: string;
}

interface Props {
    onPickChapter: (chapter: number) => void;
    pickedChapter: number;
}

const SideBar = ({ onPickChapter, pickedChapter }: Props) => {
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
                        <HStack align="left" width="260px">
                            <Text
                                color="chakra-body-text"
                                opacity={pickedChapter === chapter.id ? 1 : 0.5}
                                fontWeight="normal"
                            >
                                {chapter.title}
                            </Text>
                        </HStack>
                    </Button>
                </ListItem>
            ))}
        </List>
    );
};

export default SideBar;
