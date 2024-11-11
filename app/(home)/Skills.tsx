"use client";

import Languages from "./Languages";
import Subtitle from "./Subtitle";

export default function Skills() {
  return (
    <div className="flex flex-col items-center gap-8 pb-5 pl-2 pr-2 mt-52 md:mt-0">
      <Subtitle text="Ce que j'utilise ..." />
      <Languages />
    </div>
  );
}
