import Head from "next/head";

import Container from "../components/container";
import MoreStories from "../components/more-stories";
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
          <meta
            property="og:image"
            content="https://alexhughes.io/template.png"
          />
        </Head>
        <HomeSplash />
        <HomeAbout />
        <Container>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold md:leading-none text-center md:text-left text-sky-100 mb-12 mt-12">
            What I've been writing
          </h2>
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
