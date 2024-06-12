import { HTMLProps, DetailedHTMLProps, ReactElement } from "react";
import classes from "./quote.module.css";
import {
  Box,
  MantineColor,
  PolymorphicComponentProps,
  Text,
  TextProps,
} from "@mantine/core";
import React from "react";
interface QuoteProps extends PolymorphicComponentProps<"p", TextProps> {
  children: ReactElement | string;
  dividerColor: MantineColor;
}

export const Quote = (props: QuoteProps) => {
  return (
    <div className={classes.quote}>
      <Box bg={props.dividerColor} className={classes.divider} />
      <Text {...props}>{props.children}</Text>
    </div>
  );
};
