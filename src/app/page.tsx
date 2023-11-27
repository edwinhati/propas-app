import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import News from "@/components/News";

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <News />
      <Footer />
    </>
  );
}
