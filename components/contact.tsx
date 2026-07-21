"use client";
import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-background
        py-28
        sm:py-36
        lg:py-44
      "
    >
      {/* ========================================================= */}
      {/* BACKGROUND SYSTEM */}
      {/* ========================================================= */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Fine Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
            [background-size:100px_100px]
          "
        />

        {/* Main Animated Glow */}
        <div
          className="
            absolute
            -top-[20%]
            left-[35%]
            w-[700px]
            h-[700px]
            rounded-full
            bg-primary/[0.08]
            blur-[160px]
            animate-pulse
          "
        />

        {/* Secondary Glow */}
        <div
          className="
            absolute
            bottom-[-20%]
            right-[-10%]
            w-[600px]
            h-[600px]
            rounded-full
            bg-accent/[0.08]
            blur-[150px]
          "
        />

        {/* Moving Light */}
        <div
          className="
            absolute
            top-1/2
            left-0
            w-[500px]
            h-[1px]
            bg-gradient-to-r
            from-transparent
            via-primary/30
            to-transparent
            rotate-[-15deg]
            blur-sm
          "
        />

      </div>


      {/* ========================================================= */}
      {/* DECORATIVE CORNERS */}
      {/* ========================================================= */}

      <div className="absolute top-8 left-6 w-4 h-4 border-l border-t border-primary/40" />

      <div className="absolute top-8 right-6 w-4 h-4 border-r border-t border-primary/40" />

      <div className="absolute bottom-8 left-6 w-4 h-4 border-l border-b border-primary/40" />

      <div className="absolute bottom-8 right-6 w-4 h-4 border-r border-b border-primary/40" />


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
        {/* TOP META */}
        {/* ======================================================= */}

        <div
          className="
            flex
            items-center
            justify-between
            mb-20
            lg:mb-28
          "
        >

          <div className="flex items-center gap-4">

            <span className="relative flex h-2.5 w-2.5">

              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-primary
                  opacity-50
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-primary
                "
              />

            </span>

            <span
              className="
                text-xs
                sm:text-sm
                uppercase
                tracking-[0.25em]
                text-muted
              "
            >
              Available for opportunities
            </span>

          </div>


          <span
            className="
              hidden
              sm:block
              text-xs
              uppercase
              tracking-[0.25em]
              text-muted
            "
          >
            06 / CONTACT
          </span>

        </div>



        {/* ======================================================= */}
        {/* MAIN EDITORIAL AREA */}
        {/* ======================================================= */}

        <div
          className="
            grid
            lg:grid-cols-12
            gap-16
            lg:gap-20
            items-start
          "
        >


          {/* ===================================================== */}
          {/* LEFT — HUGE TYPOGRAPHY */}
          {/* ===================================================== */}

          <div
            className="
              lg:col-span-8
            "
          >

            <div className="flex items-center gap-4 mb-10">

                {/* <Sparkles
                  size={18}
                  className="text-primary"
                /> */}

              <span
                className="
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-primary
                  font-medium
                "
              >
                Let's create
              </span>

              <div className="h-px w-20 bg-border" />

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
  LET'S
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
    BUILD
  </span>

  <br />

  SOMETHING{" "}
  <span className="text-foreground/40">
    GREAT.
  </span>
</h2>
            <p
              className="
                mt-12
                max-w-xl
                text-base
                sm:text-lg
                text-muted
                leading-relaxed
              "
            >
              Have an idea, an opportunity, or a challenging
              problem to solve? 
              <br></br>Let's turn it into a thoughtful,
              scalable, and meaningful digital experience.
            </p>

          </div>



          {/* ===================================================== */}
          {/* RIGHT — CONTACT INDEX */}
          {/* ===================================================== */}

          <div
            className="
              lg:col-span-4
              lg:pt-16
            "
          >

            <p
              className="
                mb-8
                text-xs
                uppercase
                tracking-[0.3em]
                text-muted
              "
            >
              Contact information
            </p>


            {/* EMAIL */}

            <a
              href="mailto:dadiferyel@gmail.com"
              className="
                group
                block
                border-t
                border-border
                py-6
                transition-all
                duration-500
                hover:border-primary
              "
            >

              <div className="flex items-start justify-between gap-5">

                <div>

                  <span
                    className="
                      block
                      mb-3
                      text-[10px]
                      font-mono
                      tracking-[0.25em]
                      text-primary
                    "
                  >
                    01 / EMAIL
                  </span>

                  <span
                    className="
                      text-base
                      sm:text-lg
                      font-medium
                      text-foreground
                      group-hover:text-primary
                      transition-colors
                    "
                  >
                    dadiferyel@gmail.com
                  </span>

                </div>


                <ArrowUpRight
                  size={20}
                  className="
                    text-muted
                    transition-all
                    duration-300
                    group-hover:text-primary
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />

              </div>

            </a>



            {/* PHONE */}

            <a
              href="tel:+21629141953"
              className="
                group
                block
                border-t
                border-border
                py-6
                transition-all
                duration-500
                hover:border-primary
              "
            >

              <div className="flex items-start justify-between gap-5">

                <div>

                  <span
                    className="
                      block
                      mb-3
                      text-[10px]
                      font-mono
                      tracking-[0.25em]
                      text-primary
                    "
                  >
                    02 / PHONE
                  </span>

                  <span
                    className="
                      text-base
                      sm:text-lg
                      font-medium
                      text-foreground
                      group-hover:text-primary
                      transition-colors
                    "
                  >
                    +216 29 141 953
                  </span>

                </div>


                {/* <ArrowUpRight
                  size={20}
                  className="
                    text-muted
                    transition-all
                    duration-300
                    group-hover:text-primary
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                /> */}

              </div>

            </a>



            {/* LOCATION */}

            <div
              className="
                border-t
                border-border
                py-6
              "
            >

              <div className="flex items-start justify-between">

                <div>

                  <span
                    className="
                      block
                      mb-3
                      text-[10px]
                      font-mono
                      tracking-[0.25em]
                      text-primary
                    "
                  >
                    03 / BASED IN
                  </span>

                  <span
                    className="
                      text-base
                      sm:text-lg
                      font-medium
                      text-foreground
                    "
                  >
                    Gabes, Tunisia
                  </span>

                </div>


                <MapPin
                  size={20}
                  className="text-muted"
                />

              </div>

            </div>


            {/* STATUS */}

            <div
              className="
                mt-8
                flex
                items-center
                gap-3
                text-sm
                text-muted
              "
            >

              <span className="relative flex h-2 w-2">

                <span
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-primary
                    animate-ping
                    opacity-50
                  "
                />

                <span
                  className="
                    relative
                    block
                    h-2
                    w-2
                    rounded-full
                    bg-primary
                  "
                />

              </span>

              Open to new opportunities

            </div>

          </div>

        </div>



        {/* ======================================================= */}
        {/* LARGE CTA */}
        {/* ======================================================= */}

        <div
          className="
            mt-24
            lg:mt-32
            border-y
            border-border
            py-8
            sm:py-10
          "
        >

          <div
            className="
              flex
              flex-col
              sm:flex-row
              sm:items-center
              sm:justify-between
              gap-8
            "
          >


            {/* CTA TEXT */}

            <div>

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-muted
                  mb-3
                "
              >
                Start a conversation
              </p>

            <a
  href="mailto:dadiferyel@gmail.com"
  className="
    group
    inline-flex
    items-center
    gap-3
    text-xl
    sm:text-1xl
    lg:text-2xl
    font-semibold
    tracking-tight
    text-foreground
    hover:text-primary
    transition-colors
  "
>
  dadiferyel@gmail.com

  <ArrowUpRight
    size={22}
    className="
      transition-transform
      duration-300
      group-hover:translate-x-1
      group-hover:-translate-y-1
    "
  />
</a>
</div>


            {/* DOWNLOAD */}

            <a
              href="/feryel_resume.pdf"
              download
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-border
                px-7
                py-4
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

              <Download size={18} />

              Download CV

              <ArrowDownRight
                size={17}
                className="
                  transition-transform
                  group-hover:translate-x-1
                  group-hover:translate-y-1
                "
              />

            </a>

          </div>

        </div>



        {/* ======================================================= */}
        {/* FOOTER / SOCIALS */}
        {/* ======================================================= */}

        <div
          className="
            mt-10
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            gap-6
          "
        >


          {/* NAME */}

          <div
            className="
              flex
              items-center
              gap-4
            "
          >

            <span
              className="
                text-sm
                font-semibold
                tracking-wide
                text-foreground
              "
            >
              FERYEL DADI
            </span>

            <span className="h-px w-10 bg-border" />

            <span
              className="
                text-xs
                uppercase
                tracking-[0.2em]
                text-muted
              "
            >
              Software Engineer
            </span>

          </div>



          {/* SOCIALS */}

          <div className="flex items-center gap-3">

            <a
              href="https://github.com/feeryel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                group
                flex
                items-center
                gap-2
                text-sm
                text-muted
                transition-colors
                hover:text-primary
              "
            >

              <FaGithub size={18} />

              <span>GitHub</span>

              <ArrowUpRight
                size={14}
                className="
                  opacity-0
                  transition-all
                  group-hover:opacity-100
                "
              />

            </a>


            <span className="text-border">
              /
            </span>


            <a
              href="https://linkedin.com/in/feryeldadi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                group
                flex
                items-center
                gap-2
                text-sm
                text-muted
                transition-colors
                hover:text-primary
              "
            >

              <FaLinkedin size={18} />

              <span>LinkedIn</span>

              <ArrowUpRight
                size={14}
                className="
                  opacity-0
                  transition-all
                  group-hover:opacity-100
                "
              />

            </a>

          </div>

        </div>



        {/* ======================================================= */}
        {/* FINAL LINE */}
        {/* ======================================================= */}

        <div
          className="
            mt-16
            flex
            items-center
            justify-between
            border-t
            border-border
            pt-5
          "
        >

          <span
            className="
              text-[10px]
              sm:text-xs
              uppercase
              tracking-[0.25em]
              text-muted
            "
          >
            Designed & built with purpose
          </span>


          <a
            href="#home"
            className="
              group
              flex
              items-center
              gap-2
              text-xs
              text-muted
              hover:text-primary
              transition-colors
            "
          >

            Back to top

            <ArrowUpRight
              size={14}
              className="
                transition-transform
                group-hover:-translate-y-1
                group-hover:translate-x-1
              "
            />

          </a>

        </div>

      </div>

    </section>
  );
}
