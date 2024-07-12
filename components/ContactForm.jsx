import React from "react";

const ContactForm = () => {
  return (
    <div className="mx-auto max-w-5xl p-4 sm:p-8 bg-fillGray rounded-xl border border-borderGray">
      <h2 className="text-2xl text-white">Schreib mir einfach.</h2>
      <p className="text-lg text-neutral-400 mb-6 sm:mb-12">
        Ob spannende Projekte oder einfach nur ein Plausch über aktuelle
        Tech-Trends. Ich freu mich auf deine Nachricht!
      </p>
      <form className="mt-4 grid grid-cols-1 gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 bg-neutral-800 text-white rounded-lg border border-neutral-700 outline-none focus:border-white"
          />
          <input
            type="email"
            placeholder="E-Mail"
            className="w-full p-2 bg-neutral-800 text-white rounded-lg border border-neutral-700 outline-none focus:border-white"
          />
        </div>
        <textarea
          placeholder="Nachricht"
          className="w-full p-2 bg-neutral-800 text-white rounded-lg border border-neutral-700 outline-none focus:border-white"
          rows="4"
        ></textarea>
        <button className="bg-neutral-800 max-w-xs text-white px-4 py-2 rounded-lg">
          Senden
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
