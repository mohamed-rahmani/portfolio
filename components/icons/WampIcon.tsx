import { ComponentPropsWithoutRef } from "react";

export const WampIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <img
      width={props.size}
      height={props.size}
      src="https://simonewebdesign.it/images/wampserver-logo.webp"
      alt="css logo"
    />
  );
};
