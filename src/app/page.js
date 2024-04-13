import Accordion from "@/components/Accordian";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Usecase from "@/components/Usecase";

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
