import {
  Card,
  Text,
  Indicator,
  Title,
  useMantineTheme,
  Group,
  Stack,
  Image,
} from "@mantine/core";
import { useRouter } from "next/router";

export const FeaturedVenueCard = ({
  id,
  businessName,
  description,
  imageUrl,
  userId,
  textSearched = false,
}: {
  id: number;
  businessName: string;
  description: string;
  imageUrl: string;
  userId: number;
  textSearched: boolean;
}) => {
  const theme = useMantineTheme();
  const router = useRouter();
  return (
    <Indicator
      size={16}
      position="top-center"
      label={`Closest ${textSearched ? "match" : "venue"}`}
    >
      <Card
        onClick={() => router.push(`${id}`)}
        mt="sm"
        withBorder
        style={{ borderColor: theme.colors["reqship-pink"][6] }}
        bg="rgba(255,90,95,0.1)"
      >
        <Group wrap="nowrap">
          <Image
            fallbackSrc=""
            w={100}
            h={100}
            bgp="center"
            alt={businessName + " bar image"}
            src={imageUrl}
            radius="md"
          />
          <Stack gap={0} w="fit-content">
            <Text mb={0} pb={0} c="dark.3" fw="bold" size="xs">
              0.1KM AWAY
            </Text>
            <Title lineClamp={1} mt={0} pt={0} order={3} size={24}>
              {businessName}
            </Title>
            <Text lineClamp={2} size="xs">
              {description}
            </Text>
          </Stack>
        </Group>
      </Card>
    </Indicator>
  );
};
