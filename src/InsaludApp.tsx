import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { MainLayout } from "./layouts/MainLayout"
import 'keen-slider/keen-slider.min.css'


export const InsaludApp = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Home/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

