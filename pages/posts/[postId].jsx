import { marked } from "marked";

export default function Post(post) {
  return (
    <>
      <div className="p-10 mt-20">
        <div className="mb-10 ">
          <img
            src={post.res.data.post.coverImage}
            alt="profile-image"
            width={1000}
            height={600}
            className="rounded  ml-auto mr-auto post-Image"
          />
        </div>

        <div>
          <div className="text-center font-bold  style-Title ">
            {post.res.data.post.title}
          </div>
        </div>

        <div
          className="style-Markdown"
          dangerouslySetInnerHTML={{
            __html: marked(post.res.data.post.content),
          }}
        ></div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const response = await fetch("https://api.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      query:
        'query {user(username: "prajwalg") {publication {posts(page: 0) {slug}}}}',
    }),
  });

  const datas = await response.json();

  const paths = datas.data.user.publication.posts.map((post) => {
    return {
      params: {
        postId: `${post.slug}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  let a = params.postId;

  const response = await fetch("https://api.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      query: `{post(slug: ${JSON.stringify(
        a
      )}, hostname:"prajwalg.hashnode.dev"){title content coverImage}}`,
    }),
  });

  const res = await response.json();

  return {
    props: {
      res,
    },
    revalidate: 10,
  };
}
