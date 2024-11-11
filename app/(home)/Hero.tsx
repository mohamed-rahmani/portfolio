import { GithubIcon } from "@/components/icons/GithubIcon";
import { GitlabIcon } from "@/components/icons/GitlabIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Picture3d } from "./Picture3d";

export default function Hero() {
  return (
    <div className="flex items-center gap-10 z-40">
      <div>
        <h1 className="relative top-[-10px] bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl sm:text-lg md:text-4xl lg:text-7xl font-sans pt-2 md:pt-10 font-bold tracking-tight ">
          Mohamed RAHMANI
        </h1>
        <div>
          <p className="max-w-xl ml-1 text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-start">
            À la recherche d&apos;un stage de 4 mois à compter du 10 mars pour
            ma 3ème année en BUT Informatique en tant que ...
          </p>
          <p className="max-w-xl ml-1 text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-start">
            Développeur Full Stack
          </p>
          <div className="flex items-center gap-2 ml-1 py-2 z-10">
            <Link
              href="https://github.com/mohamed-rahmani"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-6 p-0"
              )}
            >
              <GithubIcon size={12} className="text-foreground"></GithubIcon>
            </Link>
            <Link
              href="https://gitlab.sorbonne-paris-nord.fr/12203379"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-6 p-0"
              )}
            >
              <GitlabIcon size={12} className="text-foreground"></GitlabIcon>
            </Link>
            <Link
              href="https://www.linkedin.com/in/mohamed-rahmani-6143b72a1/"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-6 p-0"
              )}
            >
              <LinkedinIcon
                size={12}
                className="text-foreground"
              ></LinkedinIcon>
            </Link>
          </div>
        </div>
      </div>
      <Picture3d />
    </div>
  );
}
