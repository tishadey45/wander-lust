import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ImageIcon } from "lucide-react";

const testimonials = [
  {
    quote:
      "The Bali Trip Was Absolutely Magical. Every Detail Was Perfect From The Resorts To The Cultural Experiences. It Was Truly Unforgettable.",
    name: "Michael Chen",
    location: "Singapore",
  },
  {
    quote:
      "Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!",
    name: "Sarah Johnson",
    location: "New York, USA",
  },
  {
    quote:
      "Paris Was A Dream Come True. From The Eiffel Tower To The Little Cafes, Every Moment Felt Like A Scene From A Movie. Absolutely Loved It.",
    name: "Emily Rodriguez",
    location: "London, UK",
  },
  {
    quote:
      "The Safari Was A Once-in-a-lifetime Experience. We Saw The Big Five And The Sunsets Were Unforgettable. Worth Every Penny.",
    name: "David Kimani",
    location: "Toronto, Canada",
  },
];

function Testimonials() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Carousel className="relative">
          {/* Header with carousel controls */}
          <div className="flex items-start justify-between gap-6">
            <div>
              <h2 className="text-3xl font-light text-gray-900 md:text-4xl">
                What Travelers Say
              </h2>
              <p className="mt-3 text-xs text-gray-500 md:text-sm">
                Real experiences from our happy travelers
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <CarouselPrevious className="static" size="icon-lg" />
              <CarouselNext className="static" size="icon-lg" />
            </div>
          </div>

          {/* Testimonial slides */}
          <CarouselContent className="mt-10 gap-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.name}
                className="basis-full md:basis-1/2"
              >
                <div className="flex items-start justify-between gap-5">
                  <blockquote className="min-w-0">
                    <p className="text-sm leading-relaxed text-gray-800 md:text-base">
                      {`"${testimonial.quote}"`}
                    </p>
                    <footer className="mt-5">
                      <span className="text-sm text-[#24A3C6]">
                        — {testimonial.name}
                      </span>
                      <span className="mt-1 block text-xs text-gray-400">
                        {testimonial.location}
                      </span>
                    </footer>
                  </blockquote>

                  {/* Portrait slot: drop an image into public/assets and
                      replace this placeholder div (e.g. next/image fill). */}
                  <div className="relative aspect-[4/5] w-32 shrink-0 rounded-xl border border-dashed border-gray-300 bg-gray-50 md:w-40">
                    <ImageIcon
                      className="absolute inset-0 m-auto size-6 text-gray-300"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonials;
