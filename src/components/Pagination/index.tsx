import { Stack, Box } from "@chakra-ui/react";
import PaginationButton from "./PaginationButton";

export function Pagination() {
    return (
        <Stack
            direction={["column", "row"]}
            mt="8"
            justify="space-between"
            align="center"
            spacing="6"
        >
            <Box>
                <strong>0</strong> - <strong>10</strong> of <strong>50</strong>
            </Box>
            <Stack direction="row" spacing="2">
                <PaginationButton page={1} isCurrent />
                <PaginationButton page={2} />
                <PaginationButton page={3} />
                <PaginationButton page={4} />
                <PaginationButton page={5} />
            </Stack>
        </Stack>
    );
}
