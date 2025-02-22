import skills from "@/data/skills";
import Badge from "@components/ui/Badge";
import GitHubButton from "react-github-btn";

export default function AboutMe() {
  return (
    <div className="rounded-xl border dark:border-metal">
      <div className="p-6 space-y-6">
        <div className="lg:flex block space-y-2 lg:space-y-0 items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <p className="text-blue-400 font-medium">About Me</p>
          </div>
          <div className="inline-flex gap-2">
            <GitHubButton
              href="https://github.com/CodingMarin/github-portfolio"
              data-color-scheme="no-preference: dark_high_contrast; light: dark_dimmed; dark: light;"
              data-size="large"
              data-show-count="true"
              aria-label="Star CodingMarin/consulta-ruc-dni-sunat on GitHub"
            >
              Star
            </GitHubButton>
            <GitHubButton
              href="https://github.com/CodingMarin"
              data-color-scheme="no-preference: dark_high_contrast; light: dark_dimmed; dark: light;"
              data-size="large"
              data-show-count="true"
              aria-label="Follow @CodingMarin on GitHub"
            >
              Follow @CodingMarin
            </GitHubButton>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl dark:text-primary text-black font-bold animate-fade-right animate-duration-600">
            Hi 👋, I'm <span className="underline">Alexander Marin</span>
          </h2>
          <p className="dark:text-secondary text-gray-500 text-sm animate-fade-right animate-duration-700">
            👋 It's a pleasure to find you on my profile! Remember to leave your
            little ⭐ so you're encouraged to contribute to the entire GitHub
            community. 🚀
          </p>

          <div className="space-y-2 space-x-1">
            <h3 className="text-sm dark:text-primary text-black font-medium animate-fade animate-duration-600">
              Languages and Tools:
            </h3>
            {skills.map((skill, i) => (
              <div key={i} className="inline-flex">
                <Badge
                  className="animate-jump"
                  text={skill.text}
                  icon={skill.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
