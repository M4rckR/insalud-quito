import { TreatmentSection } from "@/components/TreatmentSection"
import { MainHero } from "../components/MainHero"
import { MainContact } from "@/components/MainContact"
import { MainBenefits } from "@/components/MainBenefits"

export const Home = () => {
  return (
    <>
        <MainHero/>
        <TreatmentSection/>
        <MainContact/>
        <MainBenefits/>
    </>
  )
}
