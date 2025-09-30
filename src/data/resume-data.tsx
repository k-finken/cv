import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import type { ComponentType, SVGProps } from "react";
import type { StaticImageData } from "next/image";

import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

type GalleryImageItem = {
  type: "image";
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

type GalleryVideoItem = {
  type: "video";
  embedUrl: string;
  title: string;
  caption?: string;
};

type GalleryItem = GalleryImageItem | GalleryVideoItem;

type ProjectLink = {
  href: string;
  label?: string;
};

type ResumeProject = {
  title: string;
  slug: string;
  techStack: string[];
  description: string;
  logo: StaticImageData;
  link?: ProjectLink;
  gallery?: GalleryItem[];
};

type WorkExperience = {
  company: string;
  link?: string;
  badges: string[];
  title: string;
  logo: StaticImageData;
  start: string;
  end: string;
  description: string;
};

type SocialLink = {
  name: string;
  url: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

type Education = {
  school: string;
  degree: string;
  start: string;
  end: string;
  gpa?: string;
};

type ResumeData = {
  name: string;
  initials: string;
  location: string;
  summary: string;
  avatarUrl: string;
  contact: {
    email?: string;
    tel?: string;
    social: SocialLink[];
  };
  education: Education[];
  work: WorkExperience[];
  languages: string[];
  skills: string[];
  tools: string[];
  projects: ResumeProject[];
};

export const RESUME_DATA: ResumeData = {
  name: "Kyle Finken",
  initials: "KF",
  location: "Seattle, WA, USA",
  summary:
    "Hey! I'm Kyle Finken, a Computer Engineering graduate from the University of Florida. I have a burning passion for building innovative software solutions to tackle real-world challenges, and doing it quickly. I have extensive experience developing for the web and thrive in fast-paced agile work environments where I can wear a ton of hats and learn something new everyday. If you're interested in connecting don't hesitate to reach out!",
  avatarUrl: "https://kylefinken.com/graduation%20pic.jpg",
  contact: {
    email: "kfinken@finkenfive.com",
    tel: "+19529134362",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/k-finken",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kyle-finken/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/KyleFinken",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Florida",
      degree: "Bachelors of Science in Computer Engineering",
      start: "2019",
      end: "2023",
      gpa: "3.8/4.0",
    },
  ],
  work: [
    {
      company: "Clari",
      link: "https://www.clari.com/",
      badges: [],
      title: "Software Engineer 2",
      logo: ParabolLogo,
      start: "02/2025",
      end: "Current",
      description: ``,
    },
    {
      company: "Clari",
      link: "https://www.clari.com/",
      badges: [],
      title: "Software Engineer 1",
      logo: ParabolLogo,
      start: "04/2024",
      end: "02/2025",
      description: ``,
    },
    {
      company: "DataBanc",
      link: "https://www.mydatabanc.com/",
      badges: [],
      title: "Full Stack SWE Intern",
      logo: ParabolLogo,
      start: "09/2022",
      end: "03/2024",
      description: `• Rapidly advanced from intern to a key contributor, gaining trust and responsibility in full-feature development and high-impact projects, collaborating directly with the CEO on marketing and strategy initiatives.
      • Engineered comprehensive AI feature set, including embeddings and related infrastructure, using React, Langchain, PostgreSQL, and Docker. Ultimately enabling users to have interactive, data-driven conversations. 
      • Optimized existing Express.js APIs, achieving 86% faster performance, enhancing user experience, and reducing operational costs
      • Developed a database security testing suite with Jest. Improving code quality and minimizing vulnerabilities in production`,
    },
    {
      company: "Publix Supermarkets",
      link: "https://www.publix.com/",
      badges: [],
      title: "Software Engineering Intern",
      logo: ClevertechLogo,
      start: "05/2022",
      end: "08/2022",
      description: `• Spearheaded the development of a trending search feature, tripling specific search term usage and benefiting over 30,000 users.
      • Implemented new API enhancements enabling the promotion of select products on search result pages, utilizing Vue.js and .NET, resulting in a 10% increase in user search engagement. 
      • Composed extensive A/B tests on new features using Adobe Analytics and Optimizely to refine user engagement and conversion rates.`,
    },
    {
      company: "Publix Supermarkets",
      link: "https://www.publix.com/",
      badges: [],
      title: "Software Engineering Intern",
      logo: JojoMobileLogo,
      start: "05/2021",
      end: "08/2021",
      description: `• Revamped .NET APIs using C# to integrate advanced fallback search logic, decreasing no-result landing
      pages by 64%.
      • Collaborated with the UX/UI team to expand the existing Storybook component explorer system. 
      • Implemented regression testing suites with Selenium that were run following deployments.`,
    },
  ],
  languages: ["JavaScript", "TypeScript", "C++", "C#", "Java", "Python", "SQL"],
  skills: [
    "React/Next.js/Gatsby",
    "Node.js",
    "Express.js",
    ".NET",
    "PostgreSQL",
    "TailwindCSS",
    "Jest",
    "Prisma",
    "Flask",
    "Puppeteer",
    "Docker",
    "Vue.js",
    "Langchain",
    "MySQL",
    "PyTorch",
  ],
  tools: [
    "Google Cloud Platform",
    "Firebase",
    "Docker",
    "Git",
    "GitHub",
    "Azure DevOps",
    "Postman",
    "Linux",
    "Adobe Analytics",
    "Storybook",
  ],
  projects: [
    {
      title: "DataBanc",
      slug: "databanc",
      techStack: [
        "Full Stack SWE Intern",
        "Javascript",
        "Gatsby",
        "TailwindCSS",
        "Docker",
        "PostgreSQL",
        "Firebase",
        "Langchain",
      ],
      description:
        "Data privacy and security platform for consumers to control, use, and monetize their data.",
      logo: ConsultlyLogo,
      link: {
        label: "mydatabanc.com",
        href: "https://www.mydatabanc.com/",
      },
      gallery: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
          alt: "Team reviewing analytics dashboards on laptops.",
          width: 1600,
          height: 900,
          caption: "Customer privacy dashboards built with Gatsby and TailwindCSS.",
        },
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1483478550801-78146024c39a?auto=format&fit=crop&w=1600&q=80",
          alt: "Developer configuring a secure cloud environment.",
          width: 1600,
          height: 900,
          caption: "Infrastructure automation powering DataBanc's secure deployments.",
        },
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1600267165477-1c2d3a17f5c1?auto=format&fit=crop&w=1600&q=80",
          alt: "Closeup of a mobile device showing a consent management interface.",
          width: 1600,
          height: 900,
          caption: "Mobile-first consent flows designed for end-user data control.",
        },
      ],
    },
    {
      title: "LeetBattle",
      slug: "leetbattle",
      techStack: [
        "Side Project",
        "Typescript",
        "TRPC",
        "Next.js",
        "TailwindCSS",
        "Prisma",
        "MySQL",
      ],
      description:
        "Competitive programming platform for students to practice and compete against each other.",
      logo: ConsultlyLogo,
    },
    {
      title: "Gatornetics",
      slug: "gatornetics",
      techStack: [
        "Team Lead",
        "Javascript",
        "Next.js",
        "TailwindCSS",
        "Docker",
        "MySQL",
        "Flask",
        "PyTorch",
      ],
      description: "College football analytics and prediction application.",
      logo: ConsultlyLogo,
    },
    {
      title: "ClimateSmart",
      slug: "climatesmart",
      techStack: [
        "Team Lead",
        "Javascript",
        "Next.js",
        "TailwindCSS",
        "Firebase",
      ],
      description:
        "Tool for students to interactively learn about climate change.",
      logo: ConsultlyLogo,
    },
    {
      title: "Motion Based Tetris",
      slug: "motion-based-tetris",
      techStack: [
        "Team Lead",
        "Python",
        "Mediapipe",
        "Opencv",
        "Pygame",
        "Tensorflow",
      ],
      description:
        "Tetris implementation using real-time hand tracking and gesture recognition.",
      logo: CDGOLogo,
      link: {
        label: "Motion Based Tetris",
        href: "https://github.com/k-finken/Motion-Based-Tetris/tree/main",
      },
      gallery: [
        {
          type: "video",
          embedUrl: "https://www.youtube.com/embed/Tn6-PIqc4UM",
          title: "Motion Based Tetris demo",
          caption:
            "Demo of the gesture-controlled gameplay loop used during our project showcase.",
        },
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
          alt: "Developer testing motion controls in front of a monitor displaying Tetris.",
          width: 1600,
          height: 900,
          caption: "Fine-tuning Mediapipe gesture recognition for reliable block placement.",
        },
      ],
    },
  ],
};
