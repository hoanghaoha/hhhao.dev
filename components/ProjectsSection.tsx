import { PROJECTS, TAG_ICONS } from "@/lib/consts"
import { Button } from "./ui/button"
import Link from "next/link"
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { ArrowRight } from "lucide-react"

type Props = {}

const ProjectsSection = (props: Props) => {
  return (
    <div className="flex flex-col px-6 md:px-20 lg:px-40 py-10 gap-10 mt-10 max-w-5xl mx-auto w-full">
      <h1 className="text-3xl md:text-4xl font-semibold">My Projects</h1>
      <div className="flex flex-col gap-5">
        {PROJECTS.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardAction>
                <Button asChild variant={"default"}>
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    View
                    <ArrowRight />
                  </Link>
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              {project.description}
            </CardContent>
            <CardFooter className="flex gap-2">
              {project.tags.map((tag, index) => {
                const Icon = TAG_ICONS[tag]
                return (
                  <Badge key={index} variant={"outline"}>
                    {Icon && <Icon />}
                    {tag}
                  </Badge>
                )
              })}
            </CardFooter>
          </Card>
        )
        )}
      </div>
    </div>
  )
}

export default ProjectsSection
