import { CssIcon } from "@/components/icons/CssIcon";
import { FastapiIcon } from "@/components/icons/FastapiIcon";
import { FigmaIcon } from "@/components/icons/FigmaIcon";
import { GitIcon } from "@/components/icons/GitIcon";
import { HtmlIcon } from "@/components/icons/HtmlIcon";
import { JavaIcon } from "@/components/icons/JavaIcon";
import { JenkinsIcon } from "@/components/icons/JenkinsIcon";
import { JiraIcon } from "@/components/icons/JiraIcon";
import { JsIcon } from "@/components/icons/JsIcon";
import { LaravelIcon } from "@/components/icons/LaravelIcon";
import { MongodbIcon } from "@/components/icons/MongodbIcon";
import { NextjsIcon } from "@/components/icons/NextjsIcon";
import { PhpIcon } from "@/components/icons/PhpIcon";
import { PostgresqlIcon } from "@/components/icons/PostgresqlIcon";
import { PythonIcon } from "@/components/icons/PythonIcon";
import { ReactIcon } from "@/components/icons/ReactIcon";
import { SpringbootIcon } from "@/components/icons/SpringbootIcon";
import { TailwindcssIcon } from "@/components/icons/TailwindcssIcon";
import { TrelloICon } from "@/components/icons/TrelloIcon";
import { TypescriptIcon } from "@/components/icons/TypescriptIcon";
import { UmlIcon } from "@/components/icons/UmlIcon";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const skills = [
  {
    label: "Front-End",
    content: ["React", "TailwindCSS", "Javascript", "HTML", "CSS"],
  },
  {
    label: "Back-End",
    content: [
      "Next.js",
      "Typescript",
      "Springboot",
      "Java",
      "Laravel",
      "Php",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    label: "Modélisation",
    content: ["Figma", "UML"],
  },
  {
    label: "CI/CD",
    content: ["Jenkins", "Git"],
  },
  {
    label: "Gestion projet",
    content: ["Jira", "Trello"],
  },
];

export default function Languages() {
  const [activeTab, setActiveTab] = useState<string>(skills[0].label);
  const [direction, setDirection] = useState("left");

  const handleClick = (label: string) => {
    setDirection(label === activeTab ? "right" : "left");
    setActiveTab(label);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:flex gap-6 dark:bg-[#1a1a1a] bg-gray-100 py-2 px-4 rounded-lg sm:rounded-full z-50">
        {skills.map((skill) => (
          <button
            key={skill.label}
            onClick={() => handleClick(skill.label)}
            className={`font-semibold ${
              activeTab === skill.label
                ? "bg-lime-300 text-black px-2 rounded-full"
                : "text-gray-500 hover:text-lime-300 px-2 rounded-full"
            } transition duration-300`}
          >
            {skill.label}
          </button>
        ))}
      </div>
      <div className="relative mt-8">
        <AnimatePresence mode="wait">
          {skills.map(
            (skill) =>
              activeTab === skill.label && (
                <motion.div
                  key={activeTab}
                  initial={{ x: direction === "left" ? -50 : 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction === "left" ? 50 : -50, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {skill.content.map((langage) => (
                      <div
                        key={langage}
                        className="bg-gray-100 dark:bg-[#1a1a1a] rounded-xl p-2.5 flex items-center gap-5 shadow-lg dark:border"
                      >
                        {langage == "React" && (
                          <div className="bg-[#61DAFB]/30 p-3 rounded-lg">
                            <ReactIcon size={32} />
                          </div>
                        )}
                        {langage == "TailwindCSS" && (
                          <div className="bg-[#0EA5E9]/30 p-3 rounded-lg">
                            <TailwindcssIcon size={32} />
                          </div>
                        )}
                        {langage == "Javascript" && (
                          <div className="bg-[#F0DB4F]/30 p-3 rounded-lg">
                            <JsIcon size={32} />
                          </div>
                        )}
                        {langage == "HTML" && (
                          <div className="bg-[#E34F26]/30 p-3 rounded-lg">
                            <HtmlIcon size={32} />
                          </div>
                        )}
                        {langage == "CSS" && (
                          <div className="bg-[#214CE5]/30 p-3 rounded-lg">
                            <CssIcon size={32} />
                          </div>
                        )}
                        {langage == "Next.js" && (
                          <div className="bg-white p-3 rounded-lg">
                            <NextjsIcon size={32} />
                          </div>
                        )}
                        {langage == "Typescript" && (
                          <div className="bg-[#2D79C7]/30 p-3 rounded-lg">
                            <TypescriptIcon size={32} />
                          </div>
                        )}
                        {langage == "Springboot" && (
                          <div className="bg-[#6DB33F]/30 p-3 rounded-lg">
                            <SpringbootIcon size={32} />
                          </div>
                        )}
                        {langage == "Java" && (
                          <div className="bg-[#0B6B9D]/30 p-3 rounded-lg">
                            <JavaIcon size={32} />
                          </div>
                        )}
                        {langage == "Laravel" && (
                          <div className="bg-[#B52B26]/30 p-3 rounded-lg">
                            <LaravelIcon size={32} />
                          </div>
                        )}
                        {langage == "Php" && (
                          <div className="bg-[#6181B6]/30 p-3 rounded-lg">
                            <PhpIcon size={32} />
                          </div>
                        )}
                        {langage == "FastAPI" && (
                          <div className="bg-[#05998B]/30 p-3 rounded-lg">
                            <FastapiIcon size={32} />
                          </div>
                        )}
                        {langage == "Python" && (
                          <div className="bg-[#3773A5]/30 p-3 rounded-lg">
                            <PythonIcon size={32} />
                          </div>
                        )}
                        {langage == "PostgreSQL" && (
                          <div className="bg-[#336791]/30 p-3 rounded-lg">
                            <PostgresqlIcon size={32} />
                          </div>
                        )}
                        {langage == "MongoDB" && (
                          <div className="bg-[#13AA52]/30 p-3 rounded-lg">
                            <MongodbIcon size={32} />
                          </div>
                        )}
                        {langage == "Figma" && (
                          <div className="bg-black p-3 rounded-lg">
                            <FigmaIcon size={20} />
                          </div>
                        )}
                        {langage == "UML" && (
                          <div className="bg-white p-3 rounded-lg">
                            <UmlIcon size={32} />
                          </div>
                        )}
                        {langage == "Jenkins" && (
                          <div className="bg-white p-3 rounded-lg">
                            <JenkinsIcon size={32} />
                          </div>
                        )}
                        {langage == "Jira" && (
                          <div className="bg-white p-3 rounded-lg">
                            <JiraIcon size={32} />
                          </div>
                        )}
                        {langage == "Trello" && (
                          <div className="bg-[#007FC9]/30 p-3 rounded-lg">
                            <TrelloICon size={32} />
                          </div>
                        )}
                        {langage == "Git" && (
                          <div className="bg-[#F05030]/30 p-3 rounded-lg">
                            <GitIcon size={32} />
                          </div>
                        )}
                        <p className="pr-5 text-lg">{langage}</p>
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
