import Banner from "@/components/Banner";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Travelers from "@/components/Travelers";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <WhyChooseUs />
      <Travelers />
      <CallToAction />
      <Footer />
    </>
  );
}
