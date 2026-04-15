import { PROJECTS, SITE } from "@/lib/consts"

type Props = {}

const AboutSection = (props: Props) => {
  return (
    <div className="flex flex-col px-6 md:px-20 lg:px-40 py-10 gap-10 mt-10 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-semibold">About</h1>
      <div className="space-y-4 leading-relaxed text-muted-foreground">
        <p>
          I'm a data professional based in Ho Chi Minh City, Vietnam, with 4 years
          of experience turning messy, complex datasets into clean insights and
          automated workflows.
        </p>
        <p>
          My work sits at the intersection of statistical analysis and data engineering —
          I don't just analyze data, I build the tools and pipelines to process it at scale.
          That mindset led me to create{" "}
          <a href={PROJECTS[0].github} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-primary transition-colors">survy</a>,{" "}
          an open source Python library for automated data processing,{" "}
          <a href={PROJECTS[1].github} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-primary transition-colors">survy-agent-skills</a>{" "}
          for AI-powered workflows, and{" "}
          <a href={PROJECTS[2].github} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-primary transition-colors">surveydb</a>{" "}
          — a PostgreSQL storage engine that turns isolated survey files into a unified, queryable database.
        </p>
        <p>
          I'm drawn to problems where technical depth and research thinking both
          matter — where the answer isn't just in the data, but in how you build
          the system to get there.
        </p>
      </div>
    </div>
  )
}

export default AboutSection
