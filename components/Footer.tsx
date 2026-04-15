import Link from "next/link"
import { Button } from "./ui/button"
import { SITE } from "@/lib/consts"
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react"

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 w-full px-6 md:px-10 py-10">
      <div className="flex items-center justify-center gap-2">
        <Button asChild size={"icon"} variant={"outline"}>
          <Link href={SITE.github} target="_blank" rel="noopener noreferrer">
            <IconBrandGithub />
          </Link>
        </Button>
        <Button asChild size={"icon"} variant={"outline"}>
          <Link href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
            <IconBrandLinkedin />
          </Link>
        </Button>
        <Button asChild size={"icon"} variant={"outline"}>
          <a href={`mailto:${SITE.email}`}>
            <IconMail />
          </a>
        </Button>
      </div>
      <a href="https://github.com/hoanghaoha/hhhao.dev" target="_blank" rel="noopener noreferrer" className="text-sm font-light hover:text-primary hover:underline transition-colors">This site is open source</a>
    </div>
  )
}

export default Footer
