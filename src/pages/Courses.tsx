import CourseCard from "@/components/CourseCard";
import { Search } from "@/components/ui/Icons";

export default function Courses() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto dark:bg-github">
      <header className="">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="font-bold text-xl">FLWR</div>
            <div className="relative hidden md:block dark:text-secondary">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4">
                <Search />
              </span>
              <input
                type="text"
                placeholder="Press ⌘ + F to search"
                className="w-[300px] text-sm dark:border-metal outline-0 border pl-10 pr-4 py-2 rounded-md bg-github/50"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 text-yellow-500" />
              <span>1041 Trophy</span>
            </div>
            <div className="w-5 h-5" />
            <button className="bg-primary text-white hover:bg-primary/90">
              Join Bootcamp
              <span className="ml-2 text-xs bg-[#FFA500] px-2 py-0.5 rounded">
                20% Off
              </span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        <main className="flex-1 px-4 py-6">
          <div className="text-sm dark:text-secondary mb-6">
            Learning Path / Product Manager
          </div>

          <div className="mb-12">
            <div className="flex items-start justify-between">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold mb-4 dark:text-primary">
                  Be a Good Product Manager
                </h1>
                <p className="text-muted-foreground mb-2 dark:text-secondary">
                  A product manager is a professional responsible for overseeing
                  the development and success of a product from conception to
                  launch and beyond. They act as
                  <button className="text-primary ml-2">Read More</button>
                </p>
              </div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-0355699eddc5a6cff26b71162887bb48-dOGp8FDqcjfVOvcrx75h9xAmCc3lG2.webp"
                alt="Product Manager Illustration"
                className="w-[300px] h-auto"
              />
            </div>
          </div>
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold dark:text-primary">
                Courses Free
              </h2>
              <button className="text-sm dark:text-primary">
                Show All
                <div className="w-4 h-4 ml-1" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <CourseCard
                title="Mastering Interaction Design: From Principles to Practice"
                description="Dive into the core principles of interaction design and learn practical..."
                instructor="Alexander Marin"
                duration="4h"
                tags={["Gratis", "Principiante"]}
                thumbnail="/card.webp"
              />
              <CourseCard
                title="Apple HIG Mastery: Creating Seamless User Experiences"
                description="Learn how to design user interfaces that align with Apple's Human Interface..."
                instructor="Alexander Marin"
                duration="4h"
                tags={["Gratis", "Junior"]}
                thumbnail="/card.webp"
              />
              <CourseCard
                title="Creating Impactful Icons: Design Techniques"
                description="Learn the basics of icon design, from concept development to creating visual..."
                instructor="Alexander Marin"
                duration="32h"
                tags={["Gratis", "Junior"]}
                thumbnail="/card.webp"
              />
              <CourseCard
                title="Advanced Interaction Design: Techniques and Practices"
                description="Take your motion graphics skills to the next level with advanced techniques..."
                instructor="Alexander Marin"
                duration="32h"
                tags={["Gratis", "Junior"]}
                thumbnail="/card.webp"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
