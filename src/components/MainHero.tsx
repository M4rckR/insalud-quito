import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/Button";
import { CarouselHome } from "./ui/CarouselHome";

export const MainHero = () => {
  return (
    <section className="container mx-auto px-4 max-w-[1400px] mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-6 gap-x-6">
        <div className="flex flex-col gap-2 md:gap-4">
          <h2 className="text-center md:text-left text-3xl md:text-4xl lg:text-5xl text-in-blue px-6 md:px-0">
            Recupera tu{" "}
            <span className="text-in-blue-light font-bold ">
              potencia sexual
            </span>{" "}
            sin <span className="font-bold">pastillas</span> ni{" "}
            <span className="font-bold">cirugía</span>
          </h2>
          <div className="flex justify-center md:justify-start">
            <Button>Agendar una cita</Button>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <CarouselHome />
        </div>
        <div className="hidden space-y-2 pl-4 pt-2 md:-mt-26 lg:-mt-32 md:block">
          <div className="flex items-start justify-center md:justify-start gap-2">
            <img
              className="w-6 md:w-8"
              src="/images/iconos/quotes.png"
              alt="quotes"
            />
            <p className="text-sm text-in-blue font-medium pt-2 max-w-[450px]">
              Me hice el chequeo prostático en Insalud. Fue rápido, sencillo y  
              me dio tranquilidad. ¡Lo recomiendo a todos los hombres de mi
              edad!
            </p>
          </div>
          <div className="flex items-center gap-2 justify-center lg:justify-start lg:pl-6">
            <Avatar className="w-12 h-12">
              <AvatarImage src="/images/avatars/avatar-1.png" />
              <AvatarFallback>Juan</AvatarFallback>
            </Avatar>
            <div className="text-in-blue">
              <p className="p-0 font-semibold text-lg/6">Juan Colden</p>
              <p className="p-0 text-sm/4">52 años</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden space-y-2 pl-4 pt-4 mt-4">
        <div className="flex items-start justify-center gap-2">
          <img
            className="w-6 md:w-8"
            src="/images/iconos/quotes.png"
            alt="quotes"
          />
          <p className="text-sm text-in-blue font-medium pt-2 max-w-[450px]">
            Me hice el chequeo prostático en Insalud. Fue rápido, sencillo y me
            dio tranquilidad. ¡Lo recomiendo a todos los hombres de mi edad!
          </p>
        </div>
        <div className="flex items-center gap-2 justify-center lg:justify-start lg:pl-6">
          <Avatar className="w-12 h-12">
            <AvatarImage src="/images/avatars/avatar-1.png" />
            <AvatarFallback>Juan</AvatarFallback>
          </Avatar>
          <div className="text-in-blue">
            <p className="p-0 font-semibold text-lg/6">Juan Colden</p>
            <p className="p-0 text-sm/4">52 años</p>
          </div>
        </div>
      </div>
    </section>
  );
};
