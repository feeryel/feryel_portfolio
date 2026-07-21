import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="
      sticky top-0 z-50 
      bg-background/80 
      border-b border-border/50 
      backdrop-blur-xl 
      shadow-sm
    ">

      <nav className="
        max-w-7xl mx-auto 
        px-4 sm:px-6 lg:px-8 
        h-20 
        flex items-center justify-between
      ">


        {/* Logo + Avatar */}
        <Link 
          href="/" 
          className="group flex items-center gap-3"
        >

          {/* Avatar */}
          <div className="
            relative 
            w-11 h-11 
            rounded-full 
            overflow-hidden
            border-2 border-primary/40
            shadow-lg shadow-primary/20
            group-hover:border-primary
            transition-all
          ">

            <Image
              src="/me.jpeg"
              alt="Feryel Dadi"
              fill
              className="
                object-cover
                group-hover:scale-110
                transition-transform duration-300
              "
            />

          </div>


          {/* Name */}
          <div className="flex flex-col">

            <span className="
              text-lg 
              font-bold
              text-foreground
              group-hover:text-primary
              transition-colors
            ">
              Feryel Dadi
            </span>


            <span className="
              text-xs 
              text-muted
            ">
              Software Engineer
            </span>

          </div>


        </Link>





        {/* Navigation Links */}
        <div className="
          hidden md:flex 
          items-center 
          gap-1
        ">


          {[
            ["About", "#about"],
            ["Experience", "#experience"],
            ["Projects", "#projects"],
            ["Skills", "#skills"],
          ].map(([name, href]) => (

            <Link
              key={name}
              href={href}
              className="
                relative
                px-3 py-2
                text-sm
                font-medium
                text-foreground
                rounded-lg
                hover:text-primary
                hover:bg-primary/10
                transition-all
                group
              "
            >

              {name}

              <span className="
                absolute
                bottom-0
                left-0
                right-0
                h-0.5
                bg-gradient-to-r
                from-primary
                to-accent
                scale-x-0
                group-hover:scale-x-100
                transition-transform
                rounded-full
              "/>

            </Link>

          ))}





          {/* Contact */}
          <Link
            href="#contact"
            className="
              ml-3
              px-4 py-2
              rounded-lg
              text-sm
              font-semibold
              bg-primary/10
              border border-primary/30
              text-primary
              hover:bg-primary
              hover:text-primary-foreground
              transition-all
            "
          >
            Contact
          </Link>





          {/* Divider */}
          <div className="
            h-6 
            w-px 
            bg-border 
            mx-3
          "/>





          {/* Download CV */}
          <a
            href="/Resume_Feryel.pdf"
            download="Feryel_CV.pdf"
            className="
              px-4 py-2
              rounded-lg
              bg-gradient-to-r
              from-primary
              to-accent
              text-white
              text-sm
              font-semibold
              hover:scale-105
              transition-all
              shadow-lg
              shadow-primary/20
            "
          >
            Download CV
          </a>


        </div>


      </nav>

    </header>
  )
}