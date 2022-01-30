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
        {blogs.map((blogs, index) => {
          return (
            <div
              key={index}
              className="container  max-w-md  rounded   border-slate-600 flex justify-start bg-gray-50 mt-8   border-4    ml-auto mr-auto "
            >
              <div className="flex flex-col flex-grow border border-slate-100  ">
                {/* <!-- post image --> */}
                <div className="cursor-pointer ">
                  <div>
                    <img
                      src={blogs.coverImage}
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
                        {blogs.title}
                      </h2>
                    </div>
                    <h2 className="text-gray-500">
                      {getDateAdded(blogs.dateAdded)}
                    </h2>
                  </div>
                </div>

                {/* <!--brief --> */}
                <div className="text-gray-500 ml-2  cursor-pointer  mr-2  ">
                  <a
                    href={`https://prajwalg.hashnode.dev/${blogs.slug}`}
                    target="_blank"
                  >
                    {blogs.brief}{" "}
                    <h2 className="hover:text-blue-800 inline-block ml-2 text-gray-800">
                      Read More
                    </h2>
                  </a>
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
