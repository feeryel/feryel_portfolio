"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      number: "01",
      title: "TechDoctor",
      category: "FULL STACK · AI",
      type: "Engineering Graduation Project",
      description:
        "An intelligent repair workshop management platform designed to digitize customer service and repair operations. The platform combines full-stack architecture, AI-powered invoice processing, QR code features, workflow automation, and intelligent assistance.",
      tech: [
        "Angular",
        "Node.js",
        "Express.js",
        "Sequelize",
        "MySQL",
        "AI",
        "MCP",
        "n8n",
      ],
      image: "/login_interface.png",
      // featured: true,
    },

    {
      number: "02",
      title: "EcoMinds",
      category: "MOBILE · SOCIAL IMPACT",
      type: "Master's Graduation Project",
      description:
        "A mobile platform connecting students with volunteering opportunities. The application enables users to discover activities, participate in community initiatives, and engage with meaningful social experiences.",
      tech: [
        "Flutter",
        "Dart",
        "Firebase",
        "Mobile Development",
        "UI/UX",
      ],
      image: "/login_mobilee.png",
      featured: false,
    },

    {
      number: "03",
      title: "Collaborative Task Platform",
      category: "FULL STACK",
      type: "Engineering Internship Project",
      description:
        "A collaborative project and task management platform built to improve team organization and workflow visibility. Includes secure authentication, project management, task tracking, tagging, filtering, and user profile management.",
      tech: [
        "Angular",
        "NestJS",
        "PostgreSQL",
        "TypeORM",
        "JWT",
      ],
      image: "/qartis_tech2.png",
      featured: false,
    },

    {
      number: "04",
      title: "Recipe Management",
      category: "WEB APPLICATION",
      type: "Personal Project",
      description:
        "A modern recipe management platform allowing authenticated users to create, discover, update, and manage cooking recipes through a secure and responsive web experience.",
      tech: [
        "Angular",
        "TypeScript",
        "REST API",
        "JWT",
        "CRUD",
      ],
      image: "/pagelogin_front.png",
      featured: false,
    },

    {
      number: "05",
      title: "Opportuna",
      category: "WEB APPLICATION",
      type: "Recruitment Platform",
      description:
        "A recruitment platform designed to connect job seekers with employers through structured job listings, candidate applications, and recruitment management workflows.",
      tech: [
        "Laravel",
        "PHP",
        "MySQL",
        "Laragon",
      ],
      image: "/logo.png",
      featured: false,
    },

    {
      number: "06",
      title: "Real-Time Messaging",
      category: "WEB · REAL-TIME",
      type: "Training Internship Project",
      description:
        "A web-based messaging application enabling users to communicate through real-time message exchange. Built with a focus on responsive interactions and cloud-based data management.",
      tech: [
        "Angular",
        "Firebase",
        "Real-Time",
        "Web Development",
      ],
      image: "/hero-bg.png",
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        bg-background
        py-32
      "
    >
      {/* ===================================================== */}
      {/* BACKGROUND */}
      {/* ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -top-40
            -right-40
            h-[600px]
            w-[600px]
            rounded-full
            bg-primary/10
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            top-1/2
            -left-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-accent/10
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />
      </div>

      {/* ===================================================== */}
      {/* MAIN CONTAINER */}
      {/* ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1500px]
          px-6
          lg:px-10
        "
      >
        {/* ===================================================== */}
        {/* HEADER */}
        {/* ===================================================== */}

        <div className="mb-20 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="mb-6 flex items-center gap-4">
              <span className="font-mono text-xs tracking-[0.3em] text-primary">
                04
              </span>

              <div className="h-px w-16 bg-primary/40" />

              <span className="text-xs uppercase tracking-[0.25em] text-muted">
                Selected Work
              </span>
            </div>

        <h2
  className="
    text-[clamp(2rem,5vw,5rem)]
    font-bold
    leading-[0.95]
    tracking-[-0.05em]
    text-foreground
  "
>
  Things I&apos;ve
  <br />

  <span
    className="
      bg-gradient-to-r
      from-primary
      via-accent
      to-primary
      bg-clip-text
      text-transparent
    "
  >
    built.
  </span>
</h2>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <p className="max-w-md text-base leading-relaxed text-muted sm:text-lg">
              A collection of software products, engineering projects, and
              digital experiences built across web, mobile, full-stack
              development, and AI-powered systems.
            </p>
          </div>
        </div>

        {/* ===================================================== */}
        {/* PROJECTS */}
        {/* ===================================================== */}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.number}
              className="
                group
                relative
                flex
                h-full
                min-h-[620px]
                flex-col
                overflow-hidden
                rounded-[28px]
                border
                border-border
                bg-card/30
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-primary/50
                hover:shadow-2xl
                hover:shadow-primary/10
              "
            >
              {/* ================================================= */}
              {/* IMAGE */}
              {/* ================================================= */}

              <div className="relative h-[280px] shrink-0 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-110
                  "
                />

                {/* Dark Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-background
                    via-background/20
                    to-transparent
                  "
                />

                {/* Hover Glow */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-primary/10
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Project Number */}

                <div className="absolute left-5 top-5">
                  <div
                    className="
                      rounded-full
                      border
                      border-white/20
                      bg-background/70
                      px-3
                      py-1.5
                      font-mono
                      text-xs
                      text-white
                      backdrop-blur-xl
                    "
                  >
                    {project.number} / 06
                  </div>
                </div>

                {/* Featured Badge */}

                {project.featured && (
                  <div className="absolute right-5 top-5">
                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-primary/40
                        bg-primary/20
                        px-3
                        py-1.5
                        text-xs
                        font-medium
                        text-primary
                        backdrop-blur-xl
                      "
                    >
                      <Sparkles size={13} />
                      Featured
                    </div>
                  </div>
                )}

                {/* Arrow */}

                {/* <div
                  className="
                    absolute
                    bottom-5
                    right-5
                    flex
                    h-11
                    w-11
                    translate-y-3
                    items-center
                    justify-center
                    rounded-full
                    bg-foreground
                    text-background
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  <ArrowUpRight size={20} />
                </div> */}
              </div>

              {/* ================================================= */}
              {/* CONTENT */}
              {/* ================================================= */}

              <div className="flex flex-1 flex-col p-7">
                {/* Category */}

                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-6 bg-primary" />

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                      text-primary
                    "
                  >
                    {project.category}
                  </span>
                </div>

                {/* Title */}

                <h3
                  className="
                    text-2xl
                    font-bold
                    tracking-tight
                    text-foreground
                    transition-colors
                    duration-300
                    group-hover:text-primary
                  "
                >
                  {project.title}
                </h3>

                {/* Type */}

                <p className="mt-2 text-xs uppercase tracking-wider text-muted">
                  {project.type}
                </p>

                {/* Description */}

                <p
                  className="
                    mt-5
                    flex-1
                    text-sm
                    leading-7
                    text-muted
                  "
                >
                  {project.description}
                </p>

                {/* Divider */}

                <div className="my-6 h-px w-full bg-border" />

                {/* Technologies */}

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        border
                        border-border
                        bg-background/50
                        px-3
                        py-1.5
                        text-[11px]
                        font-medium
                        text-muted
                        transition-all
                        duration-300
                        group-hover:border-primary/20
                        group-hover:text-foreground
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom Line */}

                <div className="mt-7 flex items-center justify-between">
                  {/* <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    View case study
                  </span> */}

                  {/* <div
                    className="
                      h-px
                      w-10
                      bg-border
                      transition-all
                      duration-500
                      group-hover:w-20
                      group-hover:bg-primary
                    "
                  /> */}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ===================================================== */}
        {/* BOTTOM CTA */}
        {/* ===================================================== */}

        <div
          className="
            mt-24
            flex
            flex-col
            items-center
            justify-between
            gap-6
            border-t
            border-border
            pt-8
            sm:flex-row
          "
        >
          <div>
            <p className="text-sm text-muted">
              Interested in collaborating?
            </p>

            <p className="mt-1 text-lg font-medium text-foreground">
              Let&apos;s build something meaningful.
            </p>
          </div>

          <a
            href="#contact"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-border
              px-6
              py-3
              text-sm
              font-medium
              text-foreground
              transition-all
              duration-300
              hover:border-primary
              hover:bg-primary
              hover:text-primary-foreground
            "
          >
            Start a conversation

            <ArrowUpRight
              size={17}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </a>
        </div>
      </div>
    </section>
  );
}