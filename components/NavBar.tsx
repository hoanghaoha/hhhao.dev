import Link from "next/link"
import { NAV_LINKS } from "@/lib/consts"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

const NavBar = () => {
  return (
    <nav className="flex flex-row w-full justify-between items-center px-20 py-10">
      <Link href="/" className="text-sm font-medium">
        hhhao
      </Link>
      <div className="flex items-center gap-1">
        {NAV_LINKS.map((item) =>
          item.label !== "contact" ? (
            <Button key={item.label} variant="ghost" asChild>
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ) : (
            <Button key={item.label} variant="default" asChild>
              <Link href={item.href} className="flex items-center gap-1">
                {item.label}
                <ArrowRight size={14} />
              </Link>
            </Button>
          )
        )}
      </div>
    </nav>
  )
}

export default NavBar
