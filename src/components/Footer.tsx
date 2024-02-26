import { Center, HStack, Heading, Link } from "@chakra-ui/react";
import { ExternalLink } from "react-feather";

const Footer = () => {
    return (
        <Center>
            <Link isExternal={true} href="https://github.com/TheBobTheBlob/Experiments-from-Modern-Physics">
                <HStack>
                    <Heading size="sm" padding="30px 0px">
                        Created by Punit Turlapati
                    </Heading>
                    <ExternalLink />
                </HStack>
            </Link>
        </Center>
    );
};

export default Footer;
