import Link from "next/link";

export default function BlogPost(posts) {
  let blogs = posts.articles.posts;

  const getDateAdded = (date) => {
    let d = new Date(date);
    let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
    let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
    return `${mo} ${da}, ${ye}`;
  };

  return (
    <>
      <div className="flex md:flex-row  sm:flex-col   md:gap-2 ml-2 mr-2  flex-wrap pb-10  ">
        {/* card*/}
        {blogs.edges.map((blogs) => {
          return (
            <div
              key={blogs.node.id}
              className="container  max-w-md  rounded   border-slate-600 flex justify-start bg-gray-50 mt-8   border-4    ml-auto mr-auto "
            >
              <div className="flex flex-col flex-grow border border-slate-100  ">
                {/* <!-- post image --> */}
                <div className="cursor-pointer ">
                  <div>
                    <img
                      src={blogs.node.coverImage.url}
                      alt="profile-image"
                      width="500"
                      className=" h-64"
                    ></img>
                  </div>
                </div>
                {/* <!-- title section --> */}
                <div>
                  <div className="ml-2 mt-2">
                    <div className="text-lg">
                      <h2 className="font-medium inline-block  cursor-pointer">
                        Blog:
                      </h2>
                      <h2 className="underline inline-block md:ml-1">
                        {" "}
                        {blogs.node.title}
                      </h2>
                    </div>
                    <h2 className="text-gray-500">
                      {getDateAdded(blogs.node.publishedAt)}
                    </h2>
                  </div>
                </div>
                {/* <!--brief --> */}
                <div className="text-gray-500 ml-2  cursor-pointer  mr-2  ">
                  <a
                    href={`https://prajwalg.hashnode.dev/${blogs.node.slug}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {blogs.node.brief} <br />
                    <h2 className="hover:text-blue-800 inline-block text-gray-800  font-medium  after:content-['_↗']">
                      Read it on Hashnode
                    </h2>
                  </a>
                  <Link href={`/posts/${blogs.node.slug}`} passHref>
                    <h2 className="text-gray-800 hover:text-blue-800   cursor-pointer  font-medium  after:content-['_↗']">
                      Read it on BlogSite
                    </h2>
                  </Link>
                </div>

                {/* <!-- divider line--> */}
                <div className="mt-4 border-t border-grey-light mx-4 py-1"></div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
