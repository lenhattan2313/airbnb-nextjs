import { Banner, Header } from "@/components";
import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="Airbnb" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
    </div>
  );
}
