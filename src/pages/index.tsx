import Head from "next/head";
import {
  Title,
  Box,
  Text,
  Card,
  Grid,
  Container,
  Button,
  Flex,
} from "@mantine/core";

import {
  FaBolt,
  FaCashRegister,
  FaMoneyBill,
  FaMoneyBill1,
  FaPaintbrush,
} from "react-icons/fa6";
import FeatureCard from "@/components/feature-card";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>ReqShip</title>
        <meta
          name="description"
          content="Innovative table ordering system for bars and restaurants."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Card bg="reqship-green.9" withBorder>
        <Card bg="transparent" w="100%" p="xl" py="lg" h="fit-content">
          <Flex h="100%" direction="column">
            <Title c="white">
              Order management System for easy table service integration at any
              restaurant or bar.
            </Title>
            <Text c="white">
              A simple table service management application providing customers
              and administrators with a simple and intuitive interface.
            </Text>
            <Grid pt="xl" justify="flex-start">
              <Grid.Col span={{ xs: 12, sm: 3 }}>
                <Button
                  color="reqship-green"
                  fullWidth
                  component="a"
                  href="learn-more"
                >
                  Learn More
                </Button>
              </Grid.Col>
              <Grid.Col span={{ xs: 12, sm: 3 }}>
                <Button
                  color="white"
                  fullWidth
                  variant="subtle"
                  component="a"
                  href="demo"
                >
                  View Demo
                </Button>
              </Grid.Col>
            </Grid>
          </Flex>
        </Card>
      </Card>

      <Grid pt="lg">
        <Grid.Col span={{ xs: 12, sm: 6 }}>
          <FeatureCard
            icon={FaMoneyBill}
            title="No Unnecessary Costs"
            tagline="Don't worry about losing out on profits when integrating our system."
          />
        </Grid.Col>
        <Grid.Col span={{ xs: 12, sm: 6 }}>
          <FeatureCard
            icon={FaPaintbrush}
            title="Highly customizable"
            tagline="Make your site look like your site, no need to settle for something that doesn't match your brand identity."
          />
        </Grid.Col>
      </Grid>
    </>
  );
}
