import { Stack, Image, Text, Center, Card } from "@mantine/core";
import { redirect, useRouter } from "next/navigation";

export const VenueCard = ({
  id,
  businessName,
  description,
  imageUrl,
  userId,
}: {
  id: number;
  businessName: string;
  description: string;
  imageUrl: string;
  userId: number;
}) => {
  const router = useRouter();

  return (
    <Card withBorder onClick={() => router.push(`${id}`)}>
      <Stack align="center" justify="center" gap={5} h={150}>
        <Image
          fallbackSrc=""
          style={{ aspectRatio: "1 / 1" }}
          w={100}
          h={100}
          bgp="center"
          alt={businessName + " bar image"}
          src={imageUrl}
          radius="md"
        />
        <Text>{businessName}</Text>
      </Stack>
    </Card>
  );
};
