import { ComponentPropsWithoutRef } from "react";

export const JiraIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <img
      width={props.size}
      height={props.size}
      src="https://cdn-icons-png.flaticon.com/512/5968/5968875.png"
      alt="html logo"
    />
  );
};
