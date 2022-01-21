import PostPreview from "./post-preview";
import Post from "../types/post";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 gap-y-16 md:gap-y-16 mb-32">
        {posts.map((post) => (
          <div key={post.title}>
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
