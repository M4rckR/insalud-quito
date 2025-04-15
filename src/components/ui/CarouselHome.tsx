import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

const slides = [
  "/images/carrusel-main/item-1.png",
  "/images/carrusel-main/item-1.png",
  "/images/carrusel-main/item-1.png",
];

export const CarouselHome = () => {
  const [selectedIndex, SetselectedIndex] = useState<number>(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
    }),
  ]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
      }
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    SetselectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative max-w-[560px] max-h-[560px]">
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full flex justify-center items-center"
            >
              <img
                src={slide}
                alt={`imagen carrusel ${index}`}
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Indicadores del carrusel */}
        <div className="relative lg:absolute lg:bottom-4 lg:right-0 lg:-translate-x-1/2 flex gap-2 mt-2 justify-center lg:justify-end">
            {slides.map((_, index) => (
            <button
                key={index}
                type="button"
                onClick={() => scrollTo(index)}
                onMouseDown={(e) => e.preventDefault()}
                className={`w-6 h-3 rounded-full bg-in-blue  cursor-pointer ${
                selectedIndex === index ? "bg-in-blue-light lg:bg-white" : ""
                }`}
            ></button>
            ))}
        </div>
    </div>
  );
};
