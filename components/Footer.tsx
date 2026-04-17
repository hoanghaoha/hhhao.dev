import Link from "next/link"
import { Button } from "./ui/button"
import { SITE } from "@/lib/consts"
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react"
import EmailButton from "./EmailButton"

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
        <EmailButton size="icon" variant="outline" />
      </div>
      <a href={"https://github.com/hoanghaoha/hhhao.dev"}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <IconBrandGithub size={14} />
        This site is open source
      </a>
    </div>
  )
}

export default Footer
