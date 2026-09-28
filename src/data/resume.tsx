import { Icons } from "@/components/icons";
import {
  HomeIcon, NotebookIcon,
} from "lucide-react";
import type { ReactNode } from "react";

// Kept only so the template's Hackathons section still type-checks.
// You can delete this type + the section in app/page.tsx if you don't want it.
type Hackathon = {
  title: string;
  dates: string;
  location: string;
  description: string;
  image: string;
  mlh?: string;
  win?: string;
  links: readonly { title: string; icon: ReactNode; href: string }[];
};

export const DATA = {
  name: "Niraj Salunke",
  initials: "NS",
  url: "https://your-domain.com",
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/pune",
  description:
    "Software Engineer building scalable backends and AI-powered products. Final-year Computer Engineering student at PICT, Pune.",
  summary:
    "I'm a final-year Computer Engineering student at [Pune Institute of Computer Technology](/#education) with a 9.55 CGPA. I've interned at [BNY Mellon and Valnee Solutions](/#work), where I built ETL pipelines, microservices, a configuration-driven charge-calculation engine, and analytics APIs. Outside of work I build products like [ReachSaga AI and EchoEd AI](/#projects), and I practice problem solving on CodeChef and LeetCode.",
  avatarUrl: "/me.jpg",
  skills: [

    { name: "Python", skillicon: "py" },
    { name: "C++", skillicon: "cpp" },
    { name: "Java", skillicon: "java" },
    { name: "Go", skillicon: "go" },
    { name: "TypeScript", skillicon: "ts" },
    { name: "JavaScript", skillicon: "js" },
    { name: "SQL", skillicon: "mysql" },

    { name: "React", skillicon: "react" },
    { name: "Next.js", skillicon: "nextjs" },
    { name: "Vercel", skillicon: "vercel" },

    { name: "Node.js", skillicon: "nodejs" },
    { name: "FastAPI", skillicon: "fastapi" },
    { name: "Hono", customIcon: "https://hono.dev/images/logo.svg" },
    { name: "Gin", skillicon: "go" },
    { name: "Celery", skillicon: "redis" },
    { name: "Postgres", skillicon: "postgres" },
    { name: "MongoDB", skillicon: "mongodb" },
    { name: "Supabase", skillicon: "supabase" },
    { name: "Redis", skillicon: "redis" },
    { name: "AWS", skillicon: "aws" },
    { name: "GCP", skillicon: "gcp" },
    { name: "Azure", skillicon: "azure" },
    { name: "Docker", skillicon: "docker" },
    { name: "Snowflake", customIcon: "/snowflake.png" },
    { name: "GitHub Actions", skillicon: "githubactions" },
    { name: "Git", skillicon: "git" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "nirajsalunke07@gmail.com",
    tel: "+919112358704",
    social: {

      GitHub: {
        name: "GitHub",
        url: "https://github.com/NirajSalunke",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://in.linkedin.com/in/niraj-salunke-6233b8284",
        icon: Icons.linkedin,
        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/ctrl_alt_neeraj/",
        icon: Icons.leetcode,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:ctrlaltniraj@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "BNY Mellon",
      href: "https://www.bny.com",
      badges: [],
      location: "Pune, India",
      title: "SDE Intern",
      logoUrl: "/bny.svg",
      start: "Jun 2026",
      end: "Aug 2026",
      description:
        "Worked with on-premises Eliza AI legacy services to build ETL pipelines that extracted, normalized, and loaded trade-finance document data into a database for processing. Designed a microservice that accepts a keyword and a document and returns precise coordinate locations (with optional contextual parameters) so accurate field coordinates can be delivered to other services. Built a configuration-driven charge-calculation engine supporting 10+ scenarios, letting new business rules ship without code changes and cutting turnaround for new scenarios from a few days to a few hours. Validated features across Dev, Test, UAT, and Production environments, catching defects before release and contributing to zero critical post-release bugs across 2 releases. Stack: Spring Boot, Angular, Google App Engine, Snowflake, Splunk, Jira, Confluence.",
    },
    {
      company: "Valnee Solutions LLP",
      href: "https://valnee.com",
      badges: [],
      location: "Remote",
      title: "SDE Intern",
      logoUrl: "/valnee.png",
      start: "Jan 2026",
      end: "Apr 2026",
      description:
        "Worked primarily on ReachSaga, an SEO platform that analyzes website content and recommends optimization opportunities to improve organic visibility and AEO. Built SignalMint dashboard components and backend APIs that summarize large datasets into chart-ready metrics, adding caching and performance optimizations to significantly reduce latency for analytics queries. Stack: Turborepo, Next.js, Hono, Celery, FastAPI, Azure, GCP.",
    },
  ],
  education: [
    {
      school: "SCTR's Pune Institute of Computer Technology",
      href: "https://pict.edu",
      degree: "B.E. Computer Engineering (9.55 CGPA)",
      logoUrl: "/pict.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Pratibha College, Pune",
      href: "https://pjc.org.in",
      degree: "12th HSC",
      logoUrl: "/pratibha.png",
      start: "2021",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "ReachSaga AI",
      href: "https://reachsaga.com/",
      dates: "Jan 2026 - Apr 2026",
      active: true,
      description:
        "An SEO platform that analyzes website content and recommends optimization opportunities to improve organic visibility and AEO. Designed and implemented a cost-optimized keyword-analysis pipeline that extracts keywords from websites while minimizing dependence on third-party APIs, and introduced an opportunity score to prioritize SEO enrichment tasks. Owned the Backlink feature: integrated Gmail-based outreach with Pub/Sub-driven bulk emailing (6+ templates), with retries, DLQs, request-tracking and audit history for reliable backlink campaigns.",
      technologies: [
        "Next.js",
        "Turborepo",
        "Hono",
        "GCP",
        "Supabase",
        "Upstash (Redis)",
      ],
      links: [
        {
          type: "Website",
          href: "https://reachsaga.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/reachsaga.png",
      video: "https://storage.googleapis.com/saga-media-prod/landing_page_videos/keywordIntelligence.mp4",
    },
    {
      title: "EchoEd AI: Multilingual Integration Platform",
      href: "https://github.com/NirajSalunke/EchoEd_AI",
      dates: "2025",
      active: true,
      description:
        "Designed the system flow and high-level architecture for the product. Published as an NPM package that ships a ready-to-drop chat widget for any React site: configurable, embeddable, and supporting multilingual text and voice queries with source-backed responses. Includes a full admin dashboard for campuses to upload and manage PDFs and documents, publish circulars and notices, monitor interaction analytics, and escalate queries to staff.",
      technologies: ["Next.js", "ThreeJs", "MongoDB", "Vercel", "GCP", "Redis", "FastAPI"],
      links: [
        {
          type: "Source",
          href: "https://github.com/NirajSalunke/EchoEd_AI",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://echoai-inky.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/echo.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Magnitude 1.0 Hackathon 2025",
      dates: "2025",
      location: "Pune, India",
      description:
        "Built MediTrack AI in a 24-hour hackathon, with the problem statement released just an hour before coding began: a Hospital Readmission Risk Prediction Model. Nurses and staff enter patient data and required resources at admission and discharge, and after discharge an ML model predicts the likelihood of readmission. Hospital admins see flagged patients on a dashboard, along with details like the treating doctor and required resources, so the hospital is ready and avoids panic in emergencies. Deployed as a fully functional solution, with the frontend and Node.js backend on Vercel and the Flask ML service exposed through ngrok. Selected for the Grand Finale and made it to the Top 7 teams after pitching.",
      image: "/magnitude.png",
      win: "Top 7 Finalist",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/NirajSalunke/magApp",
        },
      ],
    },
  ] as Hackathon[],
} as const;