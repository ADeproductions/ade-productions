import Navbar from "../components/Navbar";

const heroFeatures = [
  {
    title: "Full Event",
    subtitle: "Management",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M8 2v4M16 2v4M3 9h18M8 14l2.5 2.5L16 11" />
      </svg>
    ),
  },
  {
    title: "Trusted",
    subtitle: "Suppliers",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="8" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M2.5 20c.5-4 2.5-6 5.5-6s5 2 5.5 6M13 20c.3-3 1.7-4.5 4-4.5s3.8 1.5 4 4.5" />
      </svg>
    ),
  },
  {
    title: "Creative",
    subtitle: "Solutions",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M9 18h6M10 22h4M8.5 15.5C6.9 14.4 6 12.5 6 10.5a6 6 0 1 1 12 0c0 2-.9 3.9-2.5 5-1 .7-1.5 1.5-1.5 2.5h-4c0-1-.5-1.8-1.5-2.5Z" />
      </svg>
    ),
  },
  {
    title: "On-Site",
    subtitle: "Excellence",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="m12 2.5 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.1l6.2-.9L12 2.5Z" />
      </svg>
    ),
  },
];

const services = [
  {
    number: "01",
    title: "Planning & Strategy",
    text: "Event concepts, timelines, budgets, venue planning, and complete operational strategy.",
  },
  {
    number: "02",
    title: "Supplier Management",
    text: "We source, select, negotiate with, and coordinate trusted suppliers for every event requirement.",
  },
  {
    number: "03",
    title: "Production & Setup",
    text: "Staging, sound, lighting, LED screens, branding, decoration, furniture, and entertainment.",
  },
  {
    number: "04",
    title: "Ticketing & Guests",
    text: "Registration, QR codes, invitations, guest lists, check-in, and access management.",
  },
  {
    number: "05",
    title: "On-Site Execution",
    text: "Full event-day management, supplier coordination, troubleshooting, and guest experience.",
  },
  {
    number: "06",
    title: "A-to-Z Management",
    text: "From the first meeting until the final guest leaves, ADE manages the complete event.",
  },
];
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#050b14] text-white">
        {/* HERO */}
        <section
          id="home"
          className="relative flex min-h-screen items-center overflow-hidden pt-28"
          style={{
            backgroundImage: "url('/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "75% center",
          }}
        >
          <div className="absolute inset-0 bg-black/15" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#020712] via-[#020712]/95 to-[#020712]/5" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-transparent to-[#020712]/30" />

          <div className="absolute left-[-180px] top-[150px] h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[130px]" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 lg:px-10">
            <div className="max-w-[720px]">
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-blue-400 sm:text-sm">
                Event Management • Event Solutions
              </p>

              <h1 className="text-[48px] font-black leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-[68px]">
                Your Event.
                <br />

                <span className="text-blue-500">One Partner.</span>

                <br />

                <span className="whitespace-nowrap">
                  Endless Possibilities.
                </span>
              </h1>

              <p className="mt-8 max-w-[650px] text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
                ADE Productions manages your entire event from A to Z — from
                planning and supplier coordination to production and flawless
                on-site execution.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#services"
                  className="group flex items-center justify-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-bold shadow-[0_12px_35px_rgba(37,99,235,0.3)] transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
                >
                  Explore Our Services

                  <span className="transition group-hover:translate-x-1">→</span>
                </a>

                <a
                  href="#contact"
                  className="flex items-center justify-center gap-3 rounded-full border border-white/50 bg-black/20 px-8 py-4 font-bold backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L9 10.5a16 16 0 0 0 4.5 4.5l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6a2 2 0 0 1 1.7 2Z" />
                  </svg>

                  Start Your Event
                </a>
              </div>

              <div className="mt-12 grid grid-cols-2 border-t border-white/15 pt-7 sm:grid-cols-4">
                {heroFeatures.map((item, index) => (
                  <div
                    key={item.title}
                    className={`flex items-start gap-3 py-3 ${
                      index !== heroFeatures.length - 1
                        ? "sm:border-r sm:border-white/15"
                        : ""
                    } ${index > 0 ? "sm:pl-5" : ""}`}
                  >
                    <div className="shrink-0 text-blue-500">{item.icon}</div>

                    <div>
                      <p className="font-bold text-white">{item.title}</p>

                      <p className="mt-1 text-sm text-gray-400">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          
        </section>

        {/* WHY ADE */}
        <section id="why-ade" className="bg-[#0a1423] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
                  Why ADE
                </p>

                <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
                  One Team Managing
                  <br />
                  Every Detail
                </h2>
              </div>

              <p className="text-lg leading-8 text-gray-300">
                Instead of dealing with multiple suppliers, timelines, and
                teams, you deal with one trusted partner. ADE Productions
                coordinates every service and manages the complete event
                experience from start to finish.
              </p>
            </div>

            <div className="mt-16 grid gap-7 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "One Point of Contact",
                  text: "You communicate with one team while we manage every supplier, partner, and production requirement.",
                },
                {
                  number: "02",
                  title: "Complete Coordination",
                  text: "We manage schedules, logistics, suppliers, guests, and production so every detail works together.",
                },
                {
                  number: "03",
                  title: "Stress-Free Execution",
                  text: "Our on-site team handles the event day while you focus on your guests and enjoy the experience.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:bg-blue-500/[0.05]"
                >
                  <p className="text-4xl font-black text-blue-500">
                    {item.number}
                  </p>

                  <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>

                  <p className="mt-4 leading-7 text-gray-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW WE WORK */}
        <section className="bg-[#050b14] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <p className="text-center text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
              How We Work
            </p>

            <h2 className="mt-5 text-center text-4xl font-black md:text-5xl">
              From Your Idea to Event Day
            </h2>

            <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
              {[
                ["STEP 01", "Discover", "We understand your vision, objectives, audience, and budget."],
                ["STEP 02", "Plan", "We build the concept, timeline, supplier plan, and complete roadmap."],
                ["STEP 03", "Coordinate", "We manage suppliers, logistics, guests, setup, and every moving part."],
                ["STEP 04", "Execute", "Our team delivers and manages the event from opening to closing."],
              ].map(([step, title, text]) => (
                <div
                  key={step}
                  className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition hover:border-blue-500/50"
                >
                  <p className="text-sm font-bold text-blue-500">{step}</p>

                  <h3 className="mt-5 text-2xl font-bold">{title}</h3>

                  <p className="mt-4 leading-7 text-gray-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="bg-[#0a1423] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <p className="text-center text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
              What We Do
            </p>

            <h2 className="mt-5 text-center text-4xl font-black md:text-5xl">
              Complete Event Solutions
              <br />
              from A to Z
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-gray-400">
              One team managing every stage of your event, so you only deal
              with one trusted partner.
            </p>

            <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.number}
                  className="rounded-3xl border border-white/10 bg-[#101c30] p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500/60"
                >
                  <p className="font-bold text-blue-500">{service.number}</p>

                  <h3 className="mt-4 text-2xl font-bold">{service.title}</h3>

                  <p className="mt-4 leading-7 text-gray-300">{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

 {/* FEATURED EVENT */}
<section id="portfolio" className="bg-[#050b14] px-6 py-24">
  <div className="mx-auto max-w-7xl">
    <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
      Featured Event
    </p>

    <h2 className="mt-5 max-w-3xl text-4xl font-black md:text-5xl">
      CMIS Graduation Ceremony
    </h2>

    <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
      A complete graduation experience managed and produced by ADE Productions.
    </p>

    <div className="group relative mt-14 min-h-[520px] overflow-hidden rounded-3xl border border-white/10">
      <div
        className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
        style={{
          backgroundImage: "url('/event1.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 z-10 p-8 md:p-12">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
          Graduation Event
        </p>

        <h3 className="mt-3 text-3xl font-black md:text-5xl">
          CMIS Graduation Ceremony
        </h3>

        <p className="mt-4 max-w-2xl text-base leading-7 text-gray-300 md:text-lg">
          From planning and supplier coordination to stage production and event
          execution, ADE Productions managed the experience from A to Z.
        </p>
      </div>
    </div>
  </div>
</section>
{/* CONTACT */}
<section id="contact" className="bg-[#08111f] px-6 py-24">
  <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2">

    {/* Left */}
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
        Contact Us
      </p>

      <h2 className="mt-5 text-4xl font-black md:text-5xl">
        Let's Create Your Next Event
      </h2>

      <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
        Whether you're planning a graduation, corporate event, or a private
        celebration, ADE Productions is ready to manage every detail from A to Z.
      </p>

      <div className="mt-10 space-y-5">

        {/* Calls */}
        <a
          href="tel:+201019721981"
          className="block rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-blue-500 hover:bg-white/10"
        >
          <p className="text-sm font-semibold text-blue-400">
            Calls
          </p>

          <p className="mt-2 text-xl font-bold text-white">
            01019721981
          </p>

          <p className="text-gray-400">
            Tap to call us instantly.
          </p>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/201142414301"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-green-500 hover:bg-white/10"
        >
          <p className="text-sm font-semibold text-green-400">
            WhatsApp
          </p>

          <p className="mt-2 text-xl font-bold text-white">
            01142414301
          </p>

          <p className="text-gray-400">
            Tap to chat with us instantly.
          </p>
        </a>

        {/* Email */}
        <a
          href="mailto:adeevents7@gmail.com"
          className="block rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-500 hover:bg-white/10"
        >
          <p className="text-sm font-semibold text-cyan-400">
            Email
          </p>

          <p className="mt-2 text-xl font-bold break-all text-white">
            adeevents7@gmail.com
          </p>

          <p className="text-gray-400">
            Tap to send us an email.
          </p>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/adeevents.eg?igsh=YXhsMzU4ODhwZnBi"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-pink-500 hover:bg-white/10"
        >
          <p className="text-sm font-semibold text-pink-400">
            Instagram
          </p>

          <p className="mt-2 text-xl font-bold text-white">
            @adeevents.eg
          </p>

          <p className="text-gray-400">
            Follow our latest events.
          </p>
        </a>

      </div>
    </div>

    {/* Right */}
    <div className="self-start rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">

      <h3 className="text-3xl font-black">
        Ready to Start?
      </h3>

      <p className="mt-4 leading-7 text-gray-400">
        Contact us today and let's make your event unforgettable.
      </p>

      <div className="mt-8 space-y-4">

        <a
          href="https://wa.me/201142414301"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl bg-green-600 px-6 py-4 text-center font-bold text-white transition hover:bg-green-700"
        >
          Chat on WhatsApp
        </a>

        <a
          href="tel:+201019721981"
          className="block rounded-xl border border-white/10 px-6 py-4 text-center font-bold transition hover:bg-white/10"
        >
          Call Us
        </a>

      </div>

    </div>

  </div>
</section>

{/* FOOTER */}
<footer className="border-t border-white/10 bg-[#050B16] px-6 py-12">
  <div className="mx-auto flex max-w-7xl flex-col items-center text-center">

    <Image
      src="/logo-white.png"
      alt="ADE Productions Logo"
      width={85}
      height={85}
      className="mb-5"
    />

    <h3 className="text-2xl font-black text-white">
      ADE Productions
    </h3>

    <p className="mt-3 max-w-md text-gray-400">
      Creating unforgettable experiences.
    </p>

    <div className="mt-8 w-full border-t border-white/10 pt-6">
      <p className="text-sm text-gray-500">
        © 2025 ADE Productions. All Rights Reserved.
      </p>
    </div>

  </div>
</footer>
      </main>
    </>
  );
}