import { SITE } from "@/lib/consts"
import { Button } from "./ui/button"
import Link from "next/link"
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react"

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center py-10 w-[50%] gap-10">
      <p className="text-6xl font-bold">{SITE.name}</p>
      <p className="text-xl font-semibold text-center">{SITE.description}</p>
      <div className="flex items-center gap-2">
        <Button asChild>
          <Link href={SITE.github} target="_blank" rel="noopener noreferer">Github
            <IconBrandGithub />
          </Link>
        </Button>
        <Button asChild>
          <Link href={SITE.linkedin} target="_blank" rel="noopener noreferer">LinkedIn
            <IconBrandLinkedin />
          </Link>
        </Button>
        <Button asChild>
          <a href={`mailto:${SITE.email}`}>
            <IconMail />
            Email
          </a>
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
