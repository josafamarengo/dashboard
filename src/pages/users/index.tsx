import { Box, Flex, Heading, Text, Icon, Table, Thead, Tr, Th, Tbody, Td, Checkbox, Button, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Header from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

const UserList = () => {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

  return (
    <Box>
        <Header />
        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px={["2", "4", "6"]}>
            <Sidebar />
            <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                <Flex mb="8" justify="space-between" align="center">
                    <Heading size="lg" fontWeight="normal">Users</Heading>
                    <Link   href="/users/create" passHref>
                        <Button as="a" size="sm" fontSize="sm" colorScheme="yellow" leftIcon={<Icon as={RiAddLine} fontSize="20" />}>
                            Create new
                        </Button>
                    </Link>
                </Flex>
                <Table colorScheme="whiteAlpha">
                    <Thead>
                        <Tr>
                            <Th px={["2", "4", "6"]} color="gray.300" width="8">
                                <Checkbox colorScheme="pink" />
                            </Th>
                            <Th>User</Th>
                            <Th>Date</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td px={["2", "4", "6"]}>
                                <Checkbox colorScheme="pink" />
                            </Td>
                            <Td>
                                <Box>
                                    <Text fontWeight="bold">John Doe</Text>
                                    <Text fontSize="sm" color="gray.300">

                                    </Text>
                                </Box>
                            </Td>
                            {isWideVersion && <Td>04 de Abril, 2021</Td>}

                            {isWideVersion && <Td>
                                <Button as="a" size="sm" fontSize="sm" colorScheme="yellow" leftIcon={<Icon as={RiPencilLine} fontSize="16" />}>
                                    Edit
                                </Button>
                            </Td>}
                        </Tr>
                    </Tbody>
                </Table>
                <Pagination />
            </Box>
        </Flex>                      
    </Box>
  )
}

export default UserList;