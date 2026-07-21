"use client";

import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  GraduationCap,
  Layers3,
  Sparkles,
} from "lucide-react";

export default function About() {
  const principles = [
    {
      number: "01",
      icon: Code2,
      title: "Engineering Mindset",
      description:
        "I approach software as an engineering discipline — combining clean architecture, maintainable code, and thoughtful technical decisions to build systems that last.",
    },
    {
      number: "02",
      icon: BrainCircuit,
      title: "Intelligent Solutions",
      description:
        "I explore AI, automation, and emerging technologies to transform complex processes into smarter, more efficient digital experiences.",
    },
    {
      number: "03",
      icon: Layers3,
      title: "Full-Stack Perspective",
      description:
        "From interfaces to APIs and databases, I enjoy understanding the complete picture and building reliable products across the entire stack.",
    },
  ];

  return (
    <section
      id="about"
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

        {/* Ambient Glow */}

        <div
          className="
            absolute
            top-[-20%]
            right-[-15%]
            w-[700px]
            h-[700px]
            rounded-full
            bg-primary/10
            blur-[160px]
          "
        />

        <div
          className="
            absolute
            bottom-[-20%]
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
      {/* MAIN CONTAINER */}
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
        {/* SECTION HEADER */}
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
                01
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
                Engineering Profile
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
              Beyond
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
                The Code.
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
              Software engineering is more than writing code. It is about
              understanding problems, designing meaningful solutions, and
              turning ideas into digital products that make an impact.
            </p>
          </div>
        </div>

        {/* ======================================================= */}
        {/* INTRODUCTION */}
        {/* ======================================================= */}

        <div
          className="
            grid
            lg:grid-cols-12
            gap-12
            lg:gap-20
            mb-32
          "
        >
          {/* Large Statement */}

          <div className="lg:col-span-7">
            <div
              className="
                border-l
                border-primary/40
                pl-6
                lg:pl-10
              "
            >
              <p
                className="
                  text-2xl
                  sm:text-3xl
                  lg:text-4xl
                  leading-[1.25]
                  tracking-tight
                  text-foreground
                "
              >
                I am a{" "}
                <span className="text-primary">
                  Software Engineer
                </span>{" "}
                passionate about building modern web and mobile applications,
                intelligent systems, and scalable digital experiences.
              </p>
            </div>
          </div>

          {/* Academic Profile */}

          <div
            className="
              lg:col-span-5
              flex
              flex-col
              justify-end
            "
          >
            <div
              className="
                relative
                rounded-2xl
                border
                border-border
                bg-card/30
                backdrop-blur-sm
                p-7
                overflow-hidden
                group
                hover:border-primary/40
                transition-all
                duration-500
              "
            >
              {/* Top Line */}

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
                  opacity-50
                "
              />

              <div
                className="
                  flex
                  items-start
                  justify-between
                  gap-6
                "
              >
                <div className="flex gap-4">
                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      w-11
                      h-11
                      rounded-xl
                      bg-primary/10
                      text-primary
                    "
                  >
                    <GraduationCap size={21} />
                  </div>

                  <div>
                    <span
                      className="
                        text-xs
                        uppercase
                        tracking-[0.2em]
                        text-muted
                      "
                    >
                      Academic Background
                    </span>

                    <h3
                      className="
                        mt-2
                        text-lg
                        font-semibold
                        text-foreground
                      "
                    >
                      Software Engineering
                    </h3>

                    <p
                      className="
                        mt-1
                        text-sm
                        text-muted
                      "
                    >
                      Engineering Degree · Master's in Mobile Development
                    </p>
                  </div>
                </div>

                {/* <ArrowUpRight
                  size={20}
                  className="
                    text-muted
                    group-hover:text-primary
                    transition-colors
                  "
                /> */}
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================= */}
        {/* PRINCIPLES */}
        {/* ======================================================= */}

        <div className="mb-16">
          <div
            className="
              flex
              items-center
              gap-4
            "
          >
            {/* <Sparkles
              size={17}
              className="text-primary"
            /> */}

            <span
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-muted
              "
            >
              How I approach engineering
            </span>
          </div>
        </div>

        {/* ======================================================= */}
        {/* PRINCIPLE CARDS */}
        {/* ======================================================= */}

        <div
          className="
            grid
            md:grid-cols-3
            border-t
            border-border
          "
        >
          {principles.map(
            (item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="
                    group
                    relative
                    py-10
                    md:px-8
                    md:first:pl-0
                    md:last:pr-0
                    border-b
                    md:border-b-0
                    md:border-r
                    last:border-r-0
                    border-border
                    hover:bg-card/20
                    transition-all
                    duration-500
                  "
                >
                  {/* Number */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      mb-10
                    "
                  >
                    <span
                      className="
                        text-xs
                        font-mono
                        text-primary
                      "
                    >
                      {item.number}
                    </span>

                    <Icon
                      size={20}
                      className="
                        text-muted
                        group-hover:text-primary
                        group-hover:scale-110
                        transition-all
                        duration-300
                      "
                    />
                  </div>

                  {/* Title */}

                  <h3
                    className="
                      text-xl
                      font-semibold
                      text-foreground
                      mb-4
                      group-hover:text-primary
                      transition-colors
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      text-sm
                      text-muted
                      leading-relaxed
                      max-w-sm
                    "
                  >
                    {item.description}
                  </p>

                  {/* Bottom Accent */}

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
                      duration-500
                    "
                  />
                </div>
              );
            }
          )}
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
          <p
            className="
              text-sm
              text-muted
              max-w-xl
            "
          >
            Always learning. Always building. Always looking for better ways
            to turn complex problems into elegant digital solutions.
          </p>

          <div
            className="
              flex
              items-center
              gap-3
              text-xs
              uppercase
              tracking-[0.25em]
              text-primary
            "
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />

            <span>
              Curious by nature
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
