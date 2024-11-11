import { ComponentPropsWithoutRef } from "react";

export const PythonIcon = (
  props: ComponentPropsWithoutRef<"img"> & { size?: number }
) => {
  return (
    <img
      width={props.size}
      height={props.size}
      src="https://cdn.iconscout.com/icon/free/png-256/free-python-2-226051.png?f=webp&w=256"
      alt="react logo"
    />
  );
};
