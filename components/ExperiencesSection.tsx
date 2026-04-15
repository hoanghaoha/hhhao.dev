import { EXPERIENCES, TAG_ICONS } from "@/lib/consts"
import { Badge } from "./ui/badge"

type Props = {}

const ExperiencesSection = (props: Props) => {
  return (
    <div className="flex flex-col px-6 md:px-20 lg:px-40 py-10 gap-10 mt-10 max-w-5xl mx-auto w-full">
      <h1 className="text-3xl md:text-4xl font-semibold">Experiences</h1>
      <div className="flex flex-col gap-10">
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className="flex flex-col gap-2">
            <p>
              <a href={exp.company_link} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-primary transition-colors">{exp.company}</a> - {exp.role}
            </p>
            <p className="text-sm text-muted-foreground">{exp.period}</p>
            <p className="text-sm">{exp.description}</p>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {exp.skills.map(skill => {
                const Icon = TAG_ICONS[skill]
                return (<Badge key={skill} variant={"secondary"}>
                  {Icon && <Icon size={12} />}
                  {skill}</Badge>)
              })}
            </div>
          </div>
        )
        )}
      </div>
    </div>
  )
}

export default ExperiencesSection;
