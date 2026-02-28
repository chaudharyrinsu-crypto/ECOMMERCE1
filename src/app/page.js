'use client'
import CarditemsHome from "./components/CarditemsHome";
import CollectionBox from "./components/CollectionBox";
import HeroSection from "./components/HeroSection";
import MensWomensNewarrivalCard from "./components/MensWomensNewarrivalCard";
import NewArrivalHome from "./components/NewArrivalHome";
import NewArrivalitems from "./components/NewArrivalitems";
import TopCategory from "./components/TopCategory";
import TreeRunnerNZ from "./components/TreeRunnerNZ";
import TreeRunnerNZHeadin from "./components/TreeRunnerNZHeadin";


export default function Home() {
    
  return (
    <>
    <section className={`bg-[#ECE9E2]`}>
    <HeroSection/>
    <TopCategory/>
    <NewArrivalHome/>
    <TreeRunnerNZHeadin/>
    <MensWomensNewarrivalCard/>
    <CarditemsHome/>
    <NewArrivalitems/>
    {/* <TreeRunnerNZ/> */}
    <CollectionBox/>
    </section>
    </>
  );
}
