import { Group, Stack, Title, Text } from "@mantine/core";
import { ReactElement } from "react";

interface PageHeadingProps {
  heading: string;
  subheading: string;
  icon: ReactElement;
}

export const PageHeading = ({
  heading,
  subheading,
  icon,
}: PageHeadingProps) => {
  return (
    <Group>
      {icon}
      <Stack gap={0}>
        <Title order={2}>{heading}</Title>
        <Text size="xs">{subheading}</Text>
      </Stack>
    </Group>
  );
};
