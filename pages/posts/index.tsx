import Head from "next/head";

import Container from "../../components/container";
import MoreStories from "../../components/more-stories";
import Intro from "../../components/intro";
import Layout from "../../components/layout";
import { getAllPosts } from "../../lib/api";
import Post from "../../types/post";
import BlogSplash from "../../components/blog-splash";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Blog by Alex Hughes | CTO & Startup Founder in Bristol</title>
          <meta
            property="og:image"
            content="https://alexhughes.io/template.png"
          />
        </Head>
        <BlogSplash />
        <Container>
          <div className="mt-20">
            {allPosts.length > 0 && <MoreStories posts={allPosts} />}
          </div>
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
