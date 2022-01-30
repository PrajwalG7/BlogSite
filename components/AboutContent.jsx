export default function AboutContent() {
  return (
    <>
      <div className="grid lg:grid-cols-4 ml-auto lg:space-x-16 mr-auto mt-20 sm:grid-cols-1  mb-5 p-10">
        <div className="sm:ml-auto sm:mr-auto">
          <img src="/images/AboutImage.jpg" className="rounded sm:w-screen " />
        </div>
        <div className="">
          <h2 className="font-semibold sm:mt-4 lg:mt-0  text-lg">About Me</h2>
          <div className="mt-4  ">
            Myself Prajwal Gaikwad, I am a CS and Engineering Student, Tech
            Blogger and a Full Stack Developer from India. Jumping straight to
            the point, from databases to graphic design and UI/UX management, I
            can get your work done.
          </div>
        </div>

        <div className="  ">
          <h2 className="font-semibold sm:mt-4 lg:mt-0 text-lg">More Of Me</h2>
          <div className="mt-4">
            <h2>
              24 march 2003, the day from when I started to grow. I passed my
              10th std with average grades but enjoyed every moment of it. Right
              after that opted for Computer Science and Engineering, that
              decision somehow changed my life. While struggling with math,
              physics, chemistry in initial days of my college semester, one
              great thing happend from that was I became focused and consistent
              with my work. Defining your own success is the best thing you can
              do for yourself. Later on I started with programming which was
              building block for my imagination and thinking, being able to
              create what I imagine is one of the best thing happened to me,
              since then I kept on improving myself.
            </h2>
            <h2 className="font-medium">
              {" "}
              If you are interested in working with me, please let me know!
            </h2>
          </div>
        </div>
        <div className=" sm:mt-4 lg:mt-0   ">
          <h2 className="font-semibold text-lg">My Socials</h2>
          <div className="mt-4">
            <div className="pb-2">
              <a
                href="https://github.com/PrajwalG7"
                target="_blank"
                className="hover:text-blue-800 hover:font-medium "
              >
                {" "}
                <svg
                  height="32"
                  viewBox="0 0 16 16"
                  width="25"
                  className="inline-block"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
                <h2 className="ml-1 inline-block align-middle">GitHub</h2>
              </a>
            </div>
            <div className="pb-2">
              <a
                href="https://twitter.com/iprajwalG"
                target="_blank"
                className="hover:text-blue-800 hover:font-medium"
              >
                {" "}
                <svg
                  className="w-6 h-6 text-blue-400 fill-current inline-block "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
                <h2 className="ml-1 inline-block align-middle">Twitter</h2>
              </a>{" "}
            </div>
            <div className="pb-2">
              <a
                href="https://www.linkedin.com/in/prajwal-gaikwad-a522791a1/"
                target="_blank"
                className="hover:text-blue-800 hover:font-medium"
              >
                {" "}
                <svg
                  className="w-6 h-6 text-blue-500 fill-current inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
                <h2 className="ml-1 inline-block align-middle">LinkedIn</h2>
              </a>{" "}
            </div>
            <div className="pb-2">
              <a
                href=" https://www.instagram.com/1prajwalgaikwad/"
                target="_blank"
                className="hover:text-blue-800 hover:font-medium"
              >
                {" "}
                <svg
                  className="w-6 h-6 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 551.034 551.034"
                >
                  <path d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722 c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156 C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156 c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722 c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z" />

                  <path d="M275.517,133C196.933,133,133,196.933,133,275.516 s63.933,142.517,142.517,142.517S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6 c-48.095,0-87.083-38.988-87.083-87.083s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083 C362.6,323.611,323.611,362.6,275.517,362.6z" />

                  <circle
                    id="XMLID_83_"
                    fill="#555"
                    cx="418.306"
                    cy="134.072"
                    r="34.149"
                  />
                </svg>
                <h2 className="ml-1 inline-block align-middle">Instagram</h2>
              </a>
            </div>
            <div className="pb-2">
              <a
                href="https://hashnode.com/@PrajwalG"
                target="_blank"
                className="hover:text-blue-800 hover:font-medium"
              >
                <svg
                  className="inline-block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 256 256"
                >
                  {" "}
                  <path
                    d="M17.591 85.533c-23.455 23.455-23.455 61.479 0 84.932l67.943 67.944c23.455 23.453 61.479 23.453 84.932 0l67.944-67.944c23.453-23.455 23.453-61.48 0-84.932L170.466 17.59c-23.455-23.452-61.48-23.452-84.932 0L17.59 85.533zm140.134 72.193c16.418-16.419 16.418-43.036 0-59.452c-16.417-16.419-43.034-16.419-59.45 0c-16.419 16.418-16.419 43.033 0 59.452c16.418 16.416 43.033 16.416 59.452 0h-.002z"
                    fill="#2962FF"
                    fillRule="evenodd"
                  />
                </svg>{" "}
                <h2 className=" inline-block align-middle">Hashnode</h2>
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
