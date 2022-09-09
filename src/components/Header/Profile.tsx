import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showData?: boolean;
}

export default function Profile({ showData = true }: ProfileProps) {
  return (
    <Flex align="center">
      
      {showData && (
        <Box mr="4" textAlign="center">
            <Text>Josafá Marengo</Text>
            <Text color="gray.300" fontSize="small">
                josafabmarengo@gmail.com
            </Text>
        </Box>
      )}

        <Avatar size="md" name="Josafá Marengo" src="https://github.com/josafamarengo.png" />
    </Flex>
  )
}
