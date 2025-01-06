import Contact from "@/components/Home/Contact";
import FeedbackSection from "@/components/Home/FeedbackSection";
import Hero from "@/components/Home/Hero";
import Mbbsabroad from "@/components/Home/Mbbsabroad";


export default function page() {
  return (
    <div className="w-full">
     
      <Hero/>
      <Mbbsabroad/>
      <FeedbackSection/>
      <Contact/>
      
    </div>
  );
}
