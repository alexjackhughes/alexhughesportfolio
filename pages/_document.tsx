import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            property="og:title"
            content="React Engineer & Startup Founder | Alex Jack Hughes"
          />
          <meta
            name="description"
            content="Hi, I’m Alex Hughes! I'm a Full-Stack Engineer, and builder of high-growth startups based in Bristol. Speciality? Typically I build serverless web apps in React, GraphQL, and TypeScript."
          />
          <meta
            property="og:description"
            content="Hi, I’m Alex Hughes! I'm a Full-Stack Engineer, and builder of high-growth startups based in Bristol. Speciality? Typically I build serverless web apps in React, GraphQL, and TypeScript."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://alexhughes.io/" />
          <meta
            property="og:image"
            content="https://alexhughes.io/template.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
