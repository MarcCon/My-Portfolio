import Link from "next/link";
import Header from "../components/Header";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import "../styles/globals.css";
import Service from "@/components/Service";
import ContactForm from "@/components/Contact";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div className="flex flex-col gap-32 max-w-5xl mx-auto px-8 md:px-4">
      <Header />
      <About />
      <Service />
      <Testimonial />
      <Portfolio />
      <ContactForm />
    </div>
  );
}
