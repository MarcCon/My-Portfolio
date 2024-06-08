"use client";
import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [successAlert, setSuccessAlert] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    emailjs.init("4IJZ6aZDzSTGDMYIG");
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pm2gp11",
        "template_yaczkb4",
        formRef.current,
        "4IJZ6aZDzSTGDMYIG",
        {
          email_from: "kontakt@marcenke.de",
        }
      )
      .then(
        (result) => {
          setSuccessAlert(true);
        },
        (error) => {
          alert("Es gab einen Fehler");
        }
      );
  };

  return (
    <div className="max-w-3xl">
      <h2 className="text-4xl text-white mb-1">Schreib mir einfach</h2>
      <h2 className="text-xl text-neutral-400 mb-8">
        Ob spannende Projekte oder einfach nur ein Plausch über aktuelle
        Tech-Trends. Ich freu mich auf deine Nachricht!
      </h2>
      <form ref={formRef} onSubmit={sendEmail}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-neutral-400 text-sm mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="w-full px-3 py-2 text-white bg-transparent border border-neutral-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="reply_to"
            className="block text-neutral-400 text-sm mb-2"
          >
            E-Mail
          </label>
          <input
            type="email"
            id="reply_to"
            name="reply_to"
            className="w-full px-3 py-2 text-white bg-transparent border border-neutral-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-300"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-neutral-400 text-sm mb-2"
          >
            Nachricht
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full h-32 px-3 py-2 text-white bg-transparent border border-neutral-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-300"
            placeholder="Schreibe mir..."
          />
        </div>
        <div className="flex items-center gap-8 lg:gap-16">
          <button
            type="submit"
            className="border border-neutral-300 px-4 py-2 text-neutral-400 hover:text-white hover:border-white rounded-lg"
          >
            Senden
          </button>
          {successAlert && (
            <div className="rounded-xl bg-green-600 px-4 py-2 text-lg text-white md:text-xl">
              Email gesendet!
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
