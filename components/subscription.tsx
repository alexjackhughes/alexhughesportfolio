import { useState } from "react";
import Container from "./container";

const Subscription: React.FC = () => {
  const [email, setEmail] = useState("");
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const lowercaseEmail = lowercaseString(email);
    const firstName = getEmailUsername(email);

    (async () => {
      const rawResponse = await fetch(
        "https://www.getrevue.co/api/v2/subscribers",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `TOKEN ${process.env.MAIL_API_KEY}`,
          },
          body: JSON.stringify({
            email: lowercaseEmail,
            first_name: firstName,
            double_opt_in: false,
          }),
        }
      );
      const content = await rawResponse.json();

      console.log(content);
    })();
  };

  return (
    <Container>
      <div className="flex flex-col mt-10 lg:mt-32 text-center mx-10 lg:mx-32">
        <h3 className="text-4xl lg:text-6xl mb-6 leading-snug font-bold">
          What's next?
        </h3>
        <p className="text-sky-100 text-xl mb-3">
          A little less than a decade ago I quit my job, spent my last £100 on
          tinned food, and began freelancing full-time with zero clients. Jump
          forward a few years and I'm the CTO of Loopin, which in my not so
          humble opinion is about revolutionise how startups build culture
          remotely.
        </p>
        <p className="text-sky-100 text-xl mb-3">
          How? Well right now I'm in the middle of writing a book about exactly
          that; documenting everything from how I got my first client, to how to
          build a website with no experience.
        </p>
        <p className="text-sky-100 text-xl mb-14">
          It still needs a bit of polish, which is why I've decided to release
          it chapter by chapter to everyone who wants it - just subscribe below
          and I'll add you to the list!
        </p>
        <div className="bg-white rounded py-8 px-8">
          <h3 className="text-4xl mb-3 leading-snug font-bold text-sky-900">
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
              className="bg-sky-800 p-3 mt-6 rounded-lg text-white poppins text-lg font-semibold focus:outline focus:outline-offset-2 focus:outline-1 focus:outline-sky-900"
              onSubmit={onSubmit}
            >
              Get my free book!
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

function getEmailUsername(emailAddress: string): string {
  const search = emailAddress.split("@")[0];

  return capitalizeFirstLetter(search);
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function lowercaseString(string: string) {
  return string.toLowerCase();
}

export default Subscription;