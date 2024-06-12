import { Anchor, Box, Button, Group, Title } from "@mantine/core";
import Quote from "../quote";
import { useMediaQuery } from "@mantine/hooks";

export const Navbar = () => {
  const sm = useMediaQuery("(max-width: 48em)");

  return (
    <>
      <Group justify="space-between" pb="lg" pt="md">
        <Box component="main" pb="lg">
          <Title order={1}>ReqShip</Title>
          <Quote dividerColor={"reqship-green"}>
            High Quality Customer Friendly table to bar ordering system.
          </Quote>
        </Box>
        <Button
          fullWidth={sm}
          href={process.env.NEXT_PUBLIC_ADMIN_SITE ?? ""}
          component="a"
        >
          Login
        </Button>
      </Group>
    </>
  );
};
