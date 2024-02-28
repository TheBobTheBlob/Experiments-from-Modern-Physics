import { Center, HStack, Heading, Link } from "@chakra-ui/react";
import { GitHub } from "react-feather";

const Footer = () => {
    return (
        <Center>
            <Heading size="sm" padding="30px 0px">
                Created by&nbsp;
            </Heading>
            <Link isExternal={true} href="https://github.com/TheBobTheBlob/Experiments-from-Modern-Physics">
                <HStack>
                    <Heading size="sm">Punit Turlapati</Heading>
                    <GitHub />
                </HStack>
            </Link>
        </Center>
    );
};

export default Footer;
