import { Outlet } from "react-router-dom"
import { MainNav } from "../components/MainNav"

export const MainLayout = () => {
  return (
    <div className="relative">

        {/* Degradado de fondo */}
        <div className="absolute top-0 left-0 right-0 w-full inset-0 h-[300px] bg-gradient-to-b from-in-cyan to-in-white -z-10"></div>

        {/* Header */}
        <header className="pt-6">
            <MainNav/>
        </header>

        <main>
            <Outlet/>
        </main>


    </div>
  )
}
