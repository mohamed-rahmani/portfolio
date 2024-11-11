import { ComponentPropsWithoutRef } from "react";

export const UmlIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <img
      width={props.size}
      height={props.size}
      src="https://upload.wikimedia.org/wikipedia/fr/e/ec/LogoUSPN.png"
      alt="css logo"
    />
  );
};
