import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";


const slides = [
  {
    name: "Tecnología de Vanguardia",
    desc: "Insalud utiliza equipos de ondas de choque que estimulan la circulación sanguínea y promueven erecciones más firmes y duraderas.",
  },
  {
    name: "Procedimiento No Invasivo y Seguro",
    desc: "La terapia se realiza en sesiones de 15 a 20 minutos, una vez por semana, aplicando las ondas en la parte superior del pene hasta llegar al escroto.",
  },
  {
    name: "Resultados Comprobados",
    desc: "Con más de 50,000 tratamientos satisfactorios y 10 años de experiencia médica, Insalud ha demostrado la eficacia de esta terapia en la mejora de la función eréctil. ",
  },
  {
    name: "Tecnología de Vanguardia",
    desc: "Insalud utiliza equipos de ondas de choque que estimulan la circulación sanguínea y promueven erecciones más firmes y duraderas.",
  },
  {
    name: "Procedimiento No Invasivo y Seguro",
    desc: "La terapia se realiza en sesiones de 15 a 20 minutos, una vez por semana, aplicando las ondas en la parte superior del pene hasta llegar al escroto.",
  },
  {
    name: "Resultados Comprobados",
    desc: "Con más de 50,000 tratamientos satisfactorios y 10 años de experiencia médica, Insalud ha demostrado la eficacia de esta terapia en la mejora de la función eréctil. ",
  },
  {
    name: "Tecnología de Vanguardia",
    desc: "Insalud utiliza equipos de ondas de choque que estimulan la circulación sanguínea y promueven erecciones más firmes y duraderas.",
  },
  {
    name: "Procedimiento No Invasivo y Seguro",
    desc: "La terapia se realiza en sesiones de 15 a 20 minutos, una vez por semana, aplicando las ondas en la parte superior del pene hasta llegar al escroto.",
  },
  {
    name: "Resultados Comprobados",
    desc: "Con más de 50,000 tratamientos satisfactorios y 10 años de experiencia médica, Insalud ha demostrado la eficacia de esta terapia en la mejora de la función eréctil. ",
  },
  {
    name: "Tecnología de Vanguardia",
    desc: "Insalud utiliza equipos de ondas de choque que estimulan la circulación sanguínea y promueven erecciones más firmes y duraderas.",
  },
  {
    name: "Procedimiento No Invasivo y Seguro",
    desc: "La terapia se realiza en sesiones de 15 a 20 minutos, una vez por semana, aplicando las ondas en la parte superior del pene hasta llegar al escroto.",
  },
  {
    name: "Resultados Comprobados",
    desc: "Con más de 50,000 tratamientos satisfactorios y 10 años de experiencia médica, Insalud ha demostrado la eficacia de esta terapia en la mejora de la función eréctil. ",
  },
  {
    name: "Tecnología de Vanguardia",
    desc: "Insalud utiliza equipos de ondas de choque que estimulan la circulación sanguínea y promueven erecciones más firmes y duraderas.",
  },
];

export const MainBenefits = () => {
    
    const [currentSlide, setCurrentSlide] = useState(0)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
      loop: true,
      slides: { perView: 1, spacing: 16 },
      breakpoints: {
        "(min-width: 640px)": { slides: { perView: 2, spacing: 24 } },
        "(min-width: 1024px)": { slides: { perView: 3, spacing: 32 } },
      },
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel) // opcional, para dot indicators
      },
    })

  return (
    <div className="container mx-auto px-4 max-w-[1400px]  pb-12">
  <h3 className="text-3xl md:text-4xl text-in-blue-light font-medium text-center mb-8">
    Beneficios
  </h3>

  <div className="relative px-4"> {/* <-- padding lateral para que no se corte la sombra */}
    <div
      ref={sliderRef}
      className="keen-slider overflow-visible" // <--- Permitir sombras
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className="keen-slider__slide my-8 flex flex-col  text-center sm:text-left p-6 bg-white rounded-lg"
        >
          <h4 className="text-2xl lg:text-3xl lg:h-20 text-in-base font-medium mb-2 h-16">
            {slide.name}
          </h4>
          <p className="hidden">
            {currentSlide}
          </p>
          <p className="text-in-base">{slide.desc}</p>
        </div>
      ))}

      {/* Flechas */}


      <div className="flex absolute md:left-16 md:-bottom-0 left-1/2 -translate-x-1/2 -bottom-0 gap-8">
      <button
        onClick={() => instanceRef.current?.prev()}
        className="rotate-180 z-10 cursor-pointer"
      >
        <img src="/images/iconos/arrow-next-blue.svg" alt="flecha siguiente" />
      </button>
      <button
        onClick={() => instanceRef.current?.next()}
        className="z-10 cursor-pointer"
      >
        <img src="/images/iconos/arrow-next-blue.svg" alt="flecha siguiente" />
      </button>
      </div>
      
    </div>
  </div>
</div>

  );
};
