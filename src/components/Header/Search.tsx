import { Flex, Input, Icon } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';

export default function Search() {
  return (
    <Flex
        as="label"
        flex="1"
        py="3"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
    >
        <Input
            type="text"
            placeholder="Search in the platform"
            _placeholder={{ color: 'gray.400' }}
            color="gray.50"
            variant="unstyled"
            px="4"
            mr="4"
            w="100%"
        />
        <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  )
}
