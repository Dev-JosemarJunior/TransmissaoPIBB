import { ServiceCard } from "@/components/servicecard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <h1 className="my-14 text-center text-3xl uppercase text-zinc-100 font-semibold bold md:text-5xl">
        Escala Fechada
      </h1>
      <div className=" flex flex-col items-center justify-between px-24 md:flex-row ">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </main>
  );
}
