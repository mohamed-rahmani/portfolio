"use client";

import { CssIcon } from "@/components/icons/CssIcon";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { GitlabIcon } from "@/components/icons/GitlabIcon";
import { HtmlIcon } from "@/components/icons/HtmlIcon";
import { JsIcon } from "@/components/icons/JsIcon";
import { LaravelIcon } from "@/components/icons/LaravelIcon";
import { NeondbIcon } from "@/components/icons/NeondbIcon";
import { NextjsIcon } from "@/components/icons/NextjsIcon";
import { PhpIcon } from "@/components/icons/PhpIcon";
import { PostgresqlIcon } from "@/components/icons/PostgresqlIcon";
import { PrismaIcon } from "@/components/icons/PrismaIcon";
import { ReactIcon } from "@/components/icons/ReactIcon";
import { TailwindcssIcon } from "@/components/icons/TailwindcssIcon";
import { TypescriptIcon } from "@/components/icons/TypescriptIcon";
import { VercelIcon } from "@/components/icons/VercelIcon";
import { WampIcon } from "@/components/icons/WampIcon";
import netdevDemo from "@/components/image/netdev-demo.gif";
import performFormation from "@/components/image/perform-vision-formation.gif";
import performIntranet from "@/components/image/perform-vision-intranet.gif";
import { Badge } from "@/components/ui/badge";
import { AnimatePresence, motion } from "framer-motion";
import { Globe } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Code } from "./Code";

interface Project {
  name: string;
  image: string | StaticImageData;
  purpose: string;
  role: string;
  skills: string[];
  site: string;
  git: string;
}

interface AppCategory {
  label: string;
  projets: Project[];
}

const apps: AppCategory[] = [
  {
    label: "Entreprise",
    projets: [
      {
        name: "Perform Vision, Training & Consulting",
        image: performIntranet,
        purpose: "Site intranet",
        role: "Développeur Full Stack",
        skills: ["HTML", "CSS", "Javascript", "PHP", "PostgreSQL", "WAMP"],
        site: "",
        git: "https://gitlab.sorbonne-paris-nord.fr/12203379/zeengine",
      },
      {
        name: "Perform Vision, Training & Consulting",
        image: performFormation,
        purpose: "Site de formations",
        role: "Auditeur Interne",
        skills: ["React", "Typescript", "CSS", "Laravel", "PostgreSQL"],
        site: "https://perform-vision.netchill.net/",
        git: "https://gitlab.sorbonne-paris-nord.fr/lorbh/audit-paqueta",
      },
    ],
  },
  {
    label: "Personnel",
    projets: [
      {
        name: "NetDev est une copie de l'application Thread. Le but du projet était de mettre à l'épreuve mes compétences du framework Next.js ... et un peu pour m'amuser aussi 😅",
        image: netdevDemo,
        purpose: "NetDev",
        role: "",
        skills: [
          "Nextjs",
          "React",
          "TailwindCSS",
          "Typescript",
          "Prisma",
          "PostgreSQL",
          "NeonDB",
          "Vercel",
        ],
        site: "https://netdev.vercel.app/",
        git: "https://github.com/mohamed-rahmani/NetDev",
      },
    ],
  },
];

