import Link from "next/link";
import Header from "../components/Header";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import "../styles/globals.css";
import Service from "@/components/Service";
import BlogTestimonial from "@/components/BlogTestimonial";
import TechStack from "@/components/TechStack";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col gap-12  max-w-4xl  mx-auto px-8 md:px-4">
      <div className="mb-16">
        <Header />
      </div>
      <Portfolio />
      <About />
      <Service />
      <BlogTestimonial />
      <TechStack />
      <ContactForm />
    </div>
  );
}
