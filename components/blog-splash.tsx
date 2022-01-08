const BlogSplash: React.FC = () => {
  return (
    <div className="h-full w-full py-32 md:py-64">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold md:leading-none text-center md:text-left text-sky-800">
        My <span className="skittles">Library</span>
      </h1>
      <p className="mt-6 poppins text-sky-800 text-center md:text-left">
        A place to share my completely unbiased opinion
      </p>
      <p className="poppins text-sky-800 text-center md:text-left">
        on the entirety of civilisation.
      </p>
    </div>
  );
};

export default BlogSplash;
