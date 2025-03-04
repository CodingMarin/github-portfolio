import Badge from "@ui/Badge";
import { Clock, Person } from "@ui/Icons";

interface Props {
  title: string;
  description: string;
  instructor: string;
  duration: string;
  tags: string[];
  thumbnail: string;
}

export default function CourseCard({
  title,
  description,
  instructor,
  duration,
  tags,
  thumbnail,
}: Props) {
  return (
    <div className="overflow-hidden bg-white dark:bg-transparent dark:border-badge border rounded-xl">
      <div className="p-0">
        <div className="relative h-48">
          <img src={thumbnail} alt={title} className="object-cover" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium mb-2 line-clamp-2 dark:text-primary text-[#212529]">
          {title}
        </h3>
        <p className="text-sm dark:text-secondary mb-4 line-clamp-2 text-gray-500">
          {description}
        </p>
        <div className="text-sm mb-3 text-[#212529] dark:text-primary inline-flex items-center gap-2">
          <Person /> By:
          <span className="font-medium dark:text-blue-400">{instructor}</span>
        </div>
        <div className="text-sm mb-3 text-[#212529] dark:text-primary inline-flex items-center gap-2">
          <Clock /> Duration:
          <span className="font-medium dark:text-yellow-400">{duration}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} className="text-xs" icon={undefined} text={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
