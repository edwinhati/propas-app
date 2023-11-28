"use client"
import { Fragment } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import News from "@/components/News";
import Hero from "@/components/Hero";
import { UserProvider } from "@/context";

export default function Home() {
  return (
    <Fragment>
      <UserProvider>
        <Header />
        <Carousel />
        <Hero />
        <News />
        <Footer />
      </UserProvider>
    </Fragment>
  );
}
