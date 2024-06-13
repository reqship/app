import Head from "next/head";
import { Title, Box, Text, Card, Flex, Badge, Group } from "@mantine/core";
import Quote from "@/components/quote";

export default function Home() {
  return (
    <>
      <Head>
        <title>ReqShip</title>
        <meta
          name="description"
          content="Innovative table ordering system for bars and restaurants."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Box component="main" pb="lg">
        <Group>
          <Title order={1}>ReqShip</Title>
          <Badge mt={5} size="xs" variant="light" color="reqship-pink">
            coming soon
          </Badge>
        </Group>
        <Quote dividerColor={"reqship-green"}>
          High Quality Customer Friendly table to bar ordering system.
        </Quote>
      </Box>

      <Card bg="dark.5" mt="md" withBorder>
        <Card bg="transparent" w="100%" p="xl" py="lg" h="fit-content">
          <Flex h="100%" direction="column">
            <Title c="white">
              Order management System for easy table service integration at any
              restaurant or bar.
            </Title>
            <Text c="white">
              A simple table service management application providing customers
              and administrators with a simple and intuitive interface.
            </Text>
          </Flex>
        </Card>
      </Card>
    </>
  );
}
