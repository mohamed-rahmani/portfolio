import { ComponentPropsWithoutRef } from "react";

export const MongodbIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <img
      width={props.size}
      height={props.size}
      src="https://www.svgrepo.com/show/331488/mongodb.svg"
      alt="css logo"
    />
  );
};
