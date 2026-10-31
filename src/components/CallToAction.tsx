import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function CallToAction() {
  return (
    <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden py-16 md:min-h-[480px] md:py-20">
      {/* Background image */}
      <Image
        src="/assets/CTA.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <h2 className="text-3xl leading-tight font-light text-white md:text-5xl">
          Ready To Start Your Journey?
        </h2>
        <p className="mt-4 max-w-xl text-xs leading-relaxed text-white/85 md:text-sm">
          Join thousands of travelers who have discovered the world with us
        </p>
        <Link
          href="/destinations"
          className="mt-8 inline-flex items-center gap-3 rounded-md bg-white px-7 py-3.5 text-xs font-semibold tracking-wider text-gray-900 uppercase shadow-lg transition-colors hover:bg-gray-100"
        >
          Book Your Trip Today
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

export default CallToAction;
