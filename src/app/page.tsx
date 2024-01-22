import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-5xl space-y-8 bg-white print:space-y-6">
        <span className="block sm:hidden -mb-5 mt-3">
          <h1 className="text-5xl font-bold">{RESUME_DATA.name}</h1>
        </span>
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-2">
            <h1 className="text-3xl sm:text-8xl font-bold hidden sm:block">{RESUME_DATA.name}</h1>
            <p className="max-w-lg text-pretty font-mono text-sm sm:text-2xl text-muted-foreground">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs sm:text-lg text-muted-foreground">
              <p
                className="inline-flex gap-x-1.5 align-baseline leading-none"
              >
                <GlobeIcon className="size-3 sm:size-4" />
                {RESUME_DATA.location}
              </p>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.contact.email ? (
                <Button
                  className="size-8 sm:size-12"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="size-4 sm:size-6" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <Button
                  className="size-8 sm:size-12"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <PhoneIcon className="size-4 sm:size-6" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8 sm:size-12"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}>
                    <social.icon className="size-4 sm:size-6" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <a href={`tel:${RESUME_DATA.contact.tel}`}>
                  <span className="underline">{RESUME_DATA.contact.tel}</span>
                </a>
              ) : null}
            </div>
          </div>

          <Avatar className="size-40 sm:size-80">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className="text-xl sm:text-3xl font-bold">About</h2>
          <p className="text-pretty font-mono text-sm sm:text-lg text-muted-foreground">
            {RESUME_DATA.summary}
          </p>
        </Section>
        <Section>
          <h2 className="text-xl sm:text-3xl font-bold">Work Experience</h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base sm:text-xl">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a className="hover:underline" href={work.link}>
                        {work.company}
                      </a>

                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs sm:text-xl"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-sm sm:text-xl tabular-nums text-gray-500">
                      {work.start} - {work.end}
                    </div>
                  </div>

                  <h4 className="font-mono sm:text-lg text-sm leading-none">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs sm:text-lg whitespace-pre-line">
                  {work.description}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl sm:text-3xl font-bold">Education</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base sm:text-xl">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm sm:text-xl tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2 sm:text-lg">{education.degree}</CardContent>
                <CardContent className="mt-2 sm:text-lg">GPA: {education.gpa}</CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl sm:text-2xl font-bold">Languages</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.languages.map((language) => {
              return <Badge className="sm:text-sm" key={language}>{language}</Badge>;
            })}
          </div>
        </Section>
        <Section>
          <h2 className="text-xl sm:text-2xl font-bold">Frameworks and Libraries</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => {
              return <Badge className="sm:text-sm" key={skill}>{skill}</Badge>;
            })}
          </div>
        </Section>
        <Section>
          <h2 className="text-xl sm:text-2xl font-bold">Tools</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.tools.map((tool) => {
              return <Badge className="sm:text-sm" key={tool}>{tool}</Badge>;
            })}
          </div>
        </Section>

        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl sm:text-3xl font-bold">Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                />
              );
            })}
          </div>
        </Section>
        <Section className="print-force-new-page scroll-mb-16">
          <div className="flex justify-center items-center">
            <h2 className="text-xs ">© 2024 Kyle Finken</h2>
          </div>
        </Section>
      </section>
    </main>
  );
}
