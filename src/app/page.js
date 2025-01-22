import Image from "next/image";
import Navbar from "../components/module/navabar/Navbar";
import Story from "../components/Templates/index/Story";
import Footer from "../components/module/footer/Footer";
import Hero from "../components/Templates/index/Hero";
import BreadCrumb from "../components/module/breadcrumb/BreadCrumb";
import Link from "next/link";

export default function Home() {
  return (
    <div className="dark:bg-[#383A40]">   
      <Navbar />
      <BreadCrumb />
      <Story />

      <Hero />
      {/*Goto passeget panel  */}
      <div className="container bg-slate-400 py-6 text-center">
      <button className="bg-white py-4 rounded-md px-3" >
        <Link href={'passenger-panel'}> Go To passenger form</Link>
        
        </button>

      </div>
      {/* <PassengerPanel/> */}
      <Footer />
    </div>

  );
}
