import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@mantine/core/styles.css";
import { Anchor, Breadcrumbs, Container, MantineProvider } from "@mantine/core";
import { theme } from "@/styles/theme";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Container px="xl" pt="lg">
        <Navbar />
        <Component {...pageProps} />
      </Container>
    </MantineProvider>
  );
}
