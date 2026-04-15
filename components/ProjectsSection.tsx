import { PROJECTS, TAG_ICONS } from "@/lib/consts"
import { Item, ItemActions, ItemContent, ItemDescription, ItemFooter, ItemGroup, ItemTitle } from "./ui/item"
import { Button } from "./ui/button"
import Link from "next/link"
import { Badge } from "./ui/badge"

type Props = {}

const ProjectsSection = (props: Props) => {
  return (
    <div className="flex flex-col px-6 md:px-20 lg:px-40 py-10 gap-10 mt-10 max-w-5xl mx-auto w-full">
      <h1 className="text-3xl md:text-4xl font-semibold">Projects</h1>
      <div className="flex flex-col gap-5">
        {PROJECTS.map((project, index) => (
          <Item key={index} variant={"outline"}>
            <ItemContent>
              <div className="flex items-center gap-2 flex-wrap">
                <ItemTitle className="text-lg">{project.name}</ItemTitle>
                <Badge
                  variant={project.status === "live" ? "default" : "secondary"}
                  className="text-xs"
                >
                  {project.status === "live" ? "live" : "wip"}
                </Badge>
              </div>
              <ItemDescription className="text-sm">{project.description}</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button size="sm" variant="outline" asChild>
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  View
                </Link>
              </Button>
            </ItemActions>
            <ItemFooter>
              <div className="flex flex-wrap items-center gap-2 w-fit">
                {project.tags.map((tag) => {
                  const Icon = TAG_ICONS[tag]
                  return (
                    <Badge key={tag} variant={"outline"}>
                      {Icon && <Icon size={12} />}
                      {tag}
                    </Badge>
                  )
                })}
              </div>
            </ItemFooter>
          </Item>)
        )}
      </div>
    </div>
  )
}

export default ProjectsSection
