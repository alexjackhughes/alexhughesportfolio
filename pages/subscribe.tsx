import Head from "next/head";
import React from "react";
import Layout from "../components/layout";
import Meta from "../components/meta";

const Subscribe = () => {
  return (
    <Layout>
      <Head>
        <title>Alex Hughes | CTO & Startup Founder in Bristol</title>
        <meta
          property="og:image"
          content="https://alexhughes.io/template.png"
        />
      </Head>
      <Meta />
    </Layout>
  );
};

export default Subscribe;
