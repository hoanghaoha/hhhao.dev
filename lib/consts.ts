import {
  IconBrandPython,
  IconBrandJavascript,
  IconBrandTypescript,
  IconLetterR,
  IconTerminal2,
  IconDatabase,
  IconDatabaseCog,
  IconTable,
  IconChartBar,
  IconChartHistogram,
  IconBrandNextjs,
  IconBrandSpeedtest,
  IconBrandDocker,
  IconBrain,
  IconRobot,
  IconBrandGithub,
  type Icon as TablerIcon,
} from "@tabler/icons-react";

export const SITE = {
  name: "Ha Hoang Hao",
  title: "Data & Research Analyst · Python Developer",
  description:
    "I analyze complex data, build automated pipelines, and develop Python tools that make research workflows faster and more reliable.",
  email: "me@hhhao.dev",
  github: "https://github.com/hoanghaoha",
  linkedin: "https://linkedin.com/in/hoanghaoha",
  url: "https://hhhao.dev",
  location: "Ho Chi Minh City, Vietnam",
};

export const TAG_ICONS: Record<string, TablerIcon> = {
  Python: IconBrandPython,
  JavaScript: IconBrandJavascript,
  TypeScript: IconBrandTypescript,
  R: IconLetterR,
  Bash: IconTerminal2,
  SQL: IconDatabase,
  DAX: IconTable,
  "PowerBI": IconChartBar,
  SPSS: IconChartHistogram,
  "Next.js": IconBrandNextjs,
  FastAPI: IconBrandSpeedtest,
  Docker: IconBrandDocker,
  Polars: IconDatabaseCog,
  PostgreSQL: IconDatabaseCog,
  AI: IconBrain,
  LLM: IconRobot,
  GitHub: IconBrandGithub,
};

export const PROJECTS = [
  {
    name: "survy",
    description:
      "Open source Python library for automated data processing and transformation. Handles cleaning, validation, and normalization with a consistent, scriptable API.",
    github: "https://github.com/hoanghaoha/survy",
    tags: ["Python"],
    status: "live" as const,
  },
  {
    name: "survy-agent-skills",
    description:
      "AI integration extension for the survy ecosystem. Enables LLM-powered data processing workflows using the agent skills pattern.",
    github: "https://github.com/hoanghaoha/survy-agent-skills",
    tags: ["Python", "AI"],
    status: "live" as const,
  },
  {
    name: "surveydb",
    description:
      "A standalone Python + PostgreSQL storage engine for survey data. Ingests any project as standardized CSV files and normalizes it into a unified, queryable database — enabling cross-project analysis that was previously impossible without manual work.",
    github: "https://github.com/hoanghaoha/surveydb",
    tags: ["Python", "Polars", "PostgreSQL", "SQL", "Power BI", "Docker"],
    status: "wip" as const,
  },
  {
    name: "hhhao.dev",
    description:
      "The site you're viewing here.",
    github: "https://github.com/hoanghaoha/hhhao.dev",
    tags: ["Nextjs"],
    status: "live" as const,
  },
];

export const EXPERIENCE = [
  {
    role: "Data Processing & Research Executive",
    company: "Insight Asia",
    location: "Ho Chi Minh City",
    period: "2022 — 2024",
    description:
      "Owned end-to-end data processing workflows for large-scale research projects. Built automated pipelines and worked across Python, SPSS, SQL, and Power BI to deliver clean, analysis-ready datasets.",
  },
  {
    role: "Data & Research Analyst",
    company: "Deli",
    location: "Ho Chi Minh City",
    period: "2020 — 2022",
    description:
      "Processed and analyzed structured research datasets, built reporting workflows, and delivered insights for client-facing projects.",
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
  { label: "experience", href: "#experiences" },
  { label: "contact", href: "#contact" },
];
