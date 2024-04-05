import React from "react";
import Navbar from "../components/Navbar";

function Impressum() {
  return (
    <div className="bg-darkblue h-screen text-white">
      <Navbar />
      <div className="flex justify-center">
        <div className="pt-44 content-center text-center w-[800px]">
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
    </div>
  );
}

export default Impressum;
