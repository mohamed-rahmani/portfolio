import Subtitle from "./Subtitle";
import Work from "./Work";

export default function Experience() {
  return (
    <div className="flex flex-col items-center gap-8 pb-5 pl-2 pr-2 pt-20">
      <Subtitle text="Mon expérience ..." />
      <Work />
    </div>
  );
}
