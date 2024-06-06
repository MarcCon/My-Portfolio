import Link from "next/link";
import Header from "../components/Header";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import "../styles/globals.css";
import Service from "@/components/Service";
import ContactForm from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-32 max-w-5xl mx-auto">
      <Header />
      <About />
      <Service />
      <Portfolio />
      <ContactForm />
    </div>
  );
}
