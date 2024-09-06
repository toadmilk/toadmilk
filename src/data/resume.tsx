import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Benjamin Williams",
  initials: "BW",
  url: "https://benjaminwilliams.xyz",
  location: "Christchurch, New Zealand",
  locationLink: "https://www.google.com/maps/place/Christchurch",
  description:
    "Full-stack Software Engineer with a focus on frontend.",
  summary: "I’m a Christchurch-based developer with 8 years of experience in creating complex web apps and digital experiences. I’m passionate about innovation and aim to be part of a fun, forward-thinking team in the next 5 years.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Typescript",
    "Next.js",
    "TailwindCSS",
    "Prisma",
    "tRPC",
    "zod",
    "PostgreSQL",
    "Vue3",
    "Javascript",
    "GraphQL",
    "Scala",
    "Node.js",
    "Python",
    "MySQL",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "#", icon: CodeIcon, label: "Projects" },
  ],
  contact: {
    email: "benjaminwilliamswork6@gmail.com",
    tel: "+640223003281",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/toadmilk",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/benjamin-williams-bb5724274/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:" + "benjaminwilliamswork6@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "/resume.pdf",
        icon: Icons.file,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Fleetpin",
      href: "https://fleetpin.co.nz",
      badges: [],
      location: "Christchurch, New Zealand",
      title: "Software Engineer Intern",
      logoUrl: "/fleetpin.png",
      start: "Nov 2023",
      end: "Feb 2024",
      description: "Lead development on an internal stock management tool; reducing data entry time by over 93%, human input errors by 97%, and improving device \n" +
          "registration speed by 82%. Took significant ownership in frontend, navigating through vague user requirements and Figma designs with autonomy and initiative. Developed a CSV importer and a \"Pick and Provision\" interface, streamlining device management and data handling. Spearheaded API development, conducted automated integration tests and actively lead database schema refinement.",
      technologies: ["Vue3", "JavaScript", "Scala", "GraphQL", "PrimeVue", "MySQL"],
    },
  ],
  education: [
    {
      school: "University of Canterbury",
      href: "https://www.canterbury.ac.nz",
      degree: "Bachelor's Degree of Computer Science (BSC)",
      logoUrl: "/canterbury.png",
      start: "2021",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Midnight",
      href: "https://midnightai.vercel.app",
      dates: "Aug 2024 - Current",
      active: true,
      description: "Midnight is a ChatGPT wrapper that lets you chat with your documents, fine-tune the final script and effortlessly create short-form content.",
      technologies: [
        "React",
        "Typescript",
        "Next.js",
        "Prisma",
        "tRPC",
        "Stripe",
        "UploadThing",
        "OpenAI",
        "PostgreSQL",
        "TailwindCSS",
      ],
      image: "/midnight.png",
      video: "",
      links: [
        {
          type: "Website",
          href: "https://midnightai.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/toadmilk/midnight",
          icon: <Icons.github className="size-3"/>,
        }
      ],
    },
    {
      title: "Breaksphere",
      href: "https://breaksphere.vercel.app",
      dates: "Jul 2023 - Jul 2024",
      active: true,
      description:
        "BreakSphere is a Twitter-like platform for musicians.",
      technologies: [
        "React",
        "Typescript",
        "Next.js",
        "NextAuth.js",
        "Prisma",
        "tRPC",
        "UploadThing",
        "PostgreSQL",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://breaksphere.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/toadmilk/breaksphere",
          icon: <Icons.github className="size-3"/>,
        }
      ],
      image: "/breaksphere.png",
      video:
        "",
    },
    {
      title: "Semi Auto Township",
      href: "https://mod.io/g/melvoridle/m/semi-auto-township",
      dates: "Sep 2024 - Current",
      active: true,
      description: "Contributor for Semi Auto Township, a Quality of Life mod for Melvor Idle with nearly 80,000 downloads. The mod streamlines the township management process, automating tasks that many players find tedious.",
      technologies: [
        "Javascript",
        "Mod.io",
        "Melvor Idle",
      ],
      links: [
        {
          type: "Mod.io",
          href: "https://mod.io/g/melvoridle/m/semi-auto-township",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Mitchie151/semiautotownship",
          icon: <Icons.github className="size-3"/>,
        }
      ],
      image: "/semi-auto-township.png",
      video: "",
    },
    {
      title: "Pondering Reality",
      href: "https://www.youtube.com/watch?v=TGgnSuIuuqk",
      dates: "Jul 2022 - Sep 2022",
      active: true,
      description:
        "VR puzzle game experience where you play as a wizard who wishes to travel to the future to look at cat pictures.",
      technologies: [
        "Unity",
        "C#",
        "VR Game Design",
        "Mixed Reality Design",
      ],
      links: [
        {
          type: "Video",
          href: "https://www.youtube.com/watch?v=TGgnSuIuuqk",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "Itch.io",
          href: "https://mad-cow-kastor.itch.io/pondering-reality",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/pondering-reality.jpg",
      video: "",
    },
  ],
  testimonials: [
    {
      name: "Joe Sutton",
      initials: "JS",
      title: "Software Development Manager, Fleetpin",
      quote: "Ben was one of the first engineers to come through our Fleetpin intern programme. I remember interviewing Ben and he stood out specifically for his technical skills compared to the other five candidates. Over the 10 week internship he further surprised us and picked up one of our backend languages; Scala. As a engineer myself I can appreciate what a feat that was and simply put was over and beyond what we expected. Ben had a calm and fun approach to development and fitted in well with our software development team. If you are looking for graduate with great technical skills and potential, I would highly recommend Ben.",
      imageUrl: "/joe.png",
      href: "https://www.linkedin.com/in/joe-sutton-148b16117/",
    },
  ],
} as const;
