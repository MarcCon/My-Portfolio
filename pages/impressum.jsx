import React from "react";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Footer from "@/components/Footer";

function Impressum() {
  return (
    <>
      <div className="bg-darkblue h-screen text-white flex flex-col">
        <Navbar />
        <div className="flex justify-center flex-grow">
          <div className=" content-center text-center max-w-5xl">
            <h1 className="text-3xl font-bold pb-8">Impressum</h1>

            <p>
              Marc-Constantin Enke
              <br />
              Schillerstr. 3<br />
              06114 Halle (Saale)
            </p>

            <h2>Kontakt</h2>
            <p>
              Telefon: 0152 08773445
              <br />
              E-Mail: marc.enke@aol.de
            </p>
          </div>
        </div>
        <div className="bg-zinc-900">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Impressum;
