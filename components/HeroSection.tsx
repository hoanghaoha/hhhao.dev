import { SITE } from "@/lib/consts"
import { Button } from "./ui/button"
import Link from "next/link"
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react"
import EmailButton from "./EmailButton"

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-6 w-full md:w-[70%] lg:w-[55%] gap-10">
      <div className="flex flex-col gap-2 items-center">
        <p className="text-4xl md:text-6xl font-bold text-center">{SITE.name}</p>
        <p className="text-base md:text-lg text-center">{SITE.title}</p>
      </div>
      <p className="text-lg md:text-xl font-semibold text-center">{SITE.description}</p>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button asChild>
          <Link href={SITE.github} target="_blank" rel="noopener noreferrer">Github
            <IconBrandGithub />
          </Link>
        </Button>
        <Button asChild>
          <Link href={SITE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn
            <IconBrandLinkedin />
          </Link>
        </Button>
        <EmailButton />
      </div>
    </div>
  )
}

export default HeroSection
