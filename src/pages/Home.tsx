import AboutMe from "@components/AboutMe";
import profile from "/profile.jpeg";
import { Touch } from "@components/ui/Icons";
import CardProyect from "@components/CardProyect";
import projects from "@/data/proyects";

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-6">
            <div className="flex justify-center items-center">
              <img
                src={profile}
                alt="Profile"
                className="rounded-full w-72 border-2 dark:border-gray-800 animate-wiggle"
              />
            </div>

            <div className="">
              <h1 className="text-2xl dark:text-white text-black font-semibold animate-fade-up animate-duration-600">
                Alexander Marin
              </h1>
              <p className="text-base dark:text-gray-300 text-gray-500 animate-fade-up animate-duration-700">
                Software Developer | Web Security
              </p>
            </div>

            <p className="text-gray-500 dark:text-secondary text-sm animate-fade-up animate-duration-800">
              Full Stack Developer passionate about creating impactful web
              experiences
            </p>

            <button className="w-full inline-flex justify-center gap-2 px-4 py-2 text-sm transition-colors font-medium rounded-md border border-gray-500 dark:border-[#30363d] dark:hover:border-gray-700 dark:bg-[#21262d] dark:text-gray-300 text-black">
              <span>
                <Touch />
              </span>
              Contact Me
            </button>

            <div className="space-y-2 pt-4 border-t dark:border-[#21262d]">
              <div className="flex items-center gap-2 dark:text-secondary text-sm text-gray-500">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>marinalexander691@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-secondary">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                  />
                </svg>
                <span>github.com/CodingMarin</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-8">
            <AboutMe />

            {/* Pinned Repositories */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Proyects</h3>
                <button className="px-3 py-1 text-sm hover:bg-[#21262d] rounded-md text-gray-400">
                  Filter
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                  <CardProyect
                    key={index}
                    thumbnail={project.thumbnail}
                    title={project.title}
                    url={project.url}
                    subtitle={project.subtitle}
                    category={project.category}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
