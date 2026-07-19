import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#08111f]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-28 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#home" className="flex items-center">
          <Image
            src="/logo-white.png"
            alt="ADE Productions"
            width={360}
            height={160}
            priority
            className="h-auto w-[230px] scale-125 object-contain lg:w-[260px]"
          />
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          <a
            href="#home"
            className="font-semibold text-white transition hover:text-blue-400"
          >
            Home
          </a>

          <a
            href="#services"
            className="font-semibold text-white transition hover:text-blue-400"
          >
            Services
          </a>

          <a
            href="#portfolio"
            className="font-semibold text-white transition hover:text-blue-400"
          >
            Events
          </a>

          <a
            href="#gallery"
            className="font-semibold text-white transition hover:text-blue-400"
          >
            Gallery
          </a>

          <a
            href="#contact"
            className="font-semibold text-white transition hover:text-blue-400"
          >
            Contact
          </a>

          <a
            href="#contact"
            className="rounded-full bg-blue-600 px-7 py-3 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
          >
            Book Now
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white lg:hidden"
        >
          Book Now
        </a>
      </div>
    </nav>
  );
}