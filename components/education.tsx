"use client";

import {
  ArrowUpRight,
  CheckCircle2,
  GraduationCap,
  BookOpen,
  Code2,
} from "lucide-react";

export default function Education() {
  const education = [
    {
      number: "01",
      degree: "Engineering Degree",
      field: "Software Engineering",
      school: "ESSAT Gabes",
      period: "2024 — 2026",
      description:
        "Advanced training in software engineering, system architecture, application development, and modern software technologies.",
      icon: GraduationCap,
      current: false,
    },

    {
      number: "02",
      degree: "Professional Master's Degree",
      field: "Mobile Development Engineering",
      school: "ISG Gabes",
      period: "2023 — 2025",
      description:
        "Specialized academic journey focused on mobile application engineering, software development, and emerging digital technologies.",
      icon: BookOpen,
      current: false,
    },

    {
      number: "03",
      degree: "Bachelor's Degree",
      field: "Information Technology",
      school: "ISET Mahdia",
      period: "2020 — 2023",
      description:
        "Foundation in information technology with a specialization in web and multimedia development.",
      icon: Code2,
      current: false,
    },
  ];

  return (
    <section
      id="education"
      className="
        relative
        overflow-hidden
        bg-background
        py-32
      "
    >
      {/* ===================================================== */}
      {/* BACKGROUND SYSTEM */}
      {/* ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
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

        {/* Top Glow */}

        <div
          className="
            absolute
            -top-40
            right-[-10%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-primary/10
            blur-[140px]
          "
        />

        {/* Bottom Glow */}

        <div
          className="
            absolute
            -bottom-40
            left-[-10%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-accent/10
            blur-[140px]
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
        {/* SECTION HEADER */}
        {/* ===================================================== */}

        <div
          className="
            mb-20
            grid
            grid-cols-1
            gap-8
            lg:grid-cols-12
            lg:items-end
          "
        >
          {/* LEFT */}

          <div className="lg:col-span-8">
            <div className="mb-6 flex items-center gap-4">
              <span className="font-mono text-xs tracking-[0.3em] text-primary">
                05
              </span>

              <div className="h-px w-16 bg-primary/40" />

              <span className="text-xs uppercase tracking-[0.25em] text-muted">
                Academic Journey
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
  Built on
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
    knowledge.
  </span>
</h2>
          </div>

          {/* RIGHT */}

          <div className="lg:col-span-4 lg:pb-2">
            <p className="max-w-md text-base leading-relaxed text-muted sm:text-lg">
              A continuous academic journey combining software engineering,
              mobile development, and information technology.
            </p>
          </div>
        </div>

        {/* ===================================================== */}
        {/* EDUCATION LIST */}
        {/* ===================================================== */}

        <div className="space-y-5">
          {education.map((edu) => {
            const Icon = edu.icon;

            return (
              <article
                key={edu.number}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-border
                  bg-card/20
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-primary/50
                  hover:shadow-2xl
                  hover:shadow-primary/10
                "
              >
                {/* Hover Gradient */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-primary/10
                    via-transparent
                    to-accent/10
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* ================================================= */}
                {/* CARD CONTENT */}
                {/* ================================================= */}

                <div
                  className="
                    relative
                    grid
                    grid-cols-1
                    gap-8
                    p-7
                    sm:p-9
                    lg:grid-cols-12
                    lg:items-center
                    lg:p-10
                  "
                >
                  {/* NUMBER */}

                  <div className="lg:col-span-1">
                    <span
                      className="
                        font-mono
                        text-sm
                        tracking-[0.2em]
                        text-primary
                      "
                    >
                      {edu.number}
                    </span>
                  </div>

                  {/* ICON */}

                  <div className="lg:col-span-1">
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-primary/20
                        bg-primary/10
                        text-primary
                        transition-all
                        duration-500
                        group-hover:scale-110
                        group-hover:border-primary/50
                        group-hover:bg-primary/20
                      "
                    >
                      <Icon size={25} />
                    </div>
                  </div>

                  {/* MAIN INFO */}

                  <div className="lg:col-span-6">
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <span
                        className="
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.25em]
                          text-primary
                        "
                      >
                        {edu.field}
                      </span>

                      {edu.current && (
                        <span
                          className="
                            inline-flex
                            items-center
                            gap-1.5
                            rounded-full
                            border
                            border-primary/30
                            bg-primary/10
                            px-2.5
                            py-1
                            text-[10px]
                            font-medium
                            text-primary
                          "
                        >
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />

                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                          </span>

                          Completed
                        </span>
                      )}
                    </div>

                    <h3
                      className="
                        text-2xl
                        font-bold
                        tracking-tight
                        text-foreground
                        transition-colors
                        duration-300
                        group-hover:text-primary
                        sm:text-3xl
                      "
                    >
                      {edu.degree}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-muted">
                      {edu.school}
                    </p>
                  </div>

                  {/* DESCRIPTION */}

                  <div className="lg:col-span-3">
                    <p
                      className="
                        text-sm
                        leading-6
                        text-muted
                      "
                    >
                      {edu.description}
                    </p>
                  </div>

                  {/* PERIOD + ARROW */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      border-t
                      border-border
                      pt-5
                      lg:col-span-1
                      lg:flex-col
                      lg:items-end
                      lg:justify-center
                      lg:border-l
                      lg:border-t-0
                      lg:pl-6
                      lg:pt-0
                    "
                  >
                    <span
                      className="
                        whitespace-nowrap
                        font-mono
                        text-xs
                        tracking-wider
                        text-muted
                      "
                    >
                      {edu.period}
                    </span>

                    {/* <ArrowUpRight
                      size={19}
                      className="
                        mt-3
                        text-muted
                        transition-all
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-primary
                      "
                    /> */}
                  </div>
                </div>

                {/* Bottom Accent */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-0
                    bg-gradient-to-r
                    from-primary
                    to-accent
                    transition-all
                    duration-700
                    group-hover:w-full
                  "
                />
              </article>
            );
          })}
        </div>

        {/* ===================================================== */}
        {/* EDUCATION FOOTER */}
        {/* ===================================================== */}

        <div
          className="
            mt-16
            flex
            flex-col
            gap-6
            border-t
            border-border
            pt-8
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div className="flex items-center gap-3">
            <CheckCircle2 size={18} className="text-primary" />

            <span className="text-sm text-muted">
              Engineering background with a focus on modern software
              development.
            </span>
          </div>

          <div className="flex items-center gap-3">
            <GraduationCap size={18} className="text-primary" />

            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              3 Academic Degrees
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
