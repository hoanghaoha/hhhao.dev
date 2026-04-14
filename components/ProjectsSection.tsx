import { PROJECTS, TAG_ICONS } from "@/lib/consts"
import { Item, ItemActions, ItemContent, ItemDescription, ItemFooter, ItemGroup, ItemTitle } from "./ui/item"
import { Button } from "./ui/button"
import Link from "next/link"
import { Badge } from "./ui/badge"

type Props = {}

const ProjectsSection = (props: Props) => {
  return (
    <div className="flex flex-col px-100 py-10 gap-10">
      <h1 className="text-4xl font-semibold">Projects</h1>
      <div className="flex flex-col gap-5">
        {PROJECTS.map((project, index) => (
          <Item key={index} variant={"outline"}>
            <ItemContent>
              <ItemTitle className="text-lg">{project.name}</ItemTitle>
              <ItemDescription className="text-sm">{project.description}</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button size="sm" variant="outline" asChild>
                <Link href={project.github} target="_blank">
                  View
                </Link>
              </Button>
            </ItemActions>
            <ItemFooter>
              <div className="flex items-center gap-2 w-fit">
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
