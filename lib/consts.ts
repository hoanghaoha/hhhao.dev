import {
  IconTerminal2,
  IconTable,
  IconChartHistogram,
  IconBrain,
  IconRobot,
  type Icon as TablerIcon,
  IconChartBar,
  IconDatabase,
} from "@tabler/icons-react";

import type { IconType } from "react-icons"
import { SiDocker, SiFastapi, SiGithub, SiGithubactions, SiJavascript, SiNextdotjs, SiPandas, SiPolars, SiPypi, SiPython, SiR, SiShadcnui, SiTypescript } from "react-icons/si";

export const SITE = {
  name: "Ha Hoang Hao",
  title: "Data & Research Analyst · Python Developer",
  description:
    "I analyze complex data to surface insights that drive decisions — and build tools that turn analysis into repeatable workflows.",
  email: "me@hhhao.dev",
  github: "https://github.com/hoanghaoha",
  linkedin: "https://linkedin.com/in/hoanghaoha",
  url: "https://hhhao.dev",
  location: "Ho Chi Minh City, Vietnam",
};


export type AnyIcon = IconType | TablerIcon

export const TAG_ICONS: Record<string, AnyIcon> = {
  Python: SiPython,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  R: SiR,
  "Next.js": SiNextdotjs,
  FastAPI: SiFastapi,
  Docker: SiDocker,
  Polars: SiPolars,
  Pandas: SiPandas,
  GitHub: SiGithub,
  Shadcn: SiShadcnui,
  PyPI: SiPypi,
  "Github Actions": SiGithubactions,
  SQL: IconDatabase,
  PowerBI: IconChartBar,
  DAX: IconTable,
  SPSS: IconChartHistogram,
  Bash: IconTerminal2,
  AI: IconBrain,
  LLM: IconRobot,
}

export const PROJECTS = [
  {
    name: "survy",
    description:
      "Open source Python library for automated survey data processing, transformation and analysis with a clean, scriptable API. Shipping with AI integration extension - enable LLM-powered data analyzing workflows using the agent skills pattern.",
    link: "https://survy.hhhao.dev",
    tags: ["Python", "Polars", "AI", "SPSS", "PyPI", "Github Actions"],
    status: "live" as const,
  },
  {
    name: "surveydb",
    description:
      "A standalone Python + SQL storage engine for survey data. Ingests any project as standardized CSV files and normalizes it into a unified, queryable database — enabling cross-project analysis that was previously impossible without manual work.",
    link: "https://github.com/hoanghaoha/surveydb",
    tags: ["Python", "Polars", "SQL", "PowerBI", "Docker"],
    status: "wip" as const,
  },
  {
    name: "hhhao.dev",
    description:
      "The site you're viewing here.",
    link: "https://github.com/hoanghaoha/hhhao.dev",
    tags: ["Next.js", "Shadcn"],
    status: "live" as const,
  },
];

export const STORY = [
  {
    role: "Quantitative Research Executive",
    organization: "Insight Asia",
    link: "https://insightasia.com/",
    period: "2024 — 2026",
    description: "This is where I learned what survey data really looks like at scale — and how painful it is to process without the right tools. I owned the data side of the pipeline: from questionnaire programming through to cleaning, transforming, analysis, and dashboards. Every project had its own schema, its own quirks, its own manual steps that nobody had ever bothered to fix. That friction is what eventually became survy — a library I built to automate the parts of the workflow I found myself repeating across every single project.",
  },
  {
    role: "Data & Research Analyst",
    organization: "Deli",
    link: "https://www.deliworld.com/",
    period: "2022 — 2024",
    description: "My first job out of university. I spent two years close to the business — tracking sales performance, mapping trends across regions and product lines, and gathering ground-level feedback from sales reps, distributors, and end users to inform product decisions. It taught me how real data looks: messy, inconsistent, and nothing like textbook examples. That's also where I learned that the most valuable thing you can do with data isn't the analysis — it's removing the manual work standing between raw data and insight.",
  },
];

export const SKILLS = [
  {
    label: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "R", "Bash"],
  },
  {
    label: "Domain",
    items: ["SQL", "DAX"],
  },
  {
    label: "Tools",
    items: ["Power BI", "SPSS", "Next.js", "FastAPI", "Docker"],
  },
];

export const NAV_LINKS = [
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "story", href: "#story" },
  { label: "contact", href: "#contact" },
];
