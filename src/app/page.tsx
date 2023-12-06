"use client"; // 👈 use it here

import { ServiceCard, ServiceInfoWithUsersProps, ServiceInfoInterface } from "@/components/servicecard2";
import Image from "next/image";
import { useEffect, useState } from "react";
import { UserService } from "../../services/userService";
import Loading from "@/components/ui/loading";

interface userType {
  userId?: string;
  name?: string;
  email?: string;
}

interface serviceMacro{
  services: ServiceInfoWithUsersProps
}[]

export default function Home() {

  const [users, setUsers] = useState<userType>();
  const [serviceInfo, setServiceInfo] = useState<ServiceInfoInterface[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const userService = new UserService();
        const response = await userService.getServiceAndYoursUsers();
        setServiceInfo(response);
        console.warn("users{page}:  ", response);
        
      } catch (error) {
        console.warn("Error Primeiro{page}: " + error);
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
        {serviceInfo?.map((service) => {
          return (
            <>
              <ServiceCard
                key={service.serviceId}
                serviceId={service.serviceId}
                serviceTitle={service.serviceTitle}
                serviceStatus={service.serviceStatus}
                serviceDate={service.serviceDate}
                servicePlace={service.servicePlace}
                serviceUser={{}}
              />
            </>
          );
        })}
      </div>
    </main>
  );
}
