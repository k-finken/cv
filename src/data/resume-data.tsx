import {
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Kyle Finken",
  initials: "KF",
  location: "Seattle, WA, USA",
  summary: `I graduated from the University of Florida in December, 2023 with my bachelors in Computer Engineering (3.8/4.0). 
            *I heavily prefer strongly typed languages (TS & Go are my personal favorites), I don't like TDD, I like to iterate very quickly (131 wpm monkeytype),
             and I love to cook for my loved ones.*`,
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
      description: `•*Rapid promotion to SWE II (~8 months)* recognized for outsized impact, and stellar execution.
                    •*Developer lead for Enhanced Analytics*, multi-quarter initiative to completely replace the legacy analytics product. *Built 64 new charts/displays*, e2e automated UI tests, onboarding/training documentation, detailed monitoring and session replay capabilities, and access control implementation.
                    •*Owned and scaled the Activity Capture service processing ~1.9M emails/wk & 4.3M events/wk*; cut p99 from ~4.5 min → 30s and p90 33s → 3s, remedied N+1s, and resolved customer support issues.`,
    },
    {
      company: "Clari",
      link: "https://www.clari.com/",
      badges: [],
      title: "Software Engineer 1",
      logo: ParabolLogo,
      start: "04/2024",
      end: "02/2025",
      description: `•Implemented Activity Summaries for the Groove extension, AI-generated high-level recaps of recent emails, calls, or opportunities *utilized weekly by ~20% of SDRs, Managers, and AEs*.
                   •Developed a unified Contact Capture system for Clari and Groove, implementing and architecting an internal resync API used by other internal teams to sync activities.
                   •*Host of Clari Tech Talks™* a forum for all Clari engineers where teams share project developments, discuss new technical developments, and showcase wins and challenges.`,
    },
    {
      company: "DataBanc",
      link: "https://databanc-dev.web.app/",
      badges: [],
      title: "Full Stack SWE Intern",
      logo: ParabolLogo,
      start: "09/2022",
      end: "03/2024",
      description: `•Quickly evolved from intern to a vital contributor, gaining trust and responsibility in key projects. *Worked directly with the CEO on technology, marketing, and strategy initiatives, which included conducting campus interviews and creating social campaign assets and demos*.
                    •Engineered comprehensive AI feature set, including embeddings and related infrastructure, using React, Langchain, PostgreSQL, and GCP. *Ultimately enabling users to have natural language conversations with their personal data*.
                    •Optimized existing Express.js REST APIs, *achieving 86% faster performance*, enhancing user experience, and reducing operational costs.`,
    },
    {
      company: "Publix Supermarkets",
      link: "https://www.publix.com/",
      badges: [],
      title: "Software Engineering Intern",
      logo: ClevertechLogo,
      start: "05/2022",
      end: "08/2022",
      description: `•Led the development and launch of trending searches, *attracting over 30,000 users on the first day*.
                    •Introduced API enhancements to promote selected products on search result pages with Vue.js and .NET, *boosting user search engagement by 10%.*`,
    },
    {
      company: "Publix Supermarkets",
      link: "https://www.publix.com/",
      badges: [],
      title: "Software Engineering Intern",
      logo: JojoMobileLogo,
      start: "05/2021",
      end: "08/2021",
      description: `•Revamped .NET APIs using C# to integrate advanced fallback search logic, *decreasing no-result landing pages by 64%*.
                     •Collaborated with the UX/UI team to expand the existing Storybook component explorer system.`,
    },
  ],
  languages: [
    "JavaScript",
    "TypeScript",
    "Ruby",
    "C++",
    "Golang",
    "HTML",
    "CSS",
    "Python",
    "SQL",
  ],
  skills: [
    "React/Next.js/Gatsby",
    "Ruby on Rails",
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
    "Heroku",
    "AWS",
    "Figma",
    "Supabase",
    "Firebase",
    "Docker",
    "Git",
    "GitHub",
    "Azure DevOps",
    "Postman",
    "Linux",
    "Storybook",
  ],
  projects: [
    {
      title: "DataBanc",
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
        href: "https://databanc-dev.web.app/",
      },
    },
    {
      title: "ListenLabs Berghain Challenge",
      techStack: ["Python"],
      description: `Finished in the top 1% (404 out of 45,000+ entries) of the Listen Labs coding challenge. Designed and 
implemented an efficient algorithm to optimize decision-making and meet rejection targets.`,
      logo: ConsultlyLogo,
      link: {
        label: "berghain.challenges.listenlabs.ai",
        href: "https://berghain.challenges.listenlabs.ai/",
      },
    },
    {
      title: "Poke MCP Challenge",
      techStack: ["Python", "FastMCP"],
      description: `Built todoist MCP agent to allow poke from interaction to interact with my todoist tasks.`,
      logo: ConsultlyLogo,
      link: {
        label: "interaction.co/HackMIT",
        href: "https://interaction.co/HackMIT",
      },
    },
    {
      title: "Gatornetics",
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
    },
  ],
} as const;