export default function Applications() {
  const [activeTab, setActiveTab] = useState<string>(apps[0].label);
  const [direction, setDirection] = useState("left");

  const handleClick = (label: string) => {
    setDirection(label === activeTab ? "right" : "left");
    setActiveTab(label);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-6 dark:bg-[#1a1a1a] bg-gray-100 py-2 px-4 rounded-full">
        {apps.map((app) => (
          <button
            key={app.label}
            onClick={() => handleClick(app.label)}
            className={`font-semibold px-2 rounded-full ${
              activeTab === app.label
                ? "bg-lime-300 text-black"
                : "text-gray-500 hover:text-lime-300"
            } transition-all duration-300`}
          >
            {app.label}
          </button>
        ))}
      </div>
      <div className="relative mt-8 w-full flex justify-center">
        <AnimatePresence mode="wait">
          {apps.map(
            (app) =>
              activeTab === app.label && (
                <motion.div
                  key={activeTab}
                  initial={{ x: direction === "left" ? -50 : 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction === "left" ? 50 : -50, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <div
                    className={`grid grid-cols-1 gap-6 mt-4 ${
                      activeTab == "Entreprise"
                        ? "sm:grid-cols-2"
                        : "sm:grid-cols-1"
                    }`}
                  >
                    {app.projets.map((projet, index) => (
                      <div
                        key={index}
                        className="bg-gray-100 dark:bg-[#1a1a1a] rounded-xl shadow-lg dark:border flex flex-col items-center w-80 max-w-80 justify-between"
                      >
                        <div className="w-full">
                          <Image
                            src={projet.image}
                            alt="projet"
                            width={500}
                            height={200}
                            className="rounded-se-xl rounded-ss-xl"
                          />
                        </div>
                        <div className="flex flex-col items-start gap-2 text-left p-4 w-full">
                          <h3 className="text-lg font-bold">
                            {projet.purpose}
                          </h3>
                          <p className="text-md">{projet.role}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 text-justify">
                            {projet.name}
                          </p>
                          <div className="py-2">
                            <Badge variant={"outline"}>Stack technique</Badge>
                          </div>
                          <div>
                            {projet.skills.map((skill, index) => (
                              <div
                                key={index}
                                className="inline-flex text-sm text-muted-foreground text-justify"
                              >
                                {skill === "HTML" && (
                                  <Code className="inline-flex items-center gap-1 mr-2 mb-2">
                                    <HtmlIcon size={14} className="inline" />
                                    HTML
                                  </Code>
                                )}
                                {skill === "Nextjs" && (
                                  <Code className="inline-flex items-center gap-1 mr-2 mb-2">
                                    <NextjsIcon size={16} className="inline" />
                                    Next.js
                                  </Code>
                                )}
                                {skill === "React" && (
                                  <Code className="inline-flex items-center gap-1 mr-2 mb-2">
                                    <div className="animate-spin-slow delay-150">
                                      <ReactIcon size={19} className="inline" />
                                    </div>
                                    React
                                  </Code>
                                )}
                                {skill === "CSS" && (
                                  <Code className="inline-flex items-center gap-1 mr-2 mb-2">
                                    <CssIcon size={16} className="inline" />
                                    CSS
                                  </Code>
                                )}
                                {skill === "TailwindCSS" && (
                                  <Code className="inline-flex items-center gap-1 mr-2 mb-2">
                                    <TailwindcssIcon
                                      size={16}
                                      className="inline"
                                    />
                                    TailwindCSS
                                  </Code>
                                )}
                                {skill === "Typescript" && (
                                  <Code className="inline-flex items-center gap-1 mr-2 mb-2">
                                    <TypescriptIcon
                                      size={16}
                                      className="inline"
                                    />
                                    Typescript
                                  </Code>
                                )}
                                {skill === "Javascript" && (
                                  <Code className="inline-flex items-center gap-1 mr-2 mb-2">
                                    <JsIcon size={16} className="inline" />
                                    Javascript
                                  </Code>
                                )}
                                {skill === "Laravel" && (
                                  <Code className="inline-flex items-center gap-1 mr-2 mb-2">
                                    <LaravelIcon size={16} className="inline" />
                                    Laravel
                                  </Code>
                                )}
                                {skill === "PHP" && (
                                  <Code className="inline-flex items-center gap-1 mr-2 mb-2">
                                    <PhpIcon size={16} className="inline" />
                                    PHP
                                  </Code>
                                )}
                                {skill === "Prisma" && (
                                  <Code className="inline-flex items-center gap-1 mr-2 mb-2">
                                    <PrismaIcon size={16} className="inline" />
                                    Prisma
                                  </Code>
                                )}
                                {skill === "PostgreSQL" && (
                                  <Code className="inline-flex items-center gap-1 mr-2 mb-2">
                                    <PostgresqlIcon
                                      size={16}
                                      className="inline"
                                    />
                                    PostgreSQL
                                  </Code>
                                )}
                                {skill === "WAMP" && (
                                  <Code className="inline-flex items-center gap-1 mr-2 mb-2">
                                    <WampIcon size={16} className="inline" />
                                    WAMP Server
                                  </Code>
                                )}
                                {skill === "NeonDB" && (
                                  <Code className="inline-flex items-center gap-1 mr-2 mb-2">
                                    <NeondbIcon size={16} className="inline" />
                                    NeonDB
                                  </Code>
                                )}
                                {skill === "Vercel" && (
                                  <Code className="inline-flex items-center gap-1 mr-2 mb-2">
                                    <VercelIcon size={16} className="inline" />
                                    Vercel
                                  </Code>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-start w-full p-4">
                          <div className="inline-flex gap-2 items-end">
                            {projet.site != "" && (
                              <>
                                <Link
                                  href={projet.site}
                                  className="text-lime-300"
                                >
                                  <button className="flex items-center gap-2 px-2 py-1 bg-black text-white dark:bg-white dark:text-black  text-sm rounded-sm hover:bg-lime-300 dark:hover:bg-lime-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-500">
                                    <Globe size={16} />
                                    Voir le site
                                  </button>
                                </Link>
                              </>
                            )}
                            {projet.git != "" && (
                              <>
                                <Link
                                  href={projet.git}
                                  className="text-lime-300"
                                >
                                  <button className="flex items-center gap-2 px-2 py-1 bg-black text-white dark:bg-white dark:text-black  text-sm rounded-sm hover:bg-lime-300 dark:hover:bg-lime-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-500">
                                    {projet.git.includes("gitlab") ? (
                                      <GitlabIcon size={16} />
                                    ) : (
                                      <GithubIcon size={16} />
                                    )}
                                    Voir le repo
                                  </button>
                                </Link>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
