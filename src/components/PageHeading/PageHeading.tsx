import { useBasket } from "@/hooks/BasketProvider";
import { useTable } from "@/hooks/TableProvider";
import {
  Group,
  Stack,
  Title,
  Text,
  ActionIcon,
  Box,
  Modal,
  Button,
  Popover,
  ListItem,
  List,
  TextInput,
} from "@mantine/core";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { TbArrowDown } from "react-icons/tb";

interface PageHeadingProps {
  heading: string;
  subheading: string;
  icon: ReactElement;
  leavePrompt?: boolean;
  inputHeading?: boolean;
  inputHeadingChange?: (value: string) => void;
}

export const PageHeading = ({
  heading,
  subheading,
  icon,
  leavePrompt = false,
  inputHeading = false,
}: PageHeadingProps) => {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [tableSelectOpen, setTableSelectOpen] = useState<boolean>(false);
  const basket = useBasket();
  const table = useTable();
  return (
    <>
      <Group>
        {router.asPath !== "/" && (
          <ActionIcon
            variant="subtle"
            onClick={() =>
              leavePrompt && basket.totalItems > 0
                ? setModal(true)
                : router.back()
            }
          >
            <MdKeyboardArrowLeft size={32} />
          </ActionIcon>
        )}
        <Group>
          {icon}
          <Stack gap={0}>
            <Title order={2}>
              {table.table !== "Bar Pickup" && table.table !== ""
                ? "Table #"
                : ""}
              {heading}{" "}
              {inputHeading && (
                <Popover
                  width={300}
                  zIndex={100000}
                  position="bottom"
                  withArrow
                  shadow="md"
                  opened={tableSelectOpen}
                >
                  <Popover.Target>
                    <ActionIcon
                      onClick={() => setTableSelectOpen(true)}
                      variant="subtle"
                    >
                      <TbArrowDown />
                    </ActionIcon>
                  </Popover.Target>
                  <Popover.Dropdown mah={500} style={{ overflow: "scroll" }}>
                    <Button
                      display="block"
                      fullWidth
                      onClick={() => {
                        table.setTable("Bar Pickup");
                        setTableSelectOpen(false);
                      }}
                      variant={
                        table.table == "Bar Pickup" ? "filled" : "subtle"
                      }
                    >
                      Bar Pickup
                    </Button>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        table.setTable(
                          (e.target as any)["settableinput"].value
                        );
                        setTableSelectOpen(false);
                      }}
                    >
                      <Button.Group mt="md">
                        <TextInput
                          type="number"
                          name="settableinput"
                          styles={{
                            input: {
                              borderTopRightRadius: 0,
                              borderBottomRightRadius: 0,
                            },
                          }}
                        />
                        <Button type="submit">Set Table</Button>
                      </Button.Group>
                    </form>
                    <Text mt="sm" size="xs" c="dark.1" fs="italic">
                      Ensure this is correct, any mistakes are not the fault of
                      the venue.
                    </Text>
                  </Popover.Dropdown>
                </Popover>
              )}
            </Title>
            <Text size="xs">{subheading}</Text>
          </Stack>
        </Group>
      </Group>
      <Modal
        withCloseButton={false}
        zIndex={100000}
        opened={modal}
        onClose={() => setModal(false)}
      >
        <Text>Are you sure you want to leave, you will lose your basket?</Text>

        <Button
          mr="md"
          mt="xl"
          onClick={() => {
            basket.clear();
            router.back();
          }}
        >
          Leave
        </Button>
        <Button variant="subtle" mt="xl" onClick={() => setModal(false)}>
          Stay
        </Button>
      </Modal>
    </>
  );
};
