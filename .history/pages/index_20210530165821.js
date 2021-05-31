import Head from "next/head";
import Header from "../components/Header";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="Nextjs Hulu app clone" />
        <link rel="icon" href="/hulu.ico" />
      </Head>

      <Header />
    </div>
  );
}
