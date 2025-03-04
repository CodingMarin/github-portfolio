import useTheme from "@/hooks/useTheme";
import { Link, useLocation } from "react-router-dom";
import { MoonDark } from "@ui/Icons";
import { cn } from "@/utils/classNames";

export default function BottomNavigation() {
  const { toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <div className="fixed bottom-2 left-0 max-w-md mx-auto right-0 z-40">
      <div className="flex justify-center items-center w-full h-16 px-4">
        <div className="shadow-sm dark:hover:bg-[rgba(242,242,242,.07)] hover:border-[rgba(242,242,242,.05)] transition-colors bg-white border border-gray-200 dark:hover:shadow-2xl dark:bg-[rgba(242,242,242,.05)] dark:border-[rgba(242,242,242,.1)] dark:backdrop-blur-2xl rounded-3xl w-full max-w-3xs text-sm flex justify-between gap-2 px-1.5 py-1">
          <Link
            to={{
              pathname: "/",
              search: "",
            }}
            role="link"
            about="Navigation Link"
            className={cn(
              "dark:text-primary text-black hover:bg-gradient-to-l from-none to-[rgba(242,242,242,.05)] py-3 px-4 text-center rounded-4xl flex items-center justify-center transform transition-colors ",
              location.pathname === "/"
                ? "before:bg-white before:rounded-t-full before:w-6 before:h-[3px] dark:before:shadow-[0_2px_25px_2px_#fff] before:absolute before:-top-1"
                : ""
            )}
          >
            <div className="text-center tracking-tight leading-4 font-medium text-sm">
              Home
            </div>
          </Link>
          <Link
            to={{
              pathname: "/courses",
              search: "?q=all",
            }}
            role="link"
            about="Navigation Link"
            className={cn(
              "dark:text-primary text-black hover:bg-gradient-to-l from-none to-[rgba(242,242,242,.05)] py-3 px-4 text-center rounded-4xl flex items-center justify-center transform transition-colors ",
              location.pathname === "/courses"
                ? "before:bg-white before:rounded-t-full before:w-6 before:h-[3px] dark:before:shadow-[0_2px_25px_2px_#fff] before:absolute before:-top-1"
                : ""
            )}
          >
            <div className="text-center tracking-tight leading-4 font-medium">
              Tutorials
            </div>
          </Link>
          <button
            onClick={toggleTheme}
            type="button"
            role="button"
            className="p-2 rounded-full dark:text-white transition-colors duration-125 hover:bg-[rgba(242,242,242,.05)] data-[theme=light]:animate-pulse"
          >
            <MoonDark />
          </button>
        </div>
      </div>
    </div>
  );
}
