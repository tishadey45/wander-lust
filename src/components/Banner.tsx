import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const searchFields = [
  { id: "location", label: "Location", placeholder: "Address, City Or Zip" },
  { id: "date", label: "Date/Duration", placeholder: "Anytime, 7 days" },
  { id: "budget", label: "Budget", placeholder: "$0 to $500" },
  { id: "people", label: "People", placeholder: "1-10" },
];

function Banner() {
  return (
    <section className="relative flex min-h-[600px] flex-col justify-center lg:min-h-[calc(100vh-3.5rem)]">
      {/* Background image (already includes the dark overlay) */}
      <Image
        src="/assets/Banner.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-4 pt-16 pb-40 text-center">
        <h1 className="text-4xl leading-tight font-light text-white md:text-6xl">
          Discover Your
          <br />
          Next Adventure
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/90 md:text-base">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 rounded-md border border-white/60 bg-[#24A3C6] px-6 py-3 text-xs font-semibold tracking-wider text-white uppercase transition-colors hover:bg-[#1c8cab]"
          >
            Explore Now
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/destinations"
            className="inline-flex items-center rounded-md border border-white/70 bg-white/20 px-6 py-3 text-xs font-semibold tracking-wider text-white uppercase backdrop-blur-sm transition-colors hover:bg-white/30"
          >
            View Destination
          </Link>
        </div>
      </div>

      {/* Search bar pinned to the bottom */}
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/20 bg-black/30 backdrop-blur-md">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(4,1fr)_12rem]">
          {searchFields.map((field, index) => (
            <div
              key={field.id}
              className={`flex flex-col gap-0.5 px-5 py-3 md:px-6 ${
                index > 0 ? "border-t border-white/15 md:border-t-0 md:border-l" : ""
              }`}
            >
              <label
                htmlFor={field.id}
                className="text-xs font-bold text-white"
              >
                {field.label}
              </label>
              <input
                id={field.id}
                type="text"
                placeholder={field.placeholder}
                className="w-full bg-transparent text-sm text-white placeholder:text-white/60 outline-none"
              />
            </div>
          ))}
          <button
            type="button"
            className="bg-[#24A3C6] px-6 py-4 text-sm font-semibold tracking-wider text-white uppercase transition-colors hover:bg-[#1c8cab] md:border-t-0 md:border-l lg:border-l-0"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
