import { ComponentPropsWithoutRef } from "react";

export const NextjsIcon = (
  props: ComponentPropsWithoutRef<"img"> & { size?: number }
) => {
  return (
    <img
      width={props.size}
      height={props.size}
      src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
      alt="uspn13 logo"
    />
  );
};
