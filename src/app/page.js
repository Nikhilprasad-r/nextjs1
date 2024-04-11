import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Midcard from "@/components/Midcard";
import Navbar from "@/components/Navbar";
import Usecases from "@/components/Usecases";
import Usercase from "@/components/Usercase";
import VerticalCard from "@/components/VerticalCard";

export default function Home() {
  return (
    <main className="pt-14 grid">
      <Navbar />
      <Midcard />
      {/* <Hero />
      <Usercase /> */}
      {/*  
      <div className="flex justify-around content-between">
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
      </div> <Footer />
       */}
    </main>
  );
}
