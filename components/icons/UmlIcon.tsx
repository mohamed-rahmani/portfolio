import { ComponentPropsWithoutRef } from "react";

export const UmlIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <img
      width={props.size}
      height={props.size}
      src="https://icon.icepanel.io/Technology/svg/Unified-Modelling-Language-%28UML%29.svg"
      alt="css logo"
    />
  );
};
