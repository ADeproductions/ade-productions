import Link from "next/link";

export default function CMISGraduationPage() {
  const driveLink =
    "https://drive.google.com/drive/folders/1oypqZVQTXD11rTdxbJqvqyUI5S1plxfS";

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Link
          href="/"
          className="text-blue-400 transition hover:text-white"
        >
          ← Back to Home
        </Link>

        <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-[#0B1220]">
          <img
            src="/event1.jpg"
            alt="CMIS Graduation Ceremony"
            className="h-[450px] w-full object-cover"
          />

          <div className="p-8 md:p-10">
            <p className="mb-3 uppercase tracking-[4px] text-blue-400">
              Featured Event
            </p>

            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              CMIS Graduation Ceremony
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-8 text-gray-300">
              ADE Productions proudly managed the CMIS Graduation Ceremony,
              delivering a complete event experience from planning and stage
              setup to production, coordination, photography, and unforgettable
              moments.
            </p>

            <div className="mb-10 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl bg-white/5 p-6">
                <h3 className="mb-2 font-bold">Event Type</h3>
                <p className="text-gray-400">Graduation Ceremony</p>
              </div>

              <div className="rounded-2xl bg-white/5 p-6">
                <h3 className="mb-2 font-bold">Location</h3>
                <p className="text-gray-400">Cairo, Egypt</p>
              </div>

              <div className="rounded-2xl bg-white/5 p-6">
                <h3 className="mb-2 font-bold">Organizer</h3>
                <p className="text-gray-400">ADE Productions</p>
              </div>
            </div>

            <div className="rounded-3xl border border-blue-500/30 bg-blue-600/20 p-8">
              <h2 className="mb-3 text-3xl font-bold">Event Photos</h2>

              <p className="mb-6 text-gray-300">
                Browse and download the complete CMIS Graduation gallery.
              </p>

              <a
                href={driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-500"
              >
                View Full Gallery
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}