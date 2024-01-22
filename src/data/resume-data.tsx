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
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Kyle Finken",
  initials: "KF",
  location: "Tampa, Florida, USA",
  about:
    "Recent graduate obsessed with solving problems with software. Currently looking for a full-time position as a Software Engineer.",
  summary:
    "Hey! I'm Kyle Finken, a Computer Engineering graduate from the University of Florida. I have a burning passion for building innovative software solutions to tackle real-world challenges, and doing it quickly. I have extensive experience developing for the web and thrive in fast-paced agile work environments where I can wear a ton of hats and learn something new everyday. I'm actively seeking a new team where I can bring my skills to the table and make meaningful contributions. If you're interested in connecting or discussing potential opportunities don't hesitate to reach out!",
  avatarUrl: "https://media.licdn.com/dms/image/D4E03AQEctLtAYZ6QVQ/profile-displayphoto-shrink_800_800/0/1705878264072?e=1711584000&v=beta&t=kNOWyIFPfIGGJGQn52w5yXhWOBjOQwH9ooVVSBnn50Q",
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
      gpa: "3.8/4.0"
    },
  ],
  work: [
    {
      company: "DataBanc",
      link: "https://www.mydatabanc.com/",
      badges: [],
      title: "Full Stack SWE Intern",
      logo: ParabolLogo,
      start: "09/2022",
      end: "Current",
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
  languages: [
    "JavaScript",
    "TypeScript",
    "C++",
    "C#",
    "Java",
    "Python",
    "SQL",
  ],
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
      description: "Data privacy and security platform for consumers to control, use, and monetize their data.",
      logo: ConsultlyLogo,
      link: {
        label: "mydatabanc.com",
        href: "https://www.mydatabanc.com/",
      },
    },
    {
      title: "LeetBattle",
      techStack: [
        "Side Project",
        "Typescript",
        "TRPC",
        "Next.js",
        "TailwindCSS",
        "Prisma",
        "MySQL",
      ],
      description: "Competitive programming platform for students to practice and compete against each other.",
      logo: ConsultlyLogo,
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
      description: "Tool for students to interactively learn about climate change.",
      logo: ConsultlyLogo,
    },
    {
      title: "Motion Based Tetris",
      techStack: ["Team Lead", "Python", "Mediapipe", "Opencv", "Pygame", "Tensorflow"],
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
