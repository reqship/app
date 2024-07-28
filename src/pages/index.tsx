import PageHeading from "@/components/PageHeading";
import { FeaturedVenueCard } from "@/components/VenueCard/FeaturedVenueCard";
import { VenueCard } from "@/components/VenueCard/VenueCard";
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

  useEffect(() => {
    setQueriedVenues(
      venues.filter((v) =>
        v.businessName.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue]);

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
  const [loading, setLoading] = useState(true);
  const [venues, setVenues] = useState([
    {
      id: 1,
      businessName: "Saint Luke's",
      description:
        "Lively eatery serving up burgers, pizza & pub grub staples, plus live music, beers & cocktails.",
      imageUrl:
        "https://www.stlukesglasgow.com/wp-content/uploads/2015/07/Website-Augustines2-900x600.jpg",
      userId: 10,
    },
    {
      id: 2,
      businessName: "The Amsterdam",
      description: "",
      imageUrl:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/01/18/61/beer-garden.jpg?w=1200&h=-1&s=1",
      userId: 10,
    },
    {
      id: 3,
      businessName: "Variety Bar",
      description: "",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt1oKIDkQJCp6M_rzMtssr2I8DI2uGjr7A7A&s",
      userId: 10,
    },
    {
      id: 4,
      businessName: "Box bar",
      description: "",
      imageUrl:
        "https://boxglasgow.com/wp-content/gallery/Bar-Photos/Outside-1.jpg",
      userId: 10,
    },
    {
      id: 5,
      businessName: "Oran Mor",
      description: "",
      imageUrl:
        "https://cdn.venuescanner.com/photos/8OpBK/33a86454fc6348184a098754b4d0313c.jpg",
      userId: 10,
    },
  ]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return loading ? <StartupPage /> : <SelectABarPage venues={venues} />;
}
