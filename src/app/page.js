'use client'
import CarditemsHome from "./components/CarditemsHome";
import HeroSection from "./components/HeroSection";
import NewArrivalHome from "./components/NewArrivalHome";
import NewArrivalitems from "./components/NewArrivalitems";
import TopCategory from "./components/TopCategory";
import TreeRunnerNZ from "./components/TreeRunnerNZ";


export default function Home() {
    
  return (
    <>
    <section className={`bg-[#ECE9E2]`}>
    <HeroSection/>
    <TopCategory/>
    <NewArrivalHome/>
    <TreeRunnerNZ/>
    <NewArrivalitems/>
    <CarditemsHome/>
    </section>
    </>
  );
}
