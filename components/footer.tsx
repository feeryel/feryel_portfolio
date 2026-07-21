import { Mail, ArrowUpRight } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import Image from "next/image"

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t border-border/50
        bg-background
      "
    >
      {/* Ambient Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -top-40
          left-1/2
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-primary/10
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-64
          w-64
          rounded-full
          bg-accent/5
          blur-[100px]
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-6
          py-20
          lg:py-28
        "
      >

        {/* Main CTA */}
        <div
          className="
            flex
            flex-col
            items-start
            justify-between
            gap-10
            border-b
            border-border/50
            pb-16
            lg:flex-row
            lg:items-end
          "
        >

          {/* Left */}
          <div className="max-w-3xl">

            <p
              className="
                mb-5
                text-xs
                font-medium
                uppercase
                tracking-[0.3em]
                text-primary
              "
            >
              Let&apos;s work together
            </p>

            <h2
              className="
                text-[clamp(1rem,4.5vw,4.5rem)]
                font-bold
                leading-[0.9]
                tracking-[-0.06em]
                text-foreground
              "
            >
              Have a project
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
                in mind?
              </span>
            </h2>

          </div>


          {/* Contact Button */}
          <a
            href="mailto:dadiferyel@gmail.com"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-primary/30
              bg-primary/10
              px-6
              py-4
              text-sm
              font-semibold
              text-foreground
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-primary
              hover:bg-primary
              hover:text-white
              hover:shadow-xl
              hover:shadow-primary/20
            "
          >
            <Mail size={18} />

            Get in touch

            <ArrowUpRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </a>

        </div>


        {/* Footer Content */}
        <div
          className="
            grid
            gap-12
            py-12
            md:grid-cols-2
            lg:grid-cols-3
          "
        >

          {/* Brand */}
          <div>

            <div className="flex items-center gap-4">

              <div
                className="
                  relative
                  h-14
                  w-14
                  overflow-hidden
                  rounded-2xl
                  border
                  border-primary/20
                  shadow-lg
                  shadow-primary/10
                "
              >
                <Image
                  src="/me.jpeg"
                  alt="Feryel Dadi"
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-110
                  "
                />
              </div>

              <div>
                <h3
                  className="
                    text-lg
                    font-bold
                    tracking-tight
                    text-foreground
                  "
                >
                  Feryel Dadi
                </h3>

                <p
                  className="
                    mt-1
                    text-sm
                    text-muted
                  "
                >
                  Software Engineer
                </p>
              </div>

            </div>

            <p
              className="
                mt-6
                max-w-sm
                text-sm
                leading-6
                text-muted
              "
            >
              Building thoughtful digital experiences through clean code,
              modern technologies, and creative problem-solving.
            </p>

          </div>


          {/* Navigation */}
          <div>

            <p
              className="
                mb-5
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-foreground
              "
            >
              Explore
            </p>

            <nav className="flex flex-col gap-3">

              <a
                href="#about"
                className="
                  w-fit
                  text-sm
                  text-muted
                  transition-colors
                  hover:text-primary
                "
              >
                About
              </a>

              <a
                href="#projects"
                className="
                  w-fit
                  text-sm
                  text-muted
                  transition-colors
                  hover:text-primary
                "
              >
                Projects
              </a>

              <a
                href="#skills"
                className="
                  w-fit
                  text-sm
                  text-muted
                  transition-colors
                  hover:text-primary
                "
              >
                Skills
              </a>

              <a
                href="#contact"
                className="
                  w-fit
                  text-sm
                  text-muted
                  transition-colors
                  hover:text-primary
                "
              >
                Contact
              </a>

            </nav>

          </div>


          {/* Social */}
          <div>

            <p
              className="
                mb-5
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-foreground
              "
            >
              Find me online
            </p>

            <div className="flex gap-3">

              <a
                href="https://github.com/feeryel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  group
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-border
                  bg-card/50
                  text-muted
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/50
                  hover:bg-primary/10
                  hover:text-primary
                "
              >
                <FaGithub
                  size={20}
                  className="transition-transform group-hover:scale-110"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/feryeldadi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  group
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-border
                  bg-card/50
                  text-muted
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/50
                  hover:bg-primary/10
                  hover:text-primary
                "
              >
                <FaLinkedin
                  size={20}
                  className="transition-transform group-hover:scale-110"
                />
              </a>

            </div>

          </div>

        </div>


        {/* Bottom Bar */}
        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-4
            border-t
            border-border/50
            pt-8
            text-center
            sm:flex-row
            sm:text-left
          "
        >

          <p className="text-xs text-muted">
            © 2026 Feryel Dadi. All rights reserved.
          </p>

          <p
            className="
              text-xs
              tracking-wide
              text-muted
            "
          >
            Designed &amp; built with passion.
          </p>

        </div>

      </div>
    </footer>
  )
}