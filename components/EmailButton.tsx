"use client";

import { SITE } from "@/lib/consts"
import { Button } from "./ui/button"
import { IconMail } from "@tabler/icons-react"
import { toast } from "sonner"

type Props = {
  size?: "icon" | "default"
  variant?: "outline" | "default"
}

const EmailButton = ({ size = "default", variant = "default" }: Props) => {

  const handleCopy = async () => {
    await navigator.clipboard.writeText(SITE.email)
    toast.success("Email copied!")
  }
  return (
    <Button onClick={handleCopy} size={size} variant={variant}>
      {size == "icon" ? "" : "Email"}
      <IconMail />
    </Button>
  )
}

export default EmailButton
