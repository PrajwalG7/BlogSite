import BlogPost from "./BlogPosts";
import Hero from "./Hero";

export default function Blog(res) {
  let posts = res.articles.data.user.publication;
  return (
    <>
      <Hero />
      <div className="text-4xl text-center mt-4 underline   font-bold">
        <div className="mt-4 border-t-2 border-grey-light mx-4 py-1 ">
          <h2 className="mt-3">Blogs</h2>
        </div>
      </div>

      <BlogPost articles={posts} />
    </>
  );
}
