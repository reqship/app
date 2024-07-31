import { Business } from "@/api/business";
import { Text, Card, Box } from "@mantine/core";
import { useRouter } from "next/navigation";

export const VenueCard = ({
  id,
  name,
  imageUrl,
}: Exclude<Business, "userId" | "description">) => {
  const router = useRouter();

  return (
    <Card
      mah={200}
      w="100%"
      h="100%"
      onClick={() => router.push(`${id}`)}
      style={{
        backgroundImage: `url(${imageUrl}), url('business-placeholder.png')`,
        aspectRatio: "1 / 1",
      }}
      bgp="center"
      bgsz="cover"
      pos="relative"
    >
      <Box
        pos="absolute"
        left={0}
        bottom={0}
        h={100}
        w="100%"
        style={{
          background:
            "linear-gradient(0deg, rgba(60,60,60,1) 0%, rgba(60,60,60,0.4626444327731093) 81%, rgba(60,60,60,0) 100%)",
        }}
      >
        <Text
          style={{
            textWrap: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
            width: "calc(100% - 40px)",
          }}
          mx="lg"
          mt={55}
          c="white"
        >
          {name}
        </Text>
      </Box>
    </Card>
  );
};
