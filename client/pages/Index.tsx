import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="bg-gray-950">
      <Navbar />
      <Hero />
      <Work />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
