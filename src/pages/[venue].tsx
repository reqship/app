import { BusinessWithItems, getBusinessWithDetailsById } from "@/api/business";
import useApi from "@/hooks/useApi";
import { useRouter } from "next/router";
import {
  Image,
  Loader,
  Title,
  Text,
  useMantineTheme,
  Box,
  Center,
  Flex,
  Group,
  Badge,
  TextInput,
  ActionIcon,
  SimpleGrid,
  Stack,
  Button,
  Modal,
} from "@mantine/core";
import PageHeading from "@/components/PageHeading";
import { TbBeer, TbBurger, TbFilter, TbMusic, TbNumber } from "react-icons/tb";
import { ItemCard } from "@/components/VenueCard/ItemCard";
import { useEffect, useState } from "react";
import { getBusinessTagInformation } from "@/helpers/businessTagHelper";
import { useBasket } from "@/hooks/BasketProvider";
import { BasketCard } from "@/components/VenueCard/BasketCard";
import { useTable } from "@/hooks/TableProvider";

const VenuePageContent = ({ venue }: { venue: BusinessWithItems }) => {
  const theme = useMantineTheme();
  const basketContext = useBasket();
  const tableContext = useTable();

  const [queriedItems, setQueriedItems] = useState(venue.items);
  const [searchValue, setSearchValue] = useState("");
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  useEffect(() => {
    setQueriedItems(
      (venue.items ?? []).filter((v) =>
        (v.name ?? "").toLowerCase().includes(searchValue.toLowerCase())
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  useEffect(() => {
    if (basketContext.items.length === 0) {
      setCheckoutModalOpen(false);
    }
  }, [basketContext.items]);

  return (
    <>
      <Box bg={"#FFFAF4"} style={{ zIndex: 1000 }} pos="sticky" top={20}>
        <PageHeading
          icon={<TbNumber size={32} color={theme.colors["reqship-pink"][6]} />}
          heading={
            tableContext.table ? `${tableContext.table}` : "Choose a table"
          }
          subheading="Last Orders at 12:00am"
          leavePrompt={true}
          inputHeading={true}
          inputHeadingChange={tableContext.setTable}
        />
        <TextInput
          placeholder="Find an item..."
          size="md"
          onChange={(e) => setSearchValue(e.target.value)}
          variant="filled"
          mt="md"
          rightSection={
            <ActionIcon variant="subtle">
              <TbFilter />
            </ActionIcon>
          }
        />
        <Group wrap="nowrap" mb={0} mt="md">
          <Image
            fallbackSrc="/business-placeholder-alt.png"
            my="xs"
            w={100}
            h={100}
            bgp="center"
            alt={venue.name + " bar image"}
            src={venue.imageUrl}
            radius="md"
          />
          <Stack gap={0}>
            <Title m={0} size={30}>
              {venue.name}
            </Title>
            <Text m={0} size="sm" lineClamp={2}>
              {venue.description}
            </Text>
          </Stack>
        </Group>
        <Group my="sm" pb="sm">
          {venue.tags &&
            getBusinessTagInformation(venue.tags).map((item) => (
              <Badge
                color="reqship-blue"
                variant="light"
                key={item.label}
                leftSection={item.icon}
              >
                {item.label}
              </Badge>
            ))}
        </Group>
      </Box>
      {queriedItems &&
        Object.keys(Object.groupBy(queriedItems, (item) => item.section)).map(
          (section) => {
            return (
              <>
                <Title order={3} mt="md" size={20}>
                  {section}
                </Title>

                {Object.groupBy(queriedItems, (item) => item.section)[
                  section
                ]?.map((item) => (
                  <Box
                    key={item.id}
                    onClick={() => basketContext.addItem(item)}
                  >
                    <ItemCard key={item.id} item={item} />
                  </Box>
                ))}
              </>
            );
          }
        )}
      <br />
      <br />
      <br />
      {basketContext.items.length > 0 && (
        <Button
          onClick={() => setCheckoutModalOpen(true)}
          pos="fixed"
          disabled={!tableContext.table}
          bottom={10}
          left={30}
          w="calc(100% - 60px)"
        >
          {!tableContext.table
            ? "Choose a table to continue"
            : `Checkout ${basketContext.totalItems} item
          ${
            basketContext.totalItems > 1 ? "s" : ""
          } (£${basketContext.total.toFixed(2)})`}
        </Button>
      )}
      <Modal
        title="Checkout"
        opened={checkoutModalOpen}
        zIndex={100000}
        onClose={() => setCheckoutModalOpen(false)}
      >
        <Text>Complete your purchase below.</Text>
        <Stack mt="lg" gap="xs">
          {basketContext.items.map((item) => (
            <BasketCard
              key={item.id}
              item={item}
              removeItem={() => basketContext.removeItem(item)}
              changeQuantity={basketContext.editItemQuantity}
            />
          ))}
        </Stack>
        <Button mt="xl" fullWidth>
          Pay £{basketContext.total.toFixed(2)}
        </Button>
      </Modal>
    </>
  );
};

export default function VenuePage() {
  const {
    query: { venue: vId },
  } = useRouter();
  const { response: venue, loading: venueLoading } = useApi(
    getBusinessWithDetailsById(vId as string),
    vId
  );

  return venueLoading ? (
    <Loader />
  ) : venue ? (
    <VenuePageContent venue={venue} />
  ) : (
    "Not found error"
  );
}
