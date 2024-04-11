import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

import Navbar from "@/components/Navbar";

import Usercase from "@/components/Usercase";
import VerticalCard from "@/components/VerticalCard";

export default function Home() {
  return (
    <main className="pt-14 grid">
      <Navbar />

      <Hero />
      <Usercase />
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
