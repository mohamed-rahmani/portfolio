import { ComponentPropsWithoutRef } from "react";

export const SpringbootIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <img
      width={props.size}
      height={props.size}
      src="https://www.contentside.com/wp-content/uploads/2015/01/spring-boot-logo.png"
      alt="springboot logo"
    />
  );
};
