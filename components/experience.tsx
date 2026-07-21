"use client";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  Sparkles,
} from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      year: "2026",
      period: "FEB — JUN 2026",
      title: "Engineering Graduation Project",
      company: "Polytech",
      role: "Full Stack Developer Intern",
      description:
        "Built TechDoctor, a full-stack repair workshop management platform that digitizes customer service and repair workflows. Implemented customer and device management, repair tracking, invoicing, planning, QR code features, and AI-powered OCR for invoice processing.",
      skills: [
        "Angular",
        "Node.js",
        "Express.js",
        "Sequelize",
        "MySQL",
        "JWT",
        "AI Integration",
        "MCP",
        "n8n",
      ],
      // featured: true,
    },

    {
      year: "2025",
      period: "FEB — JUL 2025",
      title: "Master's Graduation Internship",
      company: "WeeCode",
      role: "Mobile Developer Intern",
      description:
        "Created a mobile application connecting students with volunteering opportunities. Implemented activity discovery, participation management, and community engagement features while delivering a responsive and user-friendly mobile experience.",
      skills: [
        "Flutter",
        "Dart",
        "Firebase",
        "Mobile Development",
        "UI/UX",
      ],
    },

    {
      year: "2025",
      period: "JUL 2025",
      title: "Engineering Training Internship",
      company: "Dhahri Alkubaissi Technologies",
      role: "Full Stack Developer Intern",
      description:
        "Worked on a collaborative task management platform designed to improve team organization and workflow monitoring. Contributed to database design, REST API development, backend logic, and task tracking features.",
      skills: [
        "Full Stack Development",
        "REST APIs",
        "Database Design",
        "Backend Development",
      ],
    },

    {
      year: "2023",
      period: "FEB — JUN 2023",
      title: "Bachelor's Graduation Internship",
      company: "Erathis-IT",
      role: "Web Developer Intern",
      description:
        "Developed an intelligent search engine using Elasticsearch to enhance data retrieval, improve search accuracy, and provide a faster and more efficient user experience.",
      skills: [
        "Elasticsearch",
        "Web Development",
        "Backend Development",
        "Search Optimization",
      ],
    },

    {
      year: "2022",
      period: "JAN 2022",
      title: "Training Internship",
      company: "Protech-it",
      role: "Web Development Intern",
      description:
        "Developed a web-based messaging application that enabled users to send and receive messages in real time. Implemented the messaging functionality using Angular and Firebase for data management and communication.",
      skills: [
        "Angular",
        "Firebase",
        "Web Development",
        "Real-Time Messaging",
      ],
    },

    {
      year: "2021",
      period: "AUG 2021",
      title: "Initiation Internship",
      company: "TakenTechs",
      role: "Web Development Intern",
      description:
        "Designed and developed a company website for TakenTechs, a software development company. Built the website interface using HTML, CSS, and JavaScript, focusing on creating a clean and visually appealing presentation of the company's services.",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Web Development",
        "UI Design",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        py-32
        bg-card/20
      "
    >
      {/* ========================================================= */}
      {/* BACKGROUND */}
      {/* ========================================================= */}

      <div className="absolute inset-0 pointer-events-none">
        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        {/* Ambient glow */}

        <div
          className="
            absolute
            top-[10%]
            right-[-15%]
            w-[700px]
            h-[700px]
            rounded-full
            bg-primary/8
            blur-[160px]
          "
        />

        <div
          className="
            absolute
            bottom-[10%]
            left-[-15%]
            w-[600px]
            h-[600px]
            rounded-full
            bg-accent/5
            blur-[160px]
          "
        />
      </div>

      {/* ========================================================= */}
      {/* CONTAINER */}
      {/* ========================================================= */}

      <div
        className="
          relative
          z-10
          max-w-[1500px]
          mx-auto
          px-6
          lg:px-10
        "
      >
        {/* ======================================================= */}
        {/* HEADER */}
        {/* ======================================================= */}

        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-end
            justify-between
            gap-10
            mb-24
          "
        >
          {/* Left */}

          <div>
            <div
              className="
                flex
                items-center
                gap-4
                mb-8
              "
            >
              <span
                className="
                  text-xs
                  font-mono
                  tracking-[0.3em]
                  text-primary
                "
              >
                02
              </span>

              <div className="h-px w-16 bg-border" />

              <span
                className="
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-muted
                "
              >
                Career Journey
              </span>
            </div>

            <h2
              className="
                text-[clamp(2rem,5vw,5rem)]
                font-bold
                leading-[0.85]
                tracking-[-0.06em]
                text-foreground
              "
            >
              Experience
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
                In Motion.
              </span>
            </h2>
          </div>

          {/* Right */}

          <div className="max-w-md lg:mb-2">
            <p
              className="
                text-base
                sm:text-lg
                text-muted
                leading-relaxed
              "
            >
              A journey through software engineering, from early web
              development experiments to building full-stack, mobile, and
              AI-powered digital products.
            </p>
          </div>
        </div>

        {/* ======================================================= */}
        {/* EXPERIENCE TIMELINE */}
        {/* ======================================================= */}

        <div className="relative">
          {/* Main timeline */}

          <div
            className="
              absolute
              left-[7px]
              top-0
              bottom-0
              w-px
              bg-gradient-to-b
              from-primary
              via-border
              to-transparent
            "
          />

          <div className="space-y-20">
            {experiences.map((experience, index) => (
              <div
                key={`${experience.company}-${experience.year}`}
                className="
                  relative
                  grid
                  lg:grid-cols-12
                  gap-8
                  lg:gap-12
                "
              >
                {/* ================================================= */}
                {/* TIMELINE NODE */}
                {/* ================================================= */}

                <div
                  className="
                    absolute
                    left-0
                    top-2
                    flex
                    items-center
                    justify-center
                    w-[15px]
                    h-[15px]
                    rounded-full
                    bg-background
                    border
                    border-primary
                    z-10
                  "
                >
                  <span
                    className="
                      w-[5px]
                      h-[5px]
                      rounded-full
                      bg-primary
                    "
                  />
                </div>

                {/* ================================================= */}
                {/* YEAR */}
                {/* ================================================= */}

                <div
                  className="
                    lg:col-span-2
                    pl-10
                    lg:pl-12
                  "
                >
                  <span
                    className="
                      block
                      text-5xl
                      sm:text-6xl
                      lg:text-7xl
                      font-bold
                      tracking-[-0.06em]
                      text-foreground/10
                      select-none
                    "
                  >
                    {experience.year}
                  </span>

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      mt-3
                      text-xs
                      font-mono
                      tracking-wider
                      text-muted
                    "
                  >
                    <CalendarDays size={13} />

                    {experience.period}
                  </div>
                </div>

                {/* ================================================= */}
                {/* EXPERIENCE CONTENT */}
                {/* ================================================= */}

                <div
                  className={`
                    lg:col-span-10
                    group
                    relative
                    rounded-2xl
                    border
                    ${
                      experience.featured
                        ? "border-primary/40 bg-primary/[0.035]"
                        : "border-border bg-background/40"
                    }
                    backdrop-blur-sm
                    p-7
                    sm:p-9
                    transition-all
                    duration-500
                    hover:border-primary/50
                    hover:-translate-y-1
                  `}
                >
                  {/* Featured indicator */}

                  {experience.featured && (
                    <div
                      className="
                        absolute
                        top-0
                        right-0
                        flex
                        items-center
                        gap-2
                        px-4
                        py-2
                        rounded-bl-xl
                        rounded-tr-2xl
                        bg-primary/10
                        border-l
                        border-b
                        border-primary/20
                      "
                    >
                      {/* <Sparkles
                        size={13}
                        className="text-primary"
                      /> */}

                      <span
                        className="
                          text-[10px]
                          uppercase
                          tracking-[0.2em]
                          text-primary
                        "
                      >
                        Featured Project
                      </span>
                    </div>
                  )}

                  {/* Top Content */}

                  <div
                    className="
                      flex
                      flex-col
                      md:flex-row
                      md:items-start
                      justify-between
                      gap-6
                      mb-7
                    "
                  >
                    <div>
                      <div
                        className="
                          flex
                          items-center
                          gap-3
                          mb-3
                        "
                      >
                        <BriefcaseBusiness
                          size={17}
                          className="text-primary"
                        />

                        <span
                          className="
                            text-sm
                            font-medium
                            text-primary
                          "
                        >
                          {experience.company}
                        </span>
                      </div>

                      <h3
                        className="
                          text-2xl
                          sm:text-3xl
                          font-semibold
                          tracking-tight
                          text-foreground
                          group-hover:text-primary
                          transition-colors
                          duration-300
                        "
                      >
                        {experience.role}
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          text-muted
                        "
                      >
                        {experience.title}
                      </p>
                    </div>

                    {/* <div
                      className="
                        hidden
                        md:flex
                        items-center
                        justify-center
                        w-10
                        h-10
                        rounded-full
                        border
                        border-border
                        text-muted
                        group-hover:border-primary/40
                        group-hover:text-primary
                        transition-all
                        duration-300
                      "
                    >
                      <ArrowUpRight size={18} />
                    </div> */}
                  </div>

                  {/* Description */}

                  <div
                    className="
                      max-w-4xl
                      border-t
                      border-border/70
                      pt-6
                    "
                  >
                    <p
                      className="
                        text-sm
                        sm:text-base
                        leading-relaxed
                        text-muted
                      "
                    >
                      {experience.description}
                    </p>
                  </div>

                  {/* Skills */}

                  <div
                    className="
                      flex
                      flex-wrap
                      gap-2
                      mt-7
                    "
                  >
                    {experience.skills.map(
                      (skill) => (
                        <span
                          key={skill}
                          className="
                            inline-flex
                            items-center
                            gap-2
                            px-3
                            py-1.5
                            rounded-full
                            border
                            border-border
                            bg-card/40
                            text-xs
                            text-muted
                            transition-all
                            duration-300
                            group-hover:border-primary/20
                            group-hover:text-foreground
                          "
                        >
                          <Code2
                            size={11}
                            className="text-primary"
                          />

                          {skill}
                        </span>
                      )
                    )}
                  </div>

                  {/* Hover accent */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-8
                      right-8
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-primary
                      to-transparent
                      opacity-0
                      group-hover:opacity-60
                      transition-opacity
                      duration-500
                    "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================= */}
        {/* BOTTOM STATEMENT */}
        {/* ======================================================= */}

        <div
          className="
            mt-28
            pt-10
            border-t
            border-border
            flex
            flex-col
            sm:flex-row
            sm:items-center
            justify-between
            gap-6
          "
        >
          <div className="flex items-center gap-3">
            <span
              className="
                flex
                items-center
                justify-center
                w-9
                h-9
                rounded-full
                bg-primary/10
                text-primary
              "
            >
              <Code2 size={17} />
            </span>

            <span className="text-sm text-muted">
              From first lines of code to production-ready systems.
            </span>
          </div>

          <span
            className="
              text-xs
              uppercase
              tracking-[0.25em]
              text-primary
            "
          >
            Always building
          </span>
        </div>
      </div>
    </section>
  );
}
