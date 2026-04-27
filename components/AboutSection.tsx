import { PROJECTS } from "@/lib/consts"

const TextLink = ({ text, link }: { text: string, link: string }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 text-primary hover:text-accent-foreground hover:bg-primary transition-colors">
      {text}
    </a>
  )

}

type Props = {}

const AboutSection = (props: Props) => {
  return (
    <div className="flex flex-col px-6 md:px-20 lg:px-40 py-10 gap-10 mt-10 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-semibold">About me</h1>
      <div className="space-y-4 leading-relaxed text-muted-foreground">
        <p>
          I'm a Data & Research Analyst and Indie Hacker based in Ho Chi Minh City, Vietnam.
        </p>
        <p>
          I've spent 4 years in market research and analytics — owning pipelines, cleaning messy datasets, delivering analysis, turning noisy data into decisions.
          Somewhere along the way I became obsessed with a different question:
          what would it look like if working with data was actually enjoyable?
        </p>
        <p>
          That's what I build toward
          {". "}
          <TextLink text="survy" link="https://survy.hhhao.dev" /> automates the parts of survey data work nobody wants to do by hand
          {" - "}
          <span>
            <TextLink text="querizer" link="https://querizer.vercel.app" /> makes learning SQL genuinely fun.
          </span>
        </p>
        <p>
          Still employed. Still building.
        </p>
      </div>
    </div>
  )
}

export default AboutSection
