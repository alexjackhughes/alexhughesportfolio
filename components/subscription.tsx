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
      <div className="flex flex-col text-center">
        <h1>What's next?</h1>
        <p>
          A little less than a decade ago I quit my job, spent my last £100 on
          tinned food, and began freelancing full-time with zero clients. Jump
          forward a few years and I'm the CTO of Loopin, which in my not so
          humble opinion is about revolutionise how startups build culture
          remotely.
        </p>
        <p>
          How? Well right now I'm in the middle of writing a book about exactly
          that; documenting everything from how I got my first client, to how to
          build a website with no experience.
        </p>
        <p>
          It still needs a bit of polish, which is why I've decided to release
          it chapter by chapter to everyone who wants it - just subscribe below
          and I'll add you to the list!
        </p>
        <div className="bg-white rounded p-10 z-50 mx-10 lg:mx-32">
          <form onSubmit={onSubmit}>
            <input
              className="text-sky-800"
              value={email}
              placeholder="johnny@cash.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p>Let me send you something great</p>
            <button className="text-sky-800" onSubmit={onSubmit}>
              Please click me
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
