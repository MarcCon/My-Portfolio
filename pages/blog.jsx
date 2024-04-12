import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import Footer from "@/components/Footer";
import BlogListe from "@/components/BlogListe";

export default function Blog() {
  return (
    <>
      <Navbar />
      <div className="bg-darkblue">
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <div>
              <h1 className="text-white lg:text-4xl text-3xl text-center pt-16 font-extrabold">
                Blog{" "}
              </h1>
              <h2 className="font-thin px-4 text-gray-300 text-lg lg:text-2xl text-center pt-4 mb-16">
                Hier teile ich meine Gedanken zu aktuellen Trends und
                Technologien{" "}
              </h2>
            </div>
            <BlogListe />
          </div>
          <div className="bg-zinc-900">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
