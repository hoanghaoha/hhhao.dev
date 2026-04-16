import Link from "next/link"
import { NAV_LINKS, SITE } from "@/lib/consts"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm flex flex-row w-full justify-between items-center px-4 md:px-10 lg:px-20 py-3">
      <Link href="/">
        <Image src="/icon.svg" width={30} height={30} alt="hhhao" />
      </Link>
      <div className="flex items-center gap-1">
        {NAV_LINKS.map((item) =>
          item.label !== "contact" ? (
            <Button key={item.label} variant="ghost" asChild>
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ) : (
            <Button key={item.label} variant="default" asChild>
              <a href={`mailto:${SITE.email}`}>
                {item.label}
                <ArrowRight />
              </a>
            </Button>
          )
        )}
      </div>
    </nav>
  )
}

export default NavBar
