"use client";

import { CssIcon } from "@/components/icons/CssIcon";
import { HtmlIcon } from "@/components/icons/HtmlIcon";
import { JsIcon } from "@/components/icons/JsIcon";
import { LaravelIcon } from "@/components/icons/LaravelIcon";
import { LiquidIcon } from "@/components/icons/LiquidIcon";
import { PhpIcon } from "@/components/icons/PhpIcon";
import { PostgresqlIcon } from "@/components/icons/PostgresqlIcon";
import { ReactIcon } from "@/components/icons/ReactIcon";
import { ShopifyIcon } from "@/components/icons/ShopifyIcon";
import { TypescriptIcon } from "@/components/icons/TypescriptIcon";
import { Badge } from "@/components/ui/badge";
import { AnimatePresence, motion } from "framer-motion";
import { Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Code } from "./Code";

const works = [
  {
    label: "Professionnel",
    name: "Digi & iTech",
    logo: "https://f904f9-3.myshopify.com/cdn/shop/files/Logo_D_I_Transparent.png?v=1710837473&width=60",
    url: "",
    content:
      "Conception, création et intégration d'une template de site de e-commerce sur le CMS Shopify.",
    duration: "2 mois",
    role: "Développeur Full Stack",
    skills: ["HTML", "CSS", "Javascript", "Liquid", "Shopify"],
  },
  {
    label: "Scolaire",
    data: [
      {
        name: "Université Sorbonne Paris Nord",
        logo: "https://upload.wikimedia.org/wikipedia/fr/e/ec/LogoUSPN.png",
        duration: "Septembre 2022 - Aujourd'hui",
        formation: "BUT Informatique - IUT Villetaneuse",
      },
      {
        name: "Lycée Maurice Utrillo",
        logo: "https://lyceeutrillo.fr/wp-content/uploads/2016/01/cropped-Utrillo_Maurice_1883-1955_Signatur.jpg",
        duration: "Septembre 2019 - Juin 2022",
        content: "Mention BIEN",
        formation:
          "BAC générale Mathématique et NSI option LATIN et Math expert",
      },
    ],
  },
];

