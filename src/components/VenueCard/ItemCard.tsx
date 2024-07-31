import { Item } from "@/api/items";
import {
  Card,
  Group,
  useMantineTheme,
  Image,
  Stack,
  Text,
  Title,
  Badge,
} from "@mantine/core";

export const ItemCard = ({ item, key }: { item: Item; key: number }) => {
  return (
    <Card key={key} mt="sm" withBorder bg="rgba(255,90,95,0.1)">
      <Group wrap="nowrap">
        <Image
          miw={75}
          h={100}
          bg="red"
          bgp="center"
          alt={item.name + " item image"}
          src={item.imageUrl}
          radius="md"
        />
        <Stack gap={0} w="fit-content">
          <Badge variant="light">£{item.price.toFixed(2)}</Badge>
          <Title lineClamp={1} mt={0} pt={0} order={3} size={24}>
            {item.name}
          </Title>
          <Text lineClamp={2} size="xs">
            {item.description}
          </Text>
        </Stack>
      </Group>
    </Card>
  );
};
