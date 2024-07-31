import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@mantine/core/styles.css";
import {
  ActionIcon,
  Affix,
  Container,
  MantineProvider,
  Tabs,
} from "@mantine/core";
import { theme } from "@/theme";
import { BasketContextProvider } from "@/hooks/BasketProvider";
import { TableContextProvider } from "@/hooks/TableProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BasketContextProvider>
      <TableContextProvider>
        <MantineProvider theme={theme}>
          <Container px="xl" pt="lg" pos="relative">
            <Component {...pageProps} />
          </Container>
        </MantineProvider>
      </TableContextProvider>
    </BasketContextProvider>
  );
}
