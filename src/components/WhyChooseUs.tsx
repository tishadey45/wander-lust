import { Headset, Map, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    description:
      "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
  },
  {
    icon: Map,
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    description:
      "Round-the-clock customer service to assist you wherever your journey takes you.",
  },
];

function WhyChooseUs() {
  return (
    <div className="bg-white py-4">
      <section className="bg-[#E8F6F9] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-3xl font-light text-gray-900 md:text-4xl">
              Why Choose Wanderlust
            </h2>
            <p className="mt-3 text-xs text-gray-500 md:text-sm">
              Your trusted partner for exceptional travel experiences.
            </p>
          </div>

          {/* Feature cards */}
          <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-lg border border-black/5 bg-white p-6 shadow-sm md:p-7"
                >
                  <Icon className="size-8 text-[#24A3C6]" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-normal text-gray-900 md:text-xl">
                    {feature.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-gray-500 md:text-[13px]">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhyChooseUs;
