import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Camera, Computer, Crown } from "lucide-react";
import {
  BellIcon,
  EyeNoneIcon,
  PersonIcon,
  CameraIcon,
  MixerVerticalIcon,
  DesktopIcon,
  FaceIcon,
} from "@radix-ui/react-icons";

interface ServiceInfoProps {
  serviceTitle: String;
  serviceStatus: String;
  serviceDate: String;
  servicePlace?: String;
}

export function ServiceCard(serviceProps: ServiceInfoProps) {
  
  function handleServiceStatus(serviceProps: ServiceInfoProps){
    if (serviceProps.serviceStatus =="INATIVO"){
      return(
        <Card className="m-2 border-2 border-zinc-400 bg-slate-300 min-h-[38.5rem] md:m-3">
        <CardHeader className="pb-3 min-w-[13rem]">
          <CardTitle>{serviceProps.serviceTitle}</CardTitle>
          <CardDescription>
            Status: {serviceProps.serviceStatus}
            <br />
            Dia: {serviceProps.serviceDate}
            <br />
            Local: {serviceProps.servicePlace}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-1">
        <div className="flex items-center justify-center">
            <div className="py-40 px-2">
              <p className="text-sm font-medium leading-none  text-zinc-600">
                Não haverá Culto
              </p>
            </div>
          </div>
          </CardContent>
      </Card>
      )
    } else if (serviceProps.serviceStatus =="ABERTO"){
      return(
        <Card className="m-2 border-2 border-green-400 md:m-3 bg-green-100">
        <CardHeader className="pb-3 min-w-[13rem]">
          <CardTitle>{serviceProps.serviceTitle}</CardTitle>
          <CardDescription>
            Status: {serviceProps.serviceStatus}
            <br />
            Dia: {serviceProps.serviceDate}
            <br />
            Local: {serviceProps.servicePlace}
          </CardDescription>
        </CardHeader>
          <CardContent className="grid gap-1">
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <DesktopIcon className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  Neilson Ramos
                </p>
                <p className="text-sm leading-none">Director</p>
              </div>
            </div>
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <MixerVerticalIcon className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">João Nunes</p>
                <p className="text-sm leading-none">Switcher</p>
              </div>
            </div>
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <CameraIcon className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  Nalanda Nunes
                </p>
                <p className="text-sm leading-none">Cam 2</p>
              </div>
            </div>
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <CameraIcon className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  Nalanda Nunes
                </p>
                <p className="text-sm leading-none">Cam 3</p>
              </div>
            </div>
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <CameraIcon className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  Nalanda Nunes
                </p>
                <p className="text-sm leading-none">Cam 4</p>
              </div>
            </div>
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <CameraIcon className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  Nalanda Nunes
                </p>
                <p className="text-sm leading-none">Cam 5</p>
              </div>
            </div>
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <CameraIcon className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  Nalanda Nunes
                </p>
                <p className="text-sm leading-none">Cam 6</p>
              </div>
            </div>
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <CameraIcon className="mt-px h-5 w-5" color="red" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  Nalanda Nunes
                </p>
                <p className="text-sm leading-none">Backstage</p>
              </div>
            </div>
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <FaceIcon className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  Nalanda Nunes
                </p>
                <p className="text-sm leading-none">Additional / Treinee</p>
              </div>
            </div>
          </CardContent>
          </Card>
      )
    } else if (serviceProps.serviceStatus =="FECHADO"){
      return(
        <Card className="m-2 border-2 border-zinc-400 md:m-3">
        <CardHeader className="pb-3 min-w-[13rem]">
          <CardTitle>{serviceProps.serviceTitle}</CardTitle>
          <CardDescription>
            Status: {serviceProps.serviceStatus}
            <br />
            Dia: {serviceProps.serviceDate}
            <br />
            Local: {serviceProps.servicePlace}
          </CardDescription>
        </CardHeader>
          <CardContent className="grid gap-1">
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <DesktopIcon className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  Neilson Ramos
                </p>
                <p className="text-sm leading-none">Director</p>
              </div>
            </div>
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <MixerVerticalIcon className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">João Nunes</p>
                <p className="text-sm leading-none">Switcher</p>
              </div>
            </div>
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <CameraIcon className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  Nalanda Nunes
                </p>
                <p className="text-sm leading-none">Cam 2</p>
              </div>
            </div>
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <CameraIcon className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  Nalanda Nunes
                </p>
                <p className="text-sm leading-none">Cam 3</p>
              </div>
            </div>
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <CameraIcon className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  Nalanda Nunes
                </p>
                <p className="text-sm leading-none">Cam 4</p>
              </div>
            </div>
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <CameraIcon className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  Nalanda Nunes
                </p>
                <p className="text-sm leading-none">Cam 5</p>
              </div>
            </div>
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <CameraIcon className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  Nalanda Nunes
                </p>
                <p className="text-sm leading-none">Cam 6</p>
              </div>
            </div>
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <CameraIcon className="mt-px h-5 w-5" color="red" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  Nalanda Nunes
                </p>
                <p className="text-sm leading-none">Backstage</p>
              </div>
            </div>
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <FaceIcon className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  Nalanda Nunes
                </p>
                <p className="text-sm leading-none">Additional / Treinee</p>
              </div>
            </div>
          </CardContent>
          </Card>
      )
  } else if(serviceProps.serviceStatus == "CONCLUIDO"){
      return(
        <Card className="m-2 border-2 border-zinc-400 md:m-3">
        <CardHeader className="pb-3 min-w-13rem]">
          <CardTitle>{serviceProps.serviceTitle}</CardTitle>
          <CardDescription>
            Status: {serviceProps.serviceStatus}
            <br />
            Dia: {serviceProps.serviceDate}
            <br />
            Local: {serviceProps.servicePlace}
          </CardDescription>
        </CardHeader>
          <CardContent className="grid gap-1">
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <DesktopIcon className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  Neilson Ramos
                </p>
                <p className="text-sm leading-none">Director</p>
              </div>
            </div>
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <MixerVerticalIcon className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">João Nunes</p>
                <p className="text-sm leading-none">Switcher</p>
              </div>
            </div>
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <CameraIcon className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  Nalanda Nunes
                </p>
                <p className="text-sm leading-none">Cam 2</p>
              </div>
            </div>
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <CameraIcon className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  Nalanda Nunes
                </p>
                <p className="text-sm leading-none">Cam 3</p>
              </div>
            </div>
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <CameraIcon className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  Nalanda Nunes
                </p>
                <p className="text-sm leading-none">Cam 4</p>
              </div>
            </div>
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <CameraIcon className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  Nalanda Nunes
                </p>
                <p className="text-sm leading-none">Cam 5</p>
              </div>
            </div>
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <CameraIcon className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  Nalanda Nunes
                </p>
                <p className="text-sm leading-none">Cam 6</p>
              </div>
            </div>
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <CameraIcon className="mt-px h-5 w-5" color="red" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  Nalanda Nunes
                </p>
                <p className="text-sm leading-none">Backstage</p>
              </div>
            </div>
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <FaceIcon className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  Nalanda Nunes
                </p>
                <p className="text-sm leading-none">Additional / Treinee</p>
              </div>
            </div>
          </CardContent>
          </Card>
      )
    } else{
      return(
        <div><p>Erro</p></div>
      )
    }
  }
  
  
  return (
    <div>
      {handleServiceStatus(serviceProps)}
    </div>
  );
}
