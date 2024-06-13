import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@mantine/core/styles.css";
import { Container, MantineProvider } from "@mantine/core";
import { theme } from "@/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Container px="xl" pt="lg">
        <Component {...pageProps} />
      </Container>
    </MantineProvider>
  );
}
