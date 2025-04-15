import { Button } from "./ui/Button"
import { CarouselHome } from "./ui/CarouselHome"

export const MainHero = () => {
  return (
    <section className="container mx-auto px-4 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-6 gap-x-6">
            <div className="flex flex-col gap-2 md:gap-4">
                <h2 className="text-center md:text-left text-3xl md:text-4xl lg:text-5xl text-in-blue px-6 md:px-0">
                    Recupera tu {" "}
                    <span className="text-in-blue-light font-bold ">potencia sexual</span>  
                    {" "}sin{" "}  
                    <span className="font-bold">pastillas</span> 
                    {" "}ni{" "} 
                    <span className="font-bold">cirugía</span>
                    </h2>
                <div className="flex justify-center md:justify-start">
                    <Button>Agendar una cita</Button>
                </div>
            </div>
            <div className="flex justify-center md:justify-end">
                <CarouselHome/>
            </div>
        </div>
    </section>
  )
}
