import { Footer, Header, InfoCard } from "@/components";
import { format } from "date-fns";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  searchResult: SearchData[];
};
export type SearchData = {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.query;
  const searchResult = await fetch(`https://www.jsonkeeper.com/b/5NPS`).then(
    (res) => res.json()
  );
  console.log({ params });
  return {
    props: { searchResult },
  };
};
const Search = ({ searchResult }: Props) => {
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuest } = router.query;
  const formatStartDate = format(new Date(startDate as string), "dd MMMM yy");
  const formatEndDate = format(new Date(endDate as string), "dd MMMM yy");
  const range = `from ${formatStartDate} to ${formatEndDate}`;
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${numberOfGuest}`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {numberOfGuest} number of guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            {["Cancellation Flexibility", "Price", "Rooms and Beds"].map(
              (d, index) => (
                <p
                  key={index}
                  className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-150 ease-out"
                >
                  {d}
                </p>
              )
            )}
          </div>
          {searchResult.map((s) => (
            <InfoCard key={s.title} search={s} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
