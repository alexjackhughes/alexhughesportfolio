import Head from "next/head";

import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Post from "../types/post";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const morePosts = allPosts;
  return (
    <>
      <Layout>
        <Head>
          <title>Alex Hughes | CTO & Startup Founder in Bristol</title>
        </Head>
        <Container>
          <Intro />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          <Intro />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />} <Intro />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />} <Intro />
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
