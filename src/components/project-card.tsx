import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: {
    href: string;
    label?: string;
  };
  galleryHref?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  link,
  galleryHref,
}: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border border-muted p-3">
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle className="text-base sm:text-xl">
            {galleryHref ? (
              <Link
                href={galleryHref}
                className="inline-flex items-center gap-1 hover:underline"
              >
                {title}{" "}
                <span className="size-1 rounded-full bg-green-500"></span>
              </Link>
            ) : link ? (
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:underline"
              >
                {title}{" "}
                <span className="size-1 rounded-full bg-green-500"></span>
              </a>
            ) : (
              title
            )}
          </CardTitle>
          <div className="hidden font-mono text-xs underline print:visible">
            {link?.href
              ?.replace("https://", "")
              .replace("www.", "")
              .replace("/", "")}
          </div>
          <CardDescription className="font-mono text-xs sm:text-lg">
            {description}
          </CardDescription>
          {link ? (
            <div className="font-mono text-xs sm:text-sm">
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-foreground hover:underline"
              >
                {link.label ?? link.href.replace(/^https?:\/\//, "")}
                <ArrowUpRight className="size-3" />
              </a>
            </div>
          ) : null}
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col gap-2">
        {galleryHref ? (
          <Link
            href={galleryHref}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline sm:text-base"
          >
            View project gallery
            <ArrowRight className="size-4" />
          </Link>
        ) : null}
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px] sm:text-sm"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
