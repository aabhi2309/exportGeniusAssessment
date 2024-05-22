import ExportData from "@/components/ExportData";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Product from "@/components/Product";
import Scroller from "@/components/Scroller";
import Services from "@/components/Services";
import VideoComp from "@/components/VideoComp";

export default function Home() {
  return (
    <main className="mt-10 flex flex-col gap-20">
      <Hero/>
      <div className='border-b border-gray4'/>
      <VideoComp/>
      <Scroller/>
      <ExportData/>
      <Services/>
      <Product/>
      <Footer/>
    </main>
  );
}
