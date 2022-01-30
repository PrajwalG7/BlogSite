import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav className="fixed  inset-x-0 top-0">
        <ul className="flex space-x-5 p-4  bg-slate-100">
          <li className="   flex-grow  ">
            <Link href="/">
              <a className=" text-3xl font-bold font-serif ">BlogSite</a>
            </Link>
          </li>

          <li className="text-xl hover:underline font-semibold mt-1 ">
            <Link href="/about">
              <a className="hover:text-blue-600">About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
