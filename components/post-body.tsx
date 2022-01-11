import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <article className="prose-xl lg:prose-2xl text-3xl text-sky-100">
        <div
          className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </div>
  );
};

export default PostBody;
