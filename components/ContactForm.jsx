"use client";
import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link as ScrollLink } from "react-scroll";

const ContactForm = () => {
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
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
          setErrorAlert(false);
          formRef.current.reset();
        },
        (error) => {
          setSuccessAlert(false);
          setErrorAlert(true);
        }
      );
  };

  return (
    <div
      id="contact"
      className="mx-auto max-w-5xl p-4 sm:p-8 bg-fillGray rounded-xl border border-borderGray"
    >
      <h2 className="text-2xl text-white">Just write me.</h2>
      <p className="md:text-lg text-base text-neutral-400 mb-6 sm:mb-12">
        Whether exciting projects or just a chat about current tech trends. I
        look forward to hearing from you!
      </p>
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="mt-4 grid md:grid-cols-2 grid-cols-1 gap-4"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-neutral-400 text-sm mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full px-3 py-2 text-white bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-300"
            required
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
            className="w-full px-3 py-2 text-white bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-300"
            required
          />
        </div>
        <div className="mb-4 col-span-full">
          <label
            htmlFor="message"
            className="block text-neutral-400 text-sm mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full h-32 px-3 py-2 text-white bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-300"
            placeholder="Write me..."
            required
          />
        </div>
        <div className="flex items-center gap-8 lg:gap-16">
          <button
            type="submit"
            className="border border-neutral-300 px-8 py-2 text-neutral-400 hover:text-white hover:border-white rounded-lg "
          >
            Send
          </button>
          {successAlert && (
            <div className="rounded-xl bg-green-600 px-4 py-2 text-lg text-white md:text-xl">
              Email sent!
            </div>
          )}
          {errorAlert && (
            <div className="rounded-xl bg-red-600 px-4 py-2 text-lg text-white md:text-xl">
              There was an error, please try again.
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
