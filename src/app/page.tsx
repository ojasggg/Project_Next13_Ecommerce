import React from "react";
import Image from "next/image";
import img from "../public/images/1.jpg";
import { Card } from "../components";

const HomePage = () => {
  return (
    <main className="mx-auto w-[85vw]">
      <section className="h-full w-full">
        <Image
          src={img}
          alt="Heading Image"
          className="h-[360px] w-full xl:h-[460px]"
        />
      </section>
      <section className="my-20">
        <h2 className="mb-8 text-2xl font-bold">Offer for you!</h2>
        <div className="grid gap-6 lg:grid-cols-4 xl:grid-cols-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <section className="my-20">
        <h2 className="mb-8 text-2xl font-bold">Featured Products</h2>
        <div className="grid gap-6 lg:grid-cols-4 xl:grid-cols-5">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
