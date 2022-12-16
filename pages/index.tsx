import {
  Banner,
  Footer,
  Header,
  LargeCard,
  MediumCard,
  SmallCard,
} from "@/components";
import Head from "next/head";
export type ExploreData = {
  img: string;
  location: string;
  distance: string;
};
export type CardData = {
  img: string;
  title: string;
};
export async function getStaticProps() {
  const response = await fetch("https://www.jsonkeeper.com/b/4G1G");
  const exploreData = await response.json();
  const cardData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );
  return {
    props: {
      exploreData,
      cardData,
    },
  };
}
export default function Home({
  exploreData = [],
  cardData = [],
}: {
  exploreData: ExploreData[];
  cardData: CardData[];
}) {
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
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.map((explore) => (
              <SmallCard key={explore.location} explore={explore} />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardData.map((card) => (
              <MediumCard key={card.title} card={card} />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlist curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}
