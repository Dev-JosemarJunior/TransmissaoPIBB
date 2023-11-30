"use client"; // 👈 use it here

import { ServiceCard, ServiceInfoProps } from "@/components/servicecard2";
import Image from "next/image";
import { useEffect, useState } from "react";
import { UserService } from "../../services/userService";
import Loading from "@/components/ui/loading";

interface userType {
  userId?: string;
  name?: string;
  email?: string;
}

export default function Home() {
  const test: ServiceInfoProps[] = [
    {
      serviceId: "1",
      serviceTitle: "Culto de Quarta",
      serviceStatus: "FECHADO",
      serviceDate: "22/11/2023",
      serviceUser: {
        directorUser: "Neilson",
        switcherUser: "João",
        cam2User: "João",
        cam3User: "Maria",
        additional: [
          { userId: "1", userName: "oi" },
          { userId: "2", userName: "tchau" },
        ],
      },
    },
    {
      serviceId: "2",
      serviceTitle: "Culto DTX",
      serviceStatus: "INATIVO",
      serviceDate: "25/11/2023",
      serviceUser: {
        directorUser: "Neilson",
      },
    },
    {
      serviceId: "3",
      serviceTitle: "Culto de Domingo",
      serviceStatus: "ABERTO",
      serviceDate: "26/11/2023",
      serviceUser: {
        directorUser: "Neilson",
        switcherUser: "João",
        cam2User: "João",
        cam3User: "Maria",
        cam4User: "Josemar",
        additional: [
          { userId: "1", userName: "oi" },
          { userId: "2", userName: "tchau" },
        ],
      },
    },
  ];

  const [users, setUsers] = useState<userType>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const userService = new UserService();
        const response: userType = await userService.getAllUsers();
        setUsers(response);
        console.warn("user:  ", users?.name);
      } catch (error) {
        console.warn("Error Primeiro: " + error);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, [loading]);

  if (loading) {
    return (
      <>
        <main className="min-h-screen">
          <h1 className="bold my-14 text-center text-3xl font-semibold uppercase text-zinc-100 md:text-5xl">
            Escala Transmissão
          </h1>
          <div className=" flex flex-col flex-wrap items-start justify-center px-24 md:flex-row ">
            <Loading />
          </div>
        </main>
      </>
    );
  }

  return (
    <main className="min-h-screen">
      <h1 className="bold my-14 text-center text-3xl font-semibold uppercase text-zinc-100 md:text-5xl">
        Escala Transmissão
      </h1>
      <div className=" flex flex-col flex-wrap items-start justify-center px-24 md:flex-row ">
        {test.map((service) => {
          return (
            <>
              <ServiceCard
                key={service.serviceId}
                serviceTitle={service.serviceTitle}
                serviceStatus={service.serviceStatus}
                serviceDate={service.serviceDate}
                servicePlace={service.servicePlace}
                serviceUser={service.serviceUser}
              />
            </>
          );
        })}
      </div>
    </main>
  );
}
