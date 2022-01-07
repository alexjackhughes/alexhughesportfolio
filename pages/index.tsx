import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Post from "../types/post";

import Header from "../modules/Header";
import Footer from "../modules/Footer";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>
            Alex Hughes | CTO, Startup Founder, React Developer in Bristol
          </title>
        </Head>
        <Container>
          <Header />
          <div>
            <Intro />
            {allPosts.length > 0 && <MoreStories posts={allPosts} />}
            <Intro />
            {allPosts.length > 0 && <MoreStories posts={allPosts} />}
            <Intro />
            {allPosts.length > 0 && <MoreStories posts={allPosts} />}
          </div>
          <Footer />
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
