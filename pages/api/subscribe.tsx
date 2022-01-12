import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // 1. Get the email from the payload and
  // validate if it is empty.
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Please provide an email id." });
  }

  const firstName = getEmailUsername(email);

  // 2. Use the Revue API Key and create a subscriber using
  // the email we pass to the API. Please note, we pass the
  // API Key in the 'Authorization' header.
  try {
    const API_KEY = process.env.MAIL_API_KEY;
    const response = await fetch(`https://www.getrevue.co/api/v2/subscribers`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        first_name: firstName,
        double_opt_in: false,
      }),
      headers: {
        Authorization: `Token ${API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    // 3. We check in the response if the status is 400
    // If so, consider it as error and return. Otherwise a 201
    // for create
    if (response.status >= 400) {
      const message = await response.json();
      console.log(message.error.email[0]);
      return res.status(400).json({ error: message.error.email[0] });
    }

    // Send a JSON response
    res.status(201).json({
      message: `Hey, ${email}, Please check your email and verify it. Can't wait to get you boarded.`,
      error: "",
    });
  } catch (err: any) {
    // 4. If the control goes inside the catch block
    // let us consider it as a server error(500)
    return res.status(500).json({ error: "There was an error" });
  }
}

function getEmailUsername(emailAddress: string): string {
  const search = emailAddress.split("@")[0];

  return capitalizeFirstLetter(search);
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}