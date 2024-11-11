import { ComponentPropsWithoutRef } from "react";

export const FastapiIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <img
      width={props.size}
      height={props.size}
      src="https://cdn.worldvectorlogo.com/logos/fastapi.svg"
      alt="css logo"
    />
  );
};
