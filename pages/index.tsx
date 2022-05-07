import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Weather Application</title>
        <meta name="description" content="Latest weather application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main> Weather Application</main>

      <footer>Footer</footer>
    </div>
  );
};

export default Home;
