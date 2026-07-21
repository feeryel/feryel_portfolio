"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Mail,
  MoveUpRight,
  Sparkles,
} from "lucide-react";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const expertise = [
    "FULL STACK",
    "MOBILE",
    "AI & AUTOMATION",
    "CLOUD",
  ];

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let animationFrameId: number;

    let width = 0;
    let height = 0;

    const mouse = {
      x: -1000,
      y: -1000,
    };

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }[] = [];

    const PARTICLE_COUNT = 70;
    const CONNECTION_DISTANCE = 140;
    const MOUSE_DISTANCE = 180;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();

      width = rect.width;
      height = rect.height;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const createParticles = () => {
      particles.length = 0;

      const count =
        window.innerWidth < 768
          ? 35
          : PARTICLE_COUNT;

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          size: Math.random() * 1.5 + 0.5,
        });
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();

      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      /* ========================================= */
      /* UPDATE PARTICLES */
      /* ========================================= */

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < -20) {
          particle.x = width + 20;
        }

        if (particle.x > width + 20) {
          particle.x = -20;
        }

        if (particle.y < -20) {
          particle.y = height + 20;
        }

        if (particle.y > height + 20) {
          particle.y = -20;
        }

        /* Mouse interaction */

        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;

        const distance = Math.sqrt(
          dx * dx + dy * dy
        );

        if (distance < MOUSE_DISTANCE) {
          const force =
            (MOUSE_DISTANCE - distance) /
            MOUSE_DISTANCE;

          particle.x -=
            (dx / distance) * force * 0.4;

          particle.y -=
            (dy / distance) * force * 0.4;
        }
      });

      /* ========================================= */
      /* DRAW CONNECTIONS */
      /* ========================================= */

      for (let i = 0; i < particles.length; i++) {
        for (
          let j = i + 1;
          j < particles.length;
          j++
        ) {
          const p1 = particles[i];
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;

          const distance = Math.sqrt(
            dx * dx + dy * dy
          );

          if (
            distance <
            CONNECTION_DISTANCE
          ) {
            const opacity =
              (1 - distance / CONNECTION_DISTANCE) *
              0.12;

            ctx.beginPath();

            ctx.moveTo(p1.x, p1.y);

            ctx.lineTo(p2.x, p2.y);

            ctx.strokeStyle = `rgba(130, 120, 255, ${opacity})`;

            ctx.lineWidth = 0.6;

            ctx.stroke();
          }
        }
      }

      /* ========================================= */
      /* MOUSE CONNECTIONS */
      /* ========================================= */

      particles.forEach((particle) => {
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;

        const distance = Math.sqrt(
          dx * dx + dy * dy
        );

        if (distance < MOUSE_DISTANCE) {
          const opacity =
            (1 - distance / MOUSE_DISTANCE) *
            0.35;

          ctx.beginPath();

          ctx.moveTo(
            particle.x,
            particle.y
          );

          ctx.lineTo(
            mouse.x,
            mouse.y
          );

          ctx.strokeStyle = `rgba(130, 120, 255, ${opacity})`;

          ctx.lineWidth = 0.8;

          ctx.stroke();
        }
      });

      /* ========================================= */
      /* DRAW PARTICLES */
      /* ========================================= */

      particles.forEach((particle) => {
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;

        const distance = Math.sqrt(
          dx * dx + dy * dy
        );

        const isNearMouse =
          distance < MOUSE_DISTANCE;

        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          isNearMouse
            ? particle.size + 1
            : particle.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = isNearMouse
          ? "rgba(150, 140, 255, 0.8)"
          : "rgba(130, 120, 255, 0.35)";

        ctx.fill();
      });

      animationFrameId =
        requestAnimationFrame(animate);
    };

    resizeCanvas();

    createParticles();

    canvas.addEventListener(
      "mousemove",
      handleMouseMove
    );

    canvas.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    window.addEventListener(
      "resize",
      resizeCanvas
    );

    animate();

    return () => {
      cancelAnimationFrame(
        animationFrameId
      );

      canvas.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      canvas.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      window.removeEventListener(
        "resize",
        resizeCanvas
      );
    };
  }, []);

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-background
      "
    >
      {/* ========================================================= */}
      {/* ANIMATED BACKGROUND */}
      {/* ========================================================= */}

      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        {/* Neural Network Canvas */}

        <canvas
          ref={canvasRef}
          className="
            absolute
            inset-0
            w-full
            h-full
          "
        />

        {/* Ambient Glow */}

        <div
          className="
            absolute
            top-[-15%]
            right-[-10%]
            w-[700px]
            h-[700px]
            rounded-full
            bg-primary/10
            blur-[140px]
            animate-pulse
          "
        />

        <div
          className="
            absolute
            bottom-[-20%]
            left-[-10%]
            w-[600px]
            h-[600px]
            rounded-full
            bg-accent/10
            blur-[140px]
            animate-pulse
          "
        />

        {/* Center Glow */}

        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[500px]
            h-[500px]
            rounded-full
            bg-primary/[0.035]
            blur-[100px]
          "
        />
      </div>

      {/* ========================================================= */}
      {/* TOP META BAR */}
      {/* ========================================================= */}

      <div
        className="
          relative
          z-10
          max-w-[1500px]
          mx-auto
          px-6
          lg:px-10
          pt-28
        "
      >
        <div className="flex items-center justify-between">
          {/* Availability */}

          <div className="flex items-center gap-3">
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
                tracking-[0.2em]
                uppercase
                text-muted
              "
            >
              Available for opportunities
            </span>
          </div>

          {/* Year */}

          <span
            className="
              hidden
              sm:block
              text-xs
              tracking-[0.25em]
              text-muted
            "
          >
  SOFTWARE ENGINEER · FULL STACK DEVELOPER
          </span>
        </div>
      </div>

      {/* ========================================================= */}
      {/* MAIN HERO */}
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
        <div
          className="
            min-h-[calc(100vh-180px)]
            flex
            flex-col
            justify-center
            py-20
          "
        >
          {/* ===================================================== */}
          {/* IDENTITY */}
          {/* ===================================================== */}

          <div
            className="
              mb-8
              flex
              items-center
              gap-4
              animate-in
              fade-in
              slide-in-from-bottom-4
              duration-700
            "
          >
            <span
              className="
                text-sm
                text-muted
                font-mono
                tracking-wider
              "
            >
              WHERE IDEAS BECOME SYSTEMS
            </span>

            <div className="h-px w-16 bg-border" />

            <span
              className="
                text-sm
                text-primary
                font-mono
                tracking-wider
              "
            >
              FERYEL DADI
            </span>
          </div>

          {/* ===================================================== */}
          {/* TITLE */}
          {/* ===================================================== */}

          <div
            className="
              max-w-6xl
              animate-in
              fade-in
              slide-in-from-bottom-8
              duration-1000
            "
          >
            <h1
              className="
                text-[clamp(2rem,8vw,8rem)]
                font-bold
                leading-[0.82]
                tracking-[-0.07em]
                text-foreground
              "
            >
              SOFTWARE
            </h1>

            <div
              className="
                flex
                flex-col
                lg:flex-row
                lg:items-end
                gap-4
                lg:gap-10
              "
            >
              <h1
                className="
                text-[clamp(2rem,8vw,8rem)]
                  font-bold
                  leading-[0.82]
                  tracking-[-0.07em]
                  bg-gradient-to-r
                  from-primary
                  via-accent
                  to-primary
                  bg-clip-text
                  text-transparent
                "
              >
                ENGINEER
              </h1>

              {/* Descriptor */}

              <div className="lg:mb-4 max-w-sm">
                <p
                  className="
                    text-sm
                    sm:text-base
                    text-muted
                    leading-relaxed
                  "
                >
                  Building intelligent digital
                  experiences across
                  <span className="text-foreground">
                    {" "}
                    web, mobile,{" "}
                  </span>
                  and
                  <span className="text-foreground">
                    {" "}
                    AI-powered systems.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* ===================================================== */}
          {/* LOWER CONTENT */}
          {/* ===================================================== */}

          <div
            className="
              mt-16
              grid
              grid-cols-1
              lg:grid-cols-12
              gap-12
              items-end
            "
          >
            {/* LEFT */}

            <div className="lg:col-span-5">
              <div
                className="
                  border-l
                  border-primary/40
                  pl-6
                "
              >
                <p
                  className="
                    text-lg
                    sm:text-xl
                    text-foreground
                    leading-relaxed
                  "
                >
                  I turn ideas into scalable
                  software products through
                  thoughtful architecture,
                  modern technologies, and
                  intelligent automation.
                </p>
              </div>

              {/* CTA */}

              <div
                className="
                  flex
                  flex-wrap
                  gap-4
                  mt-8
                "
              >
                <a
                  href="#projects"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    px-6
                    py-3.5
                    rounded-full
                    bg-foreground
                    text-background
                    font-medium
                    hover:bg-primary
                    hover:text-primary-foreground
                    transition-all
                    duration-300
                  "
                >
                  Explore my work

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

                <a
                  href="/Resume_Feryel.pdf"
                  download
                  className="
                    inline-flex
                    items-center
                    gap-3
                    px-6
                    py-3.5
                    rounded-full
                    border
                    border-border
                    text-foreground
                    hover:border-primary
                    hover:text-primary
                    transition-all
                    duration-300
                  "
                >
                  <Download size={17} />

                  Download CV
                </a>
              </div>
            </div>

            {/* CENTER */}

            <div className="lg:col-span-4">
              <div className="space-y-3">
                <span
                  className="
                    text-xs
                    tracking-[0.25em]
                    text-muted
                    uppercase
                  "
                >
                  Areas of expertise
                </span>

                <div className="flex flex-wrap gap-2">
                  {expertise.map(
                    (item, index) => (
                      <div
                        key={item}
                        className="
                          group
                          flex
                          items-center
                          gap-2
                          px-3
                          py-2
                          rounded-full
                          border
                          border-border
                          bg-card/30
                          backdrop-blur-sm
                          hover:border-primary/50
                          transition-all
                          duration-300
                        "
                      >
                        <span
                          className="
                            text-[10px]
                            text-primary
                            font-mono
                          "
                        >
                          0{index + 1}
                        </span>

                        <span
                          className="
                            text-xs
                            text-muted
                            group-hover:text-foreground
                            transition-colors
                          "
                        >
                          {item}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT */}

            <div
              className="
                lg:col-span-3
                lg:text-right
              "
            >
              <span
                className="
                  text-xs
                  tracking-[0.25em]
                  text-muted
                  uppercase
                "
              >
                Start a conversation
              </span>

              <a
                href="mailto:dadiferyel@gmail.com"
                className="
                  group
                  mt-3
                  inline-flex
                  items-center
                  gap-3
                  lg:flex
                  lg:justify-end
                  text-foreground
                  hover:text-primary
                  transition-colors
                "
              >
                <Mail size={18} />

                <span
                  className="
                    text-sm
                    sm:text-base
                  "
                >
                  dadiferyel@gmail.com
                </span>

                <MoveUpRight
                  size={16}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </a>
            </div>
          </div>

          {/* ===================================================== */}
          {/* BOTTOM SYSTEM LINE */}
          {/* ===================================================== */}

          <div
            className="
              mt-20
              border-t
              border-border
              pt-5
            "
          >
            <div
              className="
                flex
                items-center
                justify-between
                gap-6
                overflow-hidden
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-8
                  whitespace-nowrap
                "
              >
                <Sparkles
                  size={16}
                  className="text-primary"
                />

                <span
                  className="
                    text-xs
                    tracking-[0.3em]
                    text-muted
                  "
                >
                  SOFTWARE
                </span>

                <span className="text-primary">
                  ✦
                </span>

                <span
                  className="
                    text-xs
                    tracking-[0.3em]
                    text-muted
                  "
                >
                  ENGINEERING
                </span>

                <span className="text-primary">
                  ✦
                </span>

                <span
                  className="
                    text-xs
                    tracking-[0.3em]
                    text-muted
                  "
                >
                  INTELLIGENCE
                </span>

                <span className="text-primary">
                  ✦
                </span>

                <span
                  className="
                    text-xs
                    tracking-[0.3em]
                    text-muted
                  "
                >
                  AUTOMATION
                </span>

                <span className="text-primary">
                  ✦
                </span>

                <span
                  className="
                    text-xs
                    tracking-[0.3em]
                    text-muted
                  "
                >
                  DIGITAL PRODUCTS
                </span>
              </div>

              <a
                href="#about"
                className="
                  hidden
                  sm:flex
                  items-center
                  gap-2
                  text-xs
                  text-muted
                  hover:text-primary
                  transition-colors
                "
              >
                Scroll to explore

                <ArrowDown size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* DECORATIVE CORNERS */}
      {/* ========================================================= */}

      <div
        className="
          absolute
          top-24
          left-5
          w-3
          h-3
          border-l
          border-t
          border-primary/40
        "
      />

      <div
        className="
          absolute
          top-24
          right-5
          w-3
          h-3
          border-r
          border-t
          border-primary/40
        "
      />

      <div
        className="
          absolute
          bottom-5
          left-5
          w-3
          h-3
          border-l
          border-b
          border-primary/40
        "
      />

      <div
        className="
          absolute
          bottom-5
          right-5
          w-3
          h-3
          border-r
          border-b
          border-primary/40
        "
      />
    </section>
  );
}
