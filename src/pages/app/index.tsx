import { BusinessCard } from "@/components/business-card/business-card";
import API from "@/helpers/api";
import { Business } from "@/types/business";
import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Text,
  Group,
  Loader,
  LoadingOverlay,
  Pagination,
  TextInput,
} from "@mantine/core";
import { FormEvent, useEffect, useState } from "react";
import { FaSadCry } from "react-icons/fa";

export default function AppIndex() {
  const [bars, setBars] = useState<{
    body: {
      items: Business[];
      current_page: number;
      pages: number;
      total_items: number;
    };
  }>();
  const [loading, setLoading] = useState(true);
  const [overlayLoading, setOverlayLoading] = useState(false);
  const [page, setPage] = useState(1);
  const queryBars = (query: string = "") =>
    API.GET<{
      body: {
        items: Business[];
        current_page: number;
        pages: number;
        total_items: number;
      };
    }>(
      `http://localhost:8080/api/v1/business?searchQuery=${query}&page=${page}&count=7`
    );
  useEffect(() => {
    queryBars()
      .then((res) => setBars(res))
      .then((_) => {
        setLoading(false);
        setOverlayLoading(false);
      });
  }, [page]);
  const search = (e: FormEvent) => {
    e.preventDefault();
    setOverlayLoading(true);
    queryBars((e.target as any)[0].value)
      .then((data) => setBars(data))
      .then((_) => setOverlayLoading(false));
  };
  return (
    <Box w="100%">
      <Badge variant="light" mb="xl">
        In development
      </Badge>
      <form style={{ width: "100%" }} onSubmit={search}>
        <Group justify="center" wrap="nowrap">
          <TextInput
            placeholder="search for bars..."
            w="calc(100% - 100px)"
          ></TextInput>
          <Button w={100} type="submit">
            Search
          </Button>
        </Group>
      </form>
      <Box pos="relative" mih={350} w="100%" pt="xl">
        <LoadingOverlay
          visible={overlayLoading}
          loaderProps={{ variant: "custom" }}
        />
        <Flex
          mt={200}
          w="100%"
          justify="center"
          align="center"
          display={loading ? "block" : "none"}
        >
          <Loader />
        </Flex>
        {!bars?.body.items.length ? (
          <>
            <Center mt="xl">
              <FaSadCry size={34} />
            </Center>
            <Text ta="center" mt="sm">
              no results
            </Text>
            <Center>
              <Button
                mt="lg"
                variant="subtle"
                onClick={() => window.location.reload()}
              >
                Reset search
              </Button>
            </Center>
          </>
        ) : (
          bars.body.items.map((x) => (
            <BusinessCard
              key={x.Id}
              id={x.Id}
              name={x.Name}
              description={x.Description}
              imageUrl={x.ImageUrl}
            />
          ))
        )}
      </Box>
      <Center mt="xl">
        <Pagination
          total={bars?.body?.pages ?? 2}
          onChange={(e) => {
            setOverlayLoading(true);
            setPage(e);
          }}
        />
      </Center>
    </Box>
  );
}
