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
  const data = await fetch("https://gql.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      query:
        'query Publication { publication(host: "prajwalg.hashnode.dev") { isTeam title posts(first: 50) { edges { node { title brief slug coverImage { url } publishedAt id } } } } }',
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
