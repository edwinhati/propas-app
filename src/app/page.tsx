"use client";
import { Fragment } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import News from "@/components/News";
import Hero from "@/components/Hero";
import { useUser } from "@/context";
import Loading from "@/components/Loading";

export default function Home() {
  const { loading } = useUser();
  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Carousel />
          <Hero />
          <News />
          <Footer />
        </>
      )}
    </Fragment>
  );
}
