import { getAllBusinesses } from "@/api/business";
import PageHeading from "@/components/PageHeading";
import { FeaturedVenueCard } from "@/components/VenueCard/FeaturedVenueCard";
import { VenueCard } from "@/components/VenueCard/VenueCard";
import { useTable } from "@/hooks/TableProvider";
import useApi from "@/hooks/useApi";
import {
  ActionIcon,
  Box,
  Center,
  Loader,
  MantineTheme,
  SimpleGrid,
  TextInput,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { TbFilter, TbMapPin } from "react-icons/tb";

const StartupPage = () => (
  <Center h="100svh">
    <PageHeading
      icon={<Loader />}
      heading="Reqship"
      subheading="Simplify ordering at the bar"
    />
  </Center>
);

const SelectABarPage = ({ venues }: { venues: any[] }) => {
  const theme = useMantineTheme();
  const [queriedVenues, setQueriedVenues] = useState(venues);
  const [searchValue, setSearchValue] = useState("");
  const tableContext = useTable();
  useEffect(() => {
    setQueriedVenues(
      venues
        .filter((v) =>
          (v.name ?? "").toLowerCase().includes(searchValue.toLowerCase())
        )
        .sort((a, b) => (a.id < b.id ? 0 : 1))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  useEffect(() => {
    tableContext.setTable("");
  }, []);

  return (
    <>
      <Box
        bg={"#FFFAF4"}
        style={{ zIndex: 1000 }}
        pb="md"
        pos="sticky"
        top={20}
      >
        <PageHeading
          icon={<TbMapPin size={32} color={theme.colors["reqship-pink"][6]} />}
          heading="Glasgow"
          subheading="Near Merchant City"
        />
        <TextInput
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Find a bar..."
          size="md"
          variant="filled"
          mt="md"
          rightSection={
            <ActionIcon variant="subtle">
              <TbFilter />
            </ActionIcon>
          }
        />
      </Box>
      {queriedVenues?.[0] && (
        <FeaturedVenueCard
          {...queriedVenues[0]}
          textSearched={searchValue.length > 0}
        />
      )}

      {(queriedVenues ?? []).length > 1 && (
        <SimpleGrid mt="md" cols={2}>
          {queriedVenues.slice(1).map((v) => (
            <VenueCard key={v.id} {...v} />
          ))}
        </SimpleGrid>
      )}
    </>
  );
};

export default function Index() {
  const { response: venues, loading } = useApi(getAllBusinesses);
  return loading ? <StartupPage /> : <SelectABarPage venues={venues ?? []} />;
}
