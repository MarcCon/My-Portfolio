const ContactForm = () => {
  return (
    <div className="max-w-2xl">
      <h2 className="text-4xl text-white mb-1">Schreib mir einfach</h2>{" "}
      <h2 className="text-xl text-neutral-400 mb-8">
        Ob spannende Projekte oder einfach nur ein Plausch über aktuelle
        Tech-Trends. Ich freu mich auf deine Nachricht!
      </h2>{" "}
      <form className="">
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
            htmlFor="email"
            className="block text-neutral-400 text-sm mb-2"
          >
            E-Mail
          </label>
          <input
            type="email"
            name="email"
            className="w-full px-3 py-2 text-white bg-transparent border border-neutral-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-300"
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
            name="message"
            className="w-full h-32 px-3 py-2 text-white bg-transparent border border-neutral-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-300"
          />
        </div>
        <button
          type="submit"
          className="border border-neutral-300 px-4 py-2 text-neutral-400 hover:text-white hover:border-white rounded-lg"
        >
          Senden
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
