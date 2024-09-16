import { marked } from "marked";

export default function Post(post) {
  return (
    <>
      <div className="p-10 mt-20">
        <div className="mb-10 ">
          <img
            src={post.res.data.publication.post.coverImage.url}
            alt="profile-image"
            width={1000}
            height={600}
            className="rounded  ml-auto mr-auto post-Image"
          />
        </div>

        <div>
          <div className="text-center font-bold  style-Title ">
            {post.res.data.publication.post.title}
          </div>
        </div>

        <div
          className="style-Markdown"
          dangerouslySetInnerHTML={{
            __html: marked(post.res.data.publication.post.content.html),
          }}
        ></div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const response = await fetch("https://gql.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      query: `query Publication {
  publication(host: "prajwalg.hashnode.dev") {
    isTeam
    title
    posts(first: 50) {
      edges {
        node {
          slug
        }
      }
    }
  }
}`,
    }),
  });

  const datas = await response.json();

  const paths = datas.data.publication.posts.edges.map((post) => {
    return {
      params: {
        postId: `${post.node.slug}`,
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
  let slug = params.postId;

  const response = await fetch("https://gql.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      query: `query Publication {
      publication(
        host: "prajwalg.hashnode.dev",
      ) {
        post(slug: ${JSON.stringify(slug)}) {
          title
          content{
            html
          }
          coverImage{
            url
          }
          
        }
      } 
    }`,
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
