import { ServiceCard } from "@/components/servicecard2";
import Image from "next/image";

const test = {
  directorUser: "Neilson",
  switcherUser: "João",
  cam2User: "João",
  cam3User: "Maria  ",
  additional: [{userId: "1", userName: "oi"}, {userId: "2", userName: "tchau"}],
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <h1 className="my-14 text-center text-3xl uppercase text-zinc-100 font-semibold bold md:text-5xl">
        Escala Fechada
      </h1>
      <div className=" flex flex-col items-center justify-center px-24 md:flex-row ">
        <ServiceCard serviceTitle={"Culto de Quarta"} serviceStatus={"FECHADO"} serviceDate={"22/11/2023"} servicePlace={"Galpão"}  />
        <ServiceCard serviceTitle={"Culto DTX"} serviceStatus={"INATIVO"} serviceDate={"25/11/2023"}/>
        <ServiceCard serviceTitle={"Culto de Domingo"} serviceStatus={"ABERTO"} serviceDate={"26/11/2023"} servicePlace={"Galpão"} />
      </div>
    </main>
  );
}
