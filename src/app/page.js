import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Usecases from "@/components/Usecases";
import VerticalCard from "@/components/VerticalCard";

export default function Home() {
  return (
    <main className="pt-10">
      <Navbar />
      <Hero />
      {/* <Usecases />

      <div className="flex justify-around content-between">
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
      </div> */}
      <Footer />
    </main>
  );
}
