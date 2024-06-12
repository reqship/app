import useBreadcrumbs from "@/hooks/useBreadcrumbs";
import { Button, Card, Text, Title } from "@mantine/core";

export default function LearnMore() {
  const Breadcrumbs = useBreadcrumbs();
  return (
    <>
      <Breadcrumbs />
      <Card withBorder>
        <Title>Getting Started</Title>
        <Text>
          Page is incomplete, this page will be coming soon with more
          information on the product.
        </Text>
      </Card>
    </>
  );
}
