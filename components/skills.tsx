"use client";

import {
  ArrowUpRight,
  Bot,
  Cloud,
  Code2,
  Database,
  Globe,
  Layers3,
  Server,
  Smartphone,
  Sparkles,
  Wrench,
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      number: "01",
      category: "Programming",
      icon: Code2,
      description:
        "Strong foundation in object-oriented programming, scripting, and enterprise development.",
      skills: [
        "Java",
        "J2EE",
        "C",
        "C++",
        "C#",
        "Python",
        "JavaScript",
        "PHP",
        "PL/SQL",
        ".NET",
      ],
    },

    {
      number: "02",
      category: "Web Engineering",
      icon: Globe,
      description:
        "Building modern, scalable web applications across frontend, backend, and API layers.",
      skills: [
        "Angular",
        "ReactJS",
        "MERN Stack",
        "Spring Boot",
        "NestJS",
        "Laravel",
        "REST APIs",
      ],
    },

    {
      number: "03",
      category: "Mobile Development",
      icon: Smartphone,
      description:
        "Creating cross-platform and native mobile experiences with modern development tools.",
      skills: [
        "Flutter",
        "Dart",
        "Android",
        "Android Studio",
        "Firebase",
      ],
    },

    {
      number: "04",
      category: "Data & Distributed Systems",
      icon: Database,
      description:
        "Working with relational databases, distributed data processing, and big data ecosystems.",
      skills: [
        "MySQL",
        "PostgreSQL",
        "Hadoop",
        "HDFS",
        "Hive",
        "MapReduce",
        "Sqoop",
        "Spark",
        "Kafka",
      ],
    },

    {
      number: "05",
      category: "Cloud & Infrastructure",
      icon: Cloud,
      description:
        "Understanding modern infrastructure, containerization, cloud platforms, and Linux environments.",
      skills: [
        "Linux",
        "Bash",
        "Docker",
        "Microsoft Azure",
        "Virtualization",
      ],
    },

    {
      number: "06",
      category: "Engineering Tools",
      icon: Wrench,
      description:
        "Using professional tools and collaborative practices throughout the software development lifecycle.",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Eclipse",
        "Postman",
        "Swagger",
        "Jira",
        "UML",
        "Scrum",
      ],
    },

    {
      number: "07",
      category: "AI & Automation",
      icon: Bot,
      description:
        "Exploring intelligent systems, workflow automation, AI integration, and emerging technologies.",
      skills: [
        "Ollama",
        "MCP",
        "n8n",
        "Selenium",
        "AI Integration",
      ],
    },
  ];

  const coreStack = [
    "Angular",
    "Spring Boot",
    "Node.js",
    "Flutter",
    "MySQL",
    "PostgreSQL",
    "Docker",
    "AI Integration",
  ];

  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        py-32
        bg-background
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

        {/* Glow */}

        <div
          className="
            absolute
            top-[-10%]
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
            bottom-[-10%]
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
                03
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
                Technical skills
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
              The Stack
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
                Behind The Work.
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
              A versatile technical toolkit spanning software engineering,
              web and mobile development, cloud infrastructure, data systems,
              and intelligent automation.
            </p>
          </div>
        </div>

        {/* ======================================================= */}
        {/* CORE STACK */}
        {/* ======================================================= */}

        <div
          className="
            relative
            mb-24
            rounded-3xl
            border
            border-primary/20
            bg-primary/[0.025]
            overflow-hidden
          "
        >
          {/* Accent line */}

          <div
            className="
              absolute
              top-0
              left-0
              w-full
              h-px
              bg-gradient-to-r
              from-transparent
              via-primary
              to-transparent
            "
          />

          <div
            className="
              p-7
              sm:p-10
              lg:p-12
            "
          >
            <div
              className="
                flex
                flex-col
                lg:flex-row
                lg:items-center
                justify-between
                gap-10
              "
            >
              {/* Label */}

              <div className="flex items-start gap-5">
                <div
                  className="
                    flex
                    items-center
                    justify-center
                    w-12
                    h-12
                    rounded-xl
                    bg-primary/10
                    text-primary
                  "
                >
                  <Layers3 size={22} />
                </div>

                <div>
                  <span
                    className="
                      text-xs
                      uppercase
                      tracking-[0.25em]
                      text-primary
                    "
                  >
                    Core Stack
                  </span>

                  <h3
                    className="
                      mt-2
                      text-xl
                      sm:text-2xl
                      font-semibold
                      text-foreground
                    "
                  >
                    Technologies I build with most.
                  </h3>
                </div>
              </div>

              {/* Technologies */}

              <div
                className="
                  flex
                  flex-wrap
                  gap-2
                  lg:max-w-2xl
                  lg:justify-end
                "
              >
                {coreStack.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-4
                      py-2
                      rounded-full
                      border
                      border-primary/20
                      bg-primary/5
                      text-sm
                      text-foreground
                      hover:border-primary/50
                      hover:bg-primary/10
                      transition-all
                      duration-300
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================= */}
        {/* SKILLS LIST */}
        {/* ======================================================= */}

        <div
          className="
            border-t
            border-border
          "
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.number}
                className="
                  group
                  relative
                  grid
                  lg:grid-cols-12
                  gap-8
                  lg:gap-12
                  py-10
                  lg:py-12
                  border-b
                  border-border
                  transition-all
                  duration-500
                  hover:bg-card/20
                "
              >
                {/* ================================================= */}
                {/* NUMBER + ICON */}
                {/* ================================================= */}

                <div
                  className="
                    lg:col-span-2
                    flex
                    items-start
                    justify-between
                    lg:justify-start
                    gap-5
                  "
                >
                  <span
                    className="
                      text-xs
                      font-mono
                      tracking-wider
                      text-primary
                    "
                  >
                    {category.number}
                  </span>

                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      w-10
                      h-10
                      rounded-xl
                      border
                      border-border
                      text-muted
                      group-hover:text-primary
                      group-hover:border-primary/40
                      group-hover:rotate-3
                      transition-all
                      duration-300
                    "
                  >
                    <Icon size={19} />
                  </div>
                </div>

                {/* ================================================= */}
                {/* CATEGORY INFO */}
                {/* ================================================= */}

                <div className="lg:col-span-4">
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
                    {category.category}
                  </h3>

                  <p
                    className="
                      mt-4
                      max-w-md
                      text-sm
                      leading-relaxed
                      text-muted
                    "
                  >
                    {category.description}
                  </p>
                </div>

                {/* ================================================= */}
                {/* TECHNOLOGIES */}
                {/* ================================================= */}

                <div
                  className="
                    lg:col-span-6
                    flex
                    flex-wrap
                    content-start
                    gap-2
                  "
                >
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        inline-flex
                        items-center
                        px-3
                        py-2
                        rounded-full
                        border
                        border-border
                        bg-card/30
                        text-xs
                        sm:text-sm
                        text-muted
                        hover:text-foreground
                        hover:border-primary/40
                        hover:bg-primary/5
                        transition-all
                        duration-300
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Hover line */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-0
                    h-px
                    bg-primary
                    group-hover:w-full
                    transition-all
                    duration-700
                  "
                />
              </div>
            );
          })}
        </div>

        {/* ======================================================= */}
        {/* BOTTOM TECHNICAL STATEMENT */}
        {/* ======================================================= */}

        <div
          className="
            mt-24
            grid
            lg:grid-cols-12
            gap-10
            items-center
          "
        >
          {/* Statement */}

          <div className="lg:col-span-7">
            <div className="flex items-start gap-5">
              {/* <Sparkles
                size={20}
                className="
                  mt-1
                  flex-shrink-0
                  text-primary
                "
              /> */}

              <p
                className="
                  text-xl
                  sm:text-2xl
                  leading-relaxed
                  tracking-tight
                  text-foreground
                "
              >
                The goal is not to use every technology —
                <span className="text-primary">
                  {" "}
                  it is to choose the right one for the problem.
                </span>
              </p>
            </div>
          </div>

          {/* Technical Domains */}

          <div
            className="
              lg:col-span-5
              flex
              flex-wrap
              gap-3
              lg:justify-end
            "
          >
            {[
              {
                icon: Server,
                label: "Backend",
              },
              {
                icon: Globe,
                label: "Web",
              },
              {
                icon: Smartphone,
                label: "Mobile",
              },
              {
                icon: Database,
                label: "Data",
              },
              {
                icon: Cloud,
                label: "Cloud",
              },
              {
                icon: Bot,
                label: "AI",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="
                    flex
                    items-center
                    gap-2
                    px-3
                    py-2
                    rounded-full
                    border
                    border-border
                    text-xs
                    text-muted
                  "
                >
                  <Icon
                    size={13}
                    className="text-primary"
                  />

                  {item.label}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
