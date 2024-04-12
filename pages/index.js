// pages/index.js
import Link from "next/link";
import Header from "../components/Header";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import "../styles/globals.css";
import BlogCard from "@/components/BlogCard";
import BlogListe from "@/components/BlogListe";

export default function Home() {
  return (
    <>
      <div className="bg-darkblue">
        <div className="">
          <Header />
          <About />
          <div className="mx-auto text-center  max-w-5xl md:px-4 px-8  ">
            <h2 className="font-inter font-extrabold text-mypurple sm:text-2xl">
              Blog
            </h2>
            <h2 className="mb-8 md:mb-16 font-inter text-3xl font-extrabold text-white sm:text-4xl">
              Aktuelle Beiträge
            </h2>
          </div>
          <BlogListe />

          <Portfolio />
        </div>
        <div className="bg-zinc-900">
          <Footer />
        </div>
      </div>
    </>
  );
}
