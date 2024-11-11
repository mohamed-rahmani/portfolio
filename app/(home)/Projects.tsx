import Applications from "./Applications";
import Subtitle from "./Subtitle";

export default function Projects() {
  return (
    <div className="flex flex-col items-center gap-8 pb-5 pl-2 pr-2 pt-20">
      <Subtitle text="Mes projets ..." />
      <Applications />
    </div>
  );
}
