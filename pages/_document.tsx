import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <link
          rel="stylesheet"
          href="https://highlightjs.org/static/demo/styles/railscasts.css"
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
