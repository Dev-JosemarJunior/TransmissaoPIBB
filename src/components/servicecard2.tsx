import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CameraIcon,
  MixerVerticalIcon,
  DesktopIcon,
  FaceIcon,
} from "@radix-ui/react-icons";

export interface ServiceInfoProps {
  serviceId: String;
  serviceTitle: String;
  serviceStatus: String;
  serviceDate: Number;
  servicePlace?: String;
  serviceUser: {
    directorUser?: String;
    switcherUser?: String;
    cam2User?: String;
    cam3User?: String;
    cam4User?: String;
    cam5User?: String;
    cam6User?: String;
    backstage?: String;
    additional?: {
      userId: String;
      userName: String;
    }[];
  };
}

export interface ServiceUserInterface{
    directorUser?: String;
    switcherUser?: String;
    cam2User?: String;
    cam3User?: String;
    cam4User?: String;
    cam5User?: String;
    cam6User?: String;
    backstage?: String;
    additional?: {
      userId: String;
      userName: String;
    }[];
  };

export function ServiceCard(serviceProps: ServiceInfoProps) {
  function buildCardUserInfo(usersProps: ServiceInfoProps) {
    return (
      <CardContent className="grid gap-1">
        <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
          <DesktopIcon className="mt-px h-5 w-5" />
          <div className="space-y-1">
            {usersProps?.serviceUser?.directorUser ? (
              <p className="text-sm font-bold leading-none">
                {usersProps.serviceUser.directorUser}
              </p>
            ) : (
              <p className="text-sm font-medium leading-none text-zinc-400">
                Não escalado
              </p>
            )}
            <p className="text-sm leading-none">Director</p>
          </div>
        </div>
        <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
          <MixerVerticalIcon className="mt-px h-5 w-5" />
          <div className="space-y-1">
            {usersProps?.serviceUser?.switcherUser ? (
              <p className="text-sm font-bold leading-none">
                {usersProps.serviceUser.switcherUser}
              </p>
            ) : (
              <p className="text-sm font-medium leading-none text-zinc-400">
                Não escalado
              </p>
            )}
            <p className="text-sm leading-none">Switcher</p>
          </div>
        </div>
        <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
          <CameraIcon className="mt-px h-5 w-5" />
          <div className="space-y-1">
            {usersProps?.serviceUser?.cam2User ? (
              <p className="text-sm font-bold leading-none">
                {usersProps.serviceUser.cam2User}
              </p>
            ) : (
              <p className="text-sm font-medium leading-none text-zinc-400">
                Não escalado
              </p>
            )}
            <p className="text-sm leading-none">Cam 2</p>
          </div>
        </div>
        <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
          <CameraIcon className="mt-px h-5 w-5" />
          <div className="space-y-1">
            {usersProps?.serviceUser?.cam3User ? (
              <p className="text-sm font-bold leading-none">
                {usersProps.serviceUser.cam3User}
              </p>
            ) : (
              <p className="text-sm font-medium leading-none text-zinc-400">
                Não escalado
              </p>
            )}
            <p className="text-sm leading-none">Cam 3</p>
          </div>
        </div>
        <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
          <CameraIcon className="mt-px h-5 w-5" />
          <div className="space-y-1">
            {usersProps?.serviceUser?.cam4User ? (
              <p className="text-sm font-bold leading-none">
                {usersProps.serviceUser.cam4User}
              </p>
            ) : (
              <p className="text-sm font-medium leading-none text-zinc-400">
                Não escalado
              </p>
            )}
            <p className="text-sm leading-none">Cam 4</p>
          </div>
        </div>
        <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
          <CameraIcon className="mt-px h-5 w-5" />
          <div className="space-y-1">
            {usersProps?.serviceUser?.cam5User ? (
              <p className="text-sm font-bold leading-none">
                {usersProps.serviceUser.cam5User}
              </p>
            ) : (
              <p className="text-sm font-medium leading-none text-zinc-400">
                Não escalado
              </p>
            )}
            <p className="text-sm leading-none">Cam 5</p>
          </div>
        </div>
        <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
          <CameraIcon className="mt-px h-5 w-5" />
          <div className="space-y-1">
            {usersProps?.serviceUser?.cam6User ? (
              <p className="text-sm font-bold leading-none">
                {usersProps.serviceUser.cam6User}
              </p>
            ) : (
              <p className="text-sm font-medium leading-none text-zinc-400">
                Não escalado
              </p>
            )}
            <p className="text-sm leading-none">Cam 6</p>
          </div>
        </div>
        {usersProps?.serviceUser?.backstage ? (
          <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
            <CameraIcon className="mt-px h-5 w-5" color="red" />
            <div className="space-y-1">
              <p className="text-sm font-bold leading-none">
                {usersProps?.serviceUser.backstage}
              </p>
              <p className="text-sm leading-none">Backstage</p>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {usersProps?.serviceUser?.additional ? (
          usersProps.serviceUser.additional?.map((user) => {
            return (
              <div
                key={user.userId}
                className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground"
              >
                <FaceIcon className="mt-px h-5 w-5" />
                <div className="space-y-1">
                  <p className="text-sm font-bold leading-none">
                    {user?.userName}
                  </p>
                  <p className="text-sm leading-none">Additional / Treinee</p>
                </div>
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </CardContent>
    );
  }

  function handleServiceCard(serviceProps: ServiceInfoProps) {
    if (serviceProps.serviceStatus == "INATIVO") {
      return (
        <Card className="m-2 h-full border-2 border-red-500 bg-slate-300 md:m-3">
          <CardHeader className="min-w-[13rem] pb-3">
            <CardTitle>{serviceProps.serviceTitle}</CardTitle>
            <CardDescription>
              Status:{" "}
              <Badge variant="destructive" className="text-[0.60rem]">
                {serviceProps.serviceStatus}
              </Badge>
              <br />
              Dia: {serviceProps.serviceDate}
              <br />
              Local: {serviceProps.servicePlace}
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-1">
            <div className="flex items-center justify-center">
              <div className="py-20">
                <p className="text-sm font-medium leading-none  text-zinc-600">
                  Não haverá Culto
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      );
    } else if (serviceProps.serviceStatus == "ABERTO") {
      return (
        <Card className="m-2 border-2 border-yellow-500  md:m-3">
          <CardHeader className="min-w-[13rem] pb-3">
            <CardTitle>{serviceProps.serviceTitle}</CardTitle>
            <CardDescription>
              Status:{" "}
              <Badge className="bg-yellow-500 text-[0.60rem] hover:bg-yellow-400">
                {serviceProps.serviceStatus}
              </Badge>
              <br />
              Dia: {serviceProps.serviceDate}
              <br />
              Local: {serviceProps.servicePlace}
            </CardDescription>
          </CardHeader>
          {buildCardUserInfo(serviceProps)}
        </Card>
      );
    } else if (serviceProps.serviceStatus == "FECHADO") {
      return (
        <Card className="m-2 border-2 border-green-500 md:m-3">
          <CardHeader className="min-w-[13rem] pb-3">
            <CardTitle>{serviceProps.serviceTitle}</CardTitle>
            <CardDescription>
              Status:{" "}
              <Badge className="bg-green-500 text-[0.60rem] hover:bg-green-400">
                {serviceProps.serviceStatus}
              </Badge>
              <br />
              Dia: {serviceProps.serviceDate}
              <br />
              Local: {serviceProps.servicePlace}
            </CardDescription>
          </CardHeader>
          {buildCardUserInfo(serviceProps)}
        </Card>
      );
    } else if (serviceProps.serviceStatus == "CONCLUIDO") {
      return (
        <Card className="m-2 border-2 border-zinc-400 bg-zinc-400 md:m-3">
          <CardHeader className="min-w-13rem] pb-3">
            <CardTitle>{serviceProps.serviceTitle}</CardTitle>
            <CardDescription>
              Status: <Badge variant="outline"></Badge>
              <br />
              Dia: {serviceProps.serviceDate}
              <br />
              Local: {serviceProps.servicePlace}
            </CardDescription>
          </CardHeader>
          {buildCardUserInfo(serviceProps)}
        </Card>
      );
    } else {
      return (
        <>
          <p>Erro</p>
        </>
      );
    }
  }

  return <div>{handleServiceCard(serviceProps)}</div>;
}
