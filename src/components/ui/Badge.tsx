import { cn } from "@utils/classNames";

interface Props {
  icon?: React.ReactNode;
  text: string;
  className?: string;
}

export default function Badge({ ...props }: Props) {
  return (
    <div className={cn("flex flex-wrap gap-2", props.className)}>
      <div
        className={cn(
          "inline-flex items-center active:animate-spin duration-75 hover:animate-pulse dark:hover:bg-green-400/10 transition-colors cursor-pointer select-none gap-2 px-2 py-1 border dark:border-green-400/20 border-gray-300 rounded-full dark:bg-badge text-[#212529] dark:text-primary/75"
        )}
        role="button"
        aria-label={props.text}
      >
        <span aria-hidden="true" className={props.icon ? "" : "hidden"}>
          {props.icon}
        </span>
        <p className="text-xs font-medium"> {props.text}</p>
      </div>
    </div>
  );
}
