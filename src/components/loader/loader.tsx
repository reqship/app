import { Box, MantineLoaderComponent } from "@mantine/core";
import classes from "./loader.module.scss";
import { forwardRef } from "react";
import cx from "clsx";

const DotsLoader: MantineLoaderComponent = forwardRef(
  ({ className, ...others }, ref) => (
    <svg
      ref={ref}
      height={30}
      width={100}
      className={cx(classes.loader, className)}
      {...others}
    >
      <circle
        cx={10}
        cy={20}
        r={10}
        fill={(others as any).style["--loader-color"] ?? "#FAE3C6"}
        height={10}
        width={10}
      />
      <circle
        cx={30}
        cy={20}
        r={10}
        fill={(others as any).style["--loader-color"] ?? "#533B4D"}
        height={10}
        width={10}
      />
      <circle
        cx={50}
        cy={20}
        r={10}
        fill={(others as any).style["--loader-color"] ?? "#00b88a"}
        height={10}
        width={10}
      />
      <circle
        cx={70}
        cy={20}
        r={10}
        fill={(others as any).style["--loader-color"] ?? "#ff5a5f"}
        height={10}
        width={10}
      />
      <circle
        cx={90}
        cy={20}
        r={10}
        fill={(others as any).style["--loader-color"] ?? "#2274a5"}
        height={10}
        width={10}
      />
    </svg>
  )
);

DotsLoader.displayName = "custom";

export { DotsLoader };
