import { Item } from "@/api/items";
import { BasketItem } from "@/hooks/BasketProvider";
import { ActionIcon, Group, Stack, Title, Text, Button } from "@mantine/core";
import { useEffect } from "react";
import { TbTrash } from "react-icons/tb";

export const BasketCard = ({
  item,
  removeItem,
  changeQuantity,
}: {
  item: BasketItem;
  removeItem: () => void;
  changeQuantity: (item: Item, quantity: number) => void;
}) => {
  return (
    <>
      <Group justify="space-between">
        <Group>
          <ActionIcon onClick={removeItem} variant="subtle">
            <TbTrash />
          </ActionIcon>
          <Stack gap={0}>
            <Title order={4}>{item.name}</Title>
          </Stack>
        </Group>
        <Group gap={5}>
          <Button
            style={{ borderRadius: "50%" }}
            w={30}
            p={0}
            h={30}
            onClick={() => {
              if (item.quantity === 1) {
                removeItem();
              } else {
                changeQuantity(item, item.quantity - 1);
              }
            }}
          >
            -
          </Button>
          <Text ta="center" miw={10}>
            {item.quantity}
          </Text>
          <Button
            w={30}
            h={30}
            p={0}
            style={{ borderRadius: "50%" }}
            onClick={() => changeQuantity(item, item.quantity + 1)}
          >
            +
          </Button>
        </Group>
      </Group>
    </>
  );
};
