import { Flex, SimpleGrid, Box, Text } from "@chakra-ui/react";
import Head from "next/head";
import { Sidebar } from "../components/Sidebar";
import Header from "../components/Header";

function dashboard() {
  return (
    <>
    <Head>
      <title>Dashboard | DASH</title>
    </Head>
    <Flex direction="column" h="100vh">
      <Header />
      <Flex 
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
      >
      <Sidebar />

      <SimpleGrid flex="1" gap="4" minChildWidth="320px">
        <Box
          p={["6", "8"]}
          bg="gray.800"
          borderRadius={8}
          pb="4"
        >
          <Text fontSize="lg" mb="4">Inscritos da semana</Text>
          {/* <Chart type="area" height={160} series={[{ data: [31, 120, 10, 28, 61, 18, 109] }]} options={options} /> */}
        </Box>
        <Box
          p={["6", "8"]}
          bg="gray.800"
          borderRadius={8}
          pb="4"
        >
          <Text fontSize="lg" mb="4">Taxa de abertura</Text>
          {/* <Chart type="area" height={160} series={[{ data: [31, 120, 10, 28, 61, 18, 109] }]} options={options} /> */}
        </Box>
      </SimpleGrid>

      </Flex>
    </Flex>
    </>
  )
}

export default dashboard;