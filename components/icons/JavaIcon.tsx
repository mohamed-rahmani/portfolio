import { ComponentPropsWithoutRef } from "react";

export const JavaIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <img
      width={props.size}
      height={props.size}
      src="https://static-00.iconduck.com/assets.00/java-original-icon-756x1024-j3tx11wk.png"
      alt="html logo"
    />
  );
};
