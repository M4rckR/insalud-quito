

export const MainNav = () => {
  return (
    <header className="container mx-auto px-4 max-w-[1400px] mb-14">
      <section className="flex justify-between items-center ">
        <div className="flex items-center gap-2">
            <picture>
                <source srcSet="/images/logos/logo-insalud.webp" type="image/webp"/>
                <img className="max-w-24 md:max-w-36" src="/images/logos/logo-insalud.png" loading="lazy" alt="logo insalud" />  
            </picture>
            <div className="w-[1px] h-8 bg-in-blue md:hidden"></div>
            <div className="md:hidden flex flex-col justify-center items-center text-center text-sm font-semibold text-in-blue">
               <p className="leading-4">SEDE</p> 
               <p className="leading-4">Quito</p> 
            </div>  
        </div>

        <div className="flex gap-6 items-center text-in-blue font-semibold text-lg">
          <p className="hidden md:flex">Beneficios</p>
          <p className="hidden md:flex">Preguntas frecuentes</p>
          <div className="flex gap-6">
            <a href="">
              <img className="w-6" src="/images/iconos/instagram.png" alt="instagram insalud" />
            </a>
            <a href="">
              <img className="w-6" src="/images/iconos/tiktok.png" alt="tiktok insalud" />
            </a>
            <a href="">
              <img className="w-6" src="/images/iconos/fb.png" alt="facebook insalud" />
            </a>

          </div>

        </div>
      </section>
    </header>

  )
}
