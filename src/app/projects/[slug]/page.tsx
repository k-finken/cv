import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { RESUME_DATA } from "@/data/resume-data";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";

type Project = (typeof RESUME_DATA.projects)[number];

const projectsWithGallery = RESUME_DATA.projects.filter(
  (project): project is Project & { gallery: NonNullable<Project["gallery"]> } =>
    Boolean(project.slug && project.gallery && project.gallery.length > 0),
);

const getProjectBySlug = (slug: string) =>
  projectsWithGallery.find((project) => project.slug === slug);

export function generateStaticParams() {
  return projectsWithGallery.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: RESUME_DATA.name,
    };
  }

  return {
    title: `${project.title} | ${RESUME_DATA.name}`,
    description: project.description,
  };
}

export default function ProjectGalleryPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);

  if (!project || !project.gallery || project.gallery.length === 0) {
    notFound();
  }

  return (
    <main className="container relative mx-auto max-w-5xl space-y-12 p-4 md:p-16">
      <Section className="gap-y-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" /> Back to resume
        </Link>

        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold sm:text-5xl">{project.title}</h1>
            <p className="text-pretty font-mono text-sm text-muted-foreground sm:text-lg">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-1">
            {project.techStack.map((tag) => (
              <Badge className="sm:text-sm" key={tag}>
                {tag}
              </Badge>
            ))}
          </div>

          {project.link ? (
            <a
              href={project.link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline sm:text-base"
            >
              Visit {project.link.label ?? "project website"}
              <ArrowUpRight className="size-4" />
            </a>
          ) : null}
        </div>
      </Section>

      <Section className="gap-y-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {project.gallery.map((item, index) => (
            <figure className="space-y-3" key={`${item.type}-${index}`}>
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className="h-auto w-full rounded-xl border object-cover"
                />
              ) : (
                <div className="aspect-video w-full overflow-hidden rounded-xl border bg-black">
                  <iframe
                    src={item.embedUrl}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
              )}
              {"caption" in item && item.caption ? (
                <figcaption className="text-sm text-muted-foreground">
                  {item.caption}
                </figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      </Section>
    </main>
  );
}
