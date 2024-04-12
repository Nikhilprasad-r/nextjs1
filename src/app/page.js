import Accordion from "@/components/Accordian";
import Demo from "@/components/Demo";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Idea from "@/components/Idea";

import Navbar from "@/components/Navbar";
import Navbarmobile from "@/components/Navbarmobile";
import Roi from "@/components/Roi";

import Usecase from "@/components/Usecase";
import VerticalCard from "@/components/VerticalCard";

export default function Home() {
  return (
    <main className="pt-14 grid">
      <Navbar />

      <Hero />
      <Usecase />

      <Accordion />
      <Footer />
    </main>
  );
}
