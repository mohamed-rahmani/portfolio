import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import Link from "next/link";
import Subtitle from "./Subtitle";

export default function Contact() {
  return (
    <div className="flex flex-col items-center gap-8 pb-5 pl-2 pr-2 pt-20">
      <Subtitle text="Contactez moi sur ..." />
      <div className="flex flex-col items-center gap-4">
        <Link
          href="https://www.linkedin.com/in/mohamed-rahmani-6143b72a1/"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "size-8 px-12 py-4"
          )}
        >
          <LinkedinIcon size={50} className="text-foreground" />
          LinkedIn
        </Link>
        <Link
          href="mailto:mohamedrahmani.contact@gmail.com"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "size-8 px-40 py-4"
          )}
        >
          <Mail size={50} />
          mohamedrahmani.contact@gmail.com
        </Link>
      </div>
    </div>
  );
}
