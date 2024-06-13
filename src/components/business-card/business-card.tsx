import { Avatar, Box, Card, Group, Title, Text } from "@mantine/core";

interface BusinessCardProps {
  name: string;
  description: string;
  imageUrl: string;
  id: number;
}

export const BusinessCard = ({
  name,
  description,
  imageUrl,
  id,
}: BusinessCardProps) => {
  return (
    <Card key={id} my="sm">
      <Group>
        <Avatar key={id} src={imageUrl}></Avatar>
        <Box>
          <Title miw={250} order={3}>
            {name}
          </Title>
          <Text size="sm">{description}</Text>
        </Box>
      </Group>
    </Card>
  );
};