export default function Work() {
  const [activeTab, setActiveTab] = useState<string>(works[0].label);
  const [direction, setDirection] = useState("left");

  const handleClick = (label: string) => {
    setDirection(label === activeTab ? "right" : "left");
    setActiveTab(label);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-6 dark:bg-[#1a1a1a] bg-gray-100 py-2 px-4 rounded-full">
        {works.map((work) => (
          <button
            key={work.label}
            onClick={() => handleClick(work.label)}
            className={`font-semibold px-2 rounded-full ${
              activeTab === work.label
                ? "bg-lime-300 text-black"
                : "text-gray-500 hover:text-lime-300"
            } transition-all duration-300`}
          >
            {work.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ x: direction === "left" ? -50 : 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction === "left" ? 50 : -50, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mt-8">
            {works.map(
              (work, index) =>
                activeTab == work.label &&
                work.label == "Professionnel" &&
                work.logo && (
                  <div
                    key={index}
                    className="bg-gray-100 dark:bg-[#1a1a1a] rounded-xl shadow-lg dark:border"
                  >
                    <div className="flex flex-col gap-4 p-4 w-80">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-[60px] h-[52px]">
                          <Image
                            src={work.logo}
                            alt="logo"
                            width={60}
                            height={53}
                            layout="intrinsic"
                          />
                        </div>
                        <div>
                          <h2 className="font-bold">{work.role}</h2>
                          <h3>{work.name}</h3>
                          <h3 className="text-gray-500">{work.duration}</h3>
                        </div>
                      </div>
                      <div className="flex items-center w-full text-justify">
                        <p className="text-sm">{work.content}</p>
                      </div>
                      <div>
                        <Badge variant={"outline"}>Langages utilisés</Badge>
                      </div>
                      <div>
                        {work.label == "Professionnel" && work.skills
                          ? work.skills.map((outil, index) => (
                              <div
                                key={index}
                                className="inline-flex text-sm text-muted-foreground text-justify"
                              >
                                {outil === "HTML" && (
                                  <Code className="inline-flex items-center gap-1 mr-2 mb-2">
                                    <HtmlIcon size={14} className="inline" />
                                    HTML
                                  </Code>
                                )}
                                {outil === "React" && (
                                  <Code className="inline-flex items-center gap-1 mr-2 mb-2">
                                    <div className="animate-spin-slow delay-150">
                                      <ReactIcon size={19} className="inline" />
                                    </div>
                                    React
                                  </Code>
                                )}
                                {outil === "CSS" && (
                                  <Code className="inline-flex items-center gap-1 mr-2 mb-2">
                                    <CssIcon size={16} className="inline" />
                                    CSS
                                  </Code>
                                )}
                                {outil === "Typescript" && (
                                  <Code className="inline-flex items-center gap-1 mr-2 mb-2">
                                    <TypescriptIcon
                                      size={16}
                                      className="inline"
                                    />
                                    Typescript
                                  </Code>
                                )}
                                {outil === "Javascript" && (
                                  <Code className="inline-flex items-center gap-1 mr-2 mb-2">
                                    <JsIcon size={16} className="inline" />
                                    Javascript
                                  </Code>
                                )}
                                {outil === "PHP" && (
                                  <Code className="inline-flex items-center gap-1 mr-2 mb-2">
                                    <PhpIcon size={16} className="inline" />
                                    PHP
                                  </Code>
                                )}
                                {outil === "Laravel" && (
                                  <Code className="inline-flex items-center gap-1 mr-2 mb-2">
                                    <LaravelIcon size={16} className="inline" />
                                    Laravel
                                  </Code>
                                )}
                                {outil === "PostgreSQL" && (
                                  <Code className="inline-flex items-center gap-1 mr-2 mb-2">
                                    <PostgresqlIcon
                                      size={16}
                                      className="inline"
                                    />
                                    PostgreSQL
                                  </Code>
                                )}
                                {outil === "Shopify" && (
                                  <Code className="inline-flex items-center gap-1 mr-2 mb-2">
                                    <ShopifyIcon size={16} className="inline" />
                                    Shopify
                                  </Code>
                                )}
                                {outil === "Liquid" && (
                                  <Code className="inline-flex items-center gap-1 mr-2 mb-2">
                                    <LiquidIcon size={16} className="inline" />
                                    Liquid
                                  </Code>
                                )}
                              </div>
                            ))
                          : ""}
                      </div>
                      <div>
                        {work.url && work.url != "/" && (
                          <>
                            <Link href={work.url} className="text-lime-300">
                              <button className="flex items-center gap-2 px-2 py-1 bg-black text-white dark:bg-white dark:text-black  text-sm rounded-sm hover:bg-lime-300 dark:hover:bg-lime-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-500">
                                <Globe size={16} />
                                Voir le site
                              </button>
                            </Link>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )
            )}
            {works.map(
              (work) =>
                activeTab == work.label &&
                work.label == "Scolaire" &&
                work.data &&
                work.data.map((ecole, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 dark:bg-[#1a1a1a] rounded-xl shadow-lg dark:border"
                  >
                    <div className="flex flex-col gap-4 p-4 w-96">
                      <div className="flex items-center gap-4">
                        <div className="w-[60px] h-[60px] flex items-center">
                          <Image
                            src={ecole.logo}
                            alt="logo"
                            width={60}
                            height={53}
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <h3 className="text-gray-500 text-xs">
                            {ecole.duration}
                          </h3>
                          <h3 className="font-bold">{ecole.name}</h3>
                          <p className="text-gray-500 text-sm">
                            {ecole.formation}
                          </p>
                          {ecole.content && (
                            <p className="text-sm">{ecole.content}</p>
                          )}
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
