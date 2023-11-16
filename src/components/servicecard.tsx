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

const ServiceCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <Card className="m-2 border-2 border-zinc-400 md:m-3">
    <CardHeader className="pb-3">
      <CardTitle>Culto de Domingo</CardTitle>
      <CardDescription>
        Status: Culto Fechado<br/>
        Dia: 15/11/2023<br/>
        Local: Galpão
      </CardDescription>
    </CardHeader>
    <CardContent className="grid gap-1">
      <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
        <DesktopIcon className="mt-px h-5 w-5" />
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">Neilson Ramos</p>
          <p className="text-sm leading-none">Director</p>
        </div>
      </div>
      <div className="-mx-2 flex items-start space-x-4 rounded-md bg-accent p-2 text-accent-foreground transition-all">
        <MixerVerticalIcon className="mt-px h-5 w-5" />
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">João Nunes</p>
          <p className="text-sm leading-none">Switcher</p>
        </div>
      </div>
      <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
        <CameraIcon className="mt-px h-5 w-5" />
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">Nalanda Nunes</p>
          <p className="text-sm leading-none">Cam 2</p>
        </div>
      </div>
      <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
        <CameraIcon className="mt-px h-5 w-5" />
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">Nalanda Nunes</p>
          <p className="text-sm leading-none">Cam 3</p>
        </div>
      </div>
      <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
        <CameraIcon className="mt-px h-5 w-5" />
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">Nalanda Nunes</p>
          <p className="text-sm leading-none">Cam 4</p>
        </div>
      </div>
      <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
        <CameraIcon className="mt-px h-5 w-5" />
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">Nalanda Nunes</p>
          <p className="text-sm leading-none">Cam 5</p>
        </div>
      </div>
      <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
        <CameraIcon className="mt-px h-5 w-5" />
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">Nalanda Nunes</p>
          <p className="text-sm leading-none">Cam 6</p>
        </div>
      </div>
      <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
        <CameraIcon className="mt-px h-5 w-5" color="red" />
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">Nalanda Nunes</p>
          <p className="text-sm leading-none">Backstage</p>
        </div>
      </div>
      <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
        <FaceIcon className="mt-px h-5 w-5" />
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">Nalanda Nunes</p>
          <p className="text-sm leading-none">Additional / Treinee</p>
        </div>
      </div>
    </CardContent>
  </Card>
));
CardContent.displayName = "ServiceCard";

export { ServiceCard };
