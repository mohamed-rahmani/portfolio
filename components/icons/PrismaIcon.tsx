import { ComponentPropsWithoutRef } from "react";

export const PrismaIcon = (
  props: ComponentPropsWithoutRef<"img"> & { size?: number }
) => {
  return (
    <img
      width={props.size}
      height={props.size}
      src="https://cdn.worldvectorlogo.com/logos/prisma-4.svg"
      alt="uspn13 logo"
    />
  );
};
