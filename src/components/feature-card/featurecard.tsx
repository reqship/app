import { Card, Title, Text, useMantineTheme } from "@mantine/core";
import { ReactElement } from "react";
import { IconType } from "react-icons";

interface FeatureCardProps {
  icon: IconType | any; // needs changed
  title: string;
  tagline: string;
}

export const FeatureCard = ({ icon, title, tagline }: FeatureCardProps) => {
  const theme = useMantineTheme();
  const Icon = icon;
  return (
    <Card h="100%" withBorder p="xl">
      <Card
        styles={{ root: { borderColor: theme.colors.dark[6], borderWidth: 4 } }}
        withBorder
        p="xs"
        w="fit-content"
        mb="sm"
      >
        <Icon size={40} color={theme.colors.dark[6]} />
      </Card>
      <Title>{title}</Title>
      <Text>{tagline}</Text>
    </Card>
  );
};
