import { DM_Serif_Text, DM_Sans } from "next/font/google";
import { generateColors } from "@mantine/colors-generator";
import { Card, Input, Loader, Text, Title, createTheme } from "@mantine/core";

const headerFont = DM_Serif_Text({
  weight: "400",
  subsets: ["latin", "latin-ext"],
});
const bodyFont = DM_Sans({
  weight: "400",
  subsets: ["latin", "latin-ext"],
});

export const theme = createTheme({
  fontFamily: bodyFont.style.fontFamily,
  fontSmoothing: true,
  primaryColor: "reqship-pink",

  colors: {
    dark: [
      "#bab1b8",
      "#988994",
      "#93728a",
      "#756271",
      "#644f5f",
      "#533B4D",
      "#4b3545",
      "#422f3e",
      "#3a2936",
      "#21181f",
    ],
    white: generateColors("#FFFDFB"),
    "reqship-green": [
      "#80e6cc",
      "#66e0c2",
      "#4ddbb8",
      "#33d6ad",
      "#1ad1a3",
      "#00b88a",
      "#00b88a",
      "#00a37a",
      "#008f6b",
      "#007a5c",
    ],
    "reqship-blue": [
      "#91bad2",
      "#7aacc9",
      "#649ec0",
      "#4e90b7",
      "#3882ae",
      "#2274a5",
      "#1f6895",
      "#1b5d84",
      "#185173",
      "#144663",
    ],
    "reqship-pink": [
      "#ffadaf",
      "#ff9c9f",
      "#ff8c8f",
      "#ff7b7f",
      "#ff6b6f",
      "#ff5a5f",
      "#e65156",
      "#cc484c",
      "#b33f43",
      "#993639",
    ],
  },
  defaultRadius: "lg",
  components: {
    Text: Text.extend({
      defaultProps: {
        c: "dark",
      },
    }),
    Input: Input.extend({
      defaultProps: {
        variant: "filled",
        styles: {
          input: {
            background: "#F0F0F0",
          },
        },
      },
    }),
    Title: Title.extend({
      defaultProps: {
        c: "dark",
      },
    }),
    Card: Card.extend({
      defaultProps: {
        styles: {
          root: {
            borderColor: "#FFF6EA",
          },
        },
      },
    }),
  },

  headings: {
    fontFamily: headerFont.style.fontFamily,
    fontWeight: headerFont.style.fontWeight?.toString(),
  },
});
