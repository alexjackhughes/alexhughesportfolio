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
        <Container>
          <HomeSplash />
          <HomeAbout />
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
