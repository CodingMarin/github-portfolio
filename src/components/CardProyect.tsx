interface Props {
  thumbnail: string;
  title: string;
  url: string;
  subtitle: string;
  category: string;
}

export default function CardProyect({ ...props }: Props) {
  return (
    <div className="rounded-xl shadow border border-metal">
      <div className="space-y-2">
        <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-t-xl">
          <picture className="w-full h-full">
            <img
              className="w-full h-full object-cover"
              src={props.thumbnail}
              alt={props.title}
            />
          </picture>
        </div>
        <div className="block px-3 py-3 w-full relative space-y-2">
          <a
            href={props.url}
            target="_blank"
            className="font-medium select-none text-sm text-primary hover:text-blue-400 transition-colors"
          >
            {props.title}
          </a>
          <p className="text-sm text-secondary line-clamp-2">
            {props.subtitle}
          </p>
          <div className="flex gap-2 items-center">
            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-[#21262d] text-gray-300">
              {props.category}
            </span>
            <span className="text-xs text-gray-400">Updated 3 days ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
