import { ComponentPropsWithoutRef } from "react";

export const NeondbIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <img
      width={props.size}
      height={props.size}
      src="https://neon.tech/favicon/favicon.png"
      alt="css logo"
    />
  );
};
