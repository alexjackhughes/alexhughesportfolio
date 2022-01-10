import Head from "next/head";

import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Post from "../types/post";
import HomeSplash from "../components/home-splash";
import HomeAbout from "../components/home-about";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const morePosts = allPosts.slice(0, 2);
  return (
    <>
      <Layout>
        <Head>
          <title>Alex Hughes | CTO & Startup Founder in Bristol</title>
        </Head>
        <HomeSplash />
        <HomeAbout />
        <Container>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold md:leading-none text-center md:text-left text-sky-100 mb-10">
            Lorem Ipsum
          </h1>
          <div className=" lg:w-2/3 mb-10">
            <p className="text-sky-100 text-xl mb-3">
              It still needs a bit of polish, which is why I've decided to
              release it chapter by chapter to everyone who wants it - just
              subscribe below and I'll add you to the list!
            </p>
          </div>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
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
