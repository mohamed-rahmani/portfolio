import { ComponentPropsWithoutRef } from "react";

export const TrelloICon = (
  props: ComponentPropsWithoutRef<"img"> & { size?: number }
) => {
  return (
    <img
      width={props.size}
      height={props.size}
      src="https://cdn.worldvectorlogo.com/logos/trello.svg"
      alt="uspn13 logo"
    />
  );
};
