import NavBar from "./NavBar";
import Head from "next/head";
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <NavBar />
      <main>{children}</main>
    </>
  );
}
