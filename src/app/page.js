import Contact from "@/components/Home/Contact";
import FeedbackSection from "@/components/Home/FeedbackSection";
import Hero from "@/components/Home/Hero";
import Mbbsabroad from "@/components/Home/Mbbsabroad";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar/>
      <Hero/>
      <Mbbsabroad/>
      <FeedbackSection/>
      <Contact/>
      <Footer/>
    </div>
  );
}
