import { Button } from "@chakra-ui/react";

interface PaginationButtonProps {
    page: number;
    isCurrent?: boolean;
}

export default function PaginationButton({ page, isCurrent = false }: PaginationButtonProps) {
    if (isCurrent) {
        return (
            <Button
                size="sm"
                fontSize="xs"
                width="4"
                colorScheme="pink"
                disabled
                _disabled={{
                    bgColor: 'pink.500',
                    cursor: 'default',
                }}
            >
                {page}
            </Button>
        )
    }

    return (
        <Button
            size="sm"
            fontSize="xs"
            width="4"
            bgColor="gray.700"
            _hover={{
                bg: 'gray.500'
            }}
        >
            {page}
        </Button>
    )
}
