// pages/index.js
import Link from "next/link";
import Header from "../components/Header";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import "../styles/globals.css";

export default function Home() {
  return (
    <>
      <div className="bg-darkblue">
        <div className="">
          <Header />
          <About />
          <Portfolio />
        </div>
        <div className="bg-zinc-900">
          <Footer />
        </div>
      </div>
    </>
  );
}
