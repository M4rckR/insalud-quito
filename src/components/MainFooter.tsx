export const MainFooter = () => {
  return (
    <div className="relative mt-80">
        <div className="absolute top-0 left-0 right-0 w-full inset-0 h-[200px] bg-gradient-to-t from-in-cyan to-in-white -z-10"></div>
        <div className="container mx-auto px-4 max-w-[1400px] ">
            <div className="flex gap-12">
                <div className="text-in-blue">
                    <img className="w-40 mb-4" src="/images/logos/logo-insalud.png" alt="logo insalud" />
                    <p className="font-semibold text-lg">Más de 5,000 tratamientos realizados con excelentes resultados.</p>
                    <p >Confía en la terapia que ha ayudado a miles de hombres a recuperar su confianza y bienestar sexual.</p>
                    <p>© 2025 All Rights Reserved.</p>
                </div>
                <div className="text-in-blue">
                    <p>Te espersamos en: </p>
                    <p>Joaquín José Orrantia González 125, <br /> Torre Médica Solaris - Oficina 404</p>
                    <p>Conversemos sobre tu caso</p>
                    <p>+593 99 424 2175 <br /> admision@insalud.ec</p>
                </div>
                <div>
                    <p className="mb-2">Síguenos y entérate primero</p>
                    <div className="flex gap-2">
                        <img className="w-6 h-6" src="/images/iconos/instagram.png" alt="logo instagram" />
                        <img className="w-6 h-6" src="/images/iconos/tiktok.png" alt="logo tiktok" />
                        <img className="w-6 h-6" src="/images/iconos/fb.png" alt="logo facebook" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
