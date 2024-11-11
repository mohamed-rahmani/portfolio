import { ComponentPropsWithoutRef } from "react";

export const VercelIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <img
      width={props.size}
      height={props.size}
      src="https://www.svgrepo.com/show/327408/logo-vercel.svg"
      alt="css logo"
    />
  );
};
