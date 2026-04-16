import { STORY } from "@/lib/consts"

type Props = {}

const StorySection = (props: Props) => {
  return (
    <div className="flex flex-col px-6 md:px-20 lg:px-40 py-10 gap-10 mt-10 max-w-5xl mx-auto w-full">
      <h1 className="text-3xl md:text-4xl font-semibold">My Story</h1>
      <div className="flex flex-col gap-10">
        {STORY.map((item, index) => (
          <div key={index} className="flex flex-col gap-2">
            <p>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-primary transition-colors">{item.organization}</a> - {item.role}
            </p>
            <p className="text-xs text-muted-foreground">{item.period}</p>
            <p className="text-sm">{item.description}</p>
          </div>
        )
        )}
      </div>
    </div>
  )
}

export default StorySection;
