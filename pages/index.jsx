import Title from "../components/Title";
import Blog from "../components/Blog";
export default function Home({ res }) {
  return (
    <>
      <Title title="BlogSite" />
      <Blog articles={res} />
    </>
  );
}

export async function getStaticProps() {
  const data = await fetch("https://api.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      query:
        'query {user(username: "prajwalg") {publication {posts(page: 0) {title brief slug coverImage dateAdded}}}}',
    }),
  });

  const res = await data.json();

  return {
    props: {
      res,
    },
    revalidate: 10,
  };
}
