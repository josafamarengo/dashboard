import { Flex, Icon, IconButton, Text, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import Notifications from "./Notifications";
import Profile from "./Profile";
import Search from "./Search";

function Header() {
    const { onOpen } = useSidebarDrawer();

    const isWide = useBreakpointValue({
        base: false,
        lg: true
    });

  return (
    <Flex
        as="header"
        w="100%"
        maxWidth={1480}
        h="20"
        mx="auto"
        mt="4"
        px="8"
        align="center"
    >

        { !isWide && (
            <IconButton
                aria-label="Open navigation"
                icon={<Icon as={RiMenuLine} />}
                fontSize="24"
                variant="unstyled"
                onClick={onOpen}
                mr="2"
            >
            </IconButton>
        )}
        <Text fontSize={["2xl","3xl"]} fontWeight="bold" letterSpacing="tight" w="64">
            DASH
        </Text>

        {isWide && <Search />}

        <Flex
            align="center"
            ml="auto"
        >
            <Notifications />
            <Profile showData={isWide} />
        </Flex>
    </Flex>
  )
}

export default Header;