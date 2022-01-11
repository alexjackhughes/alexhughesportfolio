import { useState } from "react";
import Container from "./container";

const Subscription: React.FC = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const lowercaseEmail = email.toLowerCase();

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({ email: lowercaseEmail }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });

    await res.json();

    setSuccess(true);
  };

  return (
    <Container>
      <div className="flex flex-col mt-10 lg:mt-32 text-center md:mx-10 lg:mx-32">
        <h3 className="text-4xl lg:text-6xl mb-6 leading-snug font-bold">
          What next?
        </h3>
        <p className="text-sky-100 text-xl mb-5">
          A little less than a decade ago I quit my job, spent my last £100 on
          tinned food, and began freelancing full-time with zero clients. Jump
          forward a few years and I'm the CTO of Loopin, which in my not so
          humble opinion is about revolutionise how startups build culture
          remotely.
        </p>
        <p className="text-sky-100 text-xl mb-5">
          How? Well right now I'm in the middle of writing a book about exactly
          that; documenting everything from how I got my first client, to how to
          build a website with no experience.
        </p>
        <p className="text-sky-100 text-xl mb-14">
          It still needs a bit of polish, which is why I've decided to release
          it chapter by chapter to everyone who wants it - just subscribe below
          and I'll add you to the list!
        </p>
        <div className="bg-white rounded-xl py-8 px-8">
          {success ? (
            <>
              <h3 className="text-4xl mb-3 leading-snug font-bold text-sky-900">
                Wow, thanks!
              </h3>
              <p className="text-sky-900 text-xl poppins">
                Thanks a lot for subscribing, you'll be the first to recieve the
                very first chapter when it's hot off the press!
              </p>
            </>
          ) : (
            <>
              <h3 className="text-4xl mb-5 leading-snug font-bold text-sky-900">
                It's free! 📬
              </h3>
              <form onSubmit={onSubmit}>
                <input
                  value={email}
                  placeholder="johnny@cash.com"
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-sky-900 poppins border border-sky-800 p-3 rounded placeholder:text-sky-900 focus:outline focus:outline-offset-2 focus:outline-1 focus:outline-sky-900 w-full"
                />
                <button
                  className="bg-sky-800 p-3 mt-6 rounded-lg text-white poppins text-lg font-semibold focus:outline focus:outline-offset-2 focus:outline-1 focus:outline-sky-900 shadow-xl"
                  onSubmit={onSubmit}
                >
                  Get my free book!
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Subscription;
