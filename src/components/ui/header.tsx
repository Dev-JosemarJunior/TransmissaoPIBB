"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import { signIn } from "next-auth/react";

const Header = () => {
  const handleLoginClick = async () => {
    await signIn();
  };

  return (
    <>
      <div className="sticky top-0 h-20 w-full bg-zinc-800">
        <div className="container mx-auto h-full px-4">
          <div className="flex h-full items-center justify-between">
            <div className="flex items-center">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    size="icon"
                    variant="outline"
                    className=" mr-4 border-transparent bg-transparent text-white hover:bg-primary hover:text-white"
                  >
                    <MenuIcon className="" />
                  </Button>
                </SheetTrigger>
                <SheetContent side={"left"} className="text-purple-300">
                  <SheetHeader className="flex content-center justify-center">
                    <SheetTitle className="text-sm text-slate-200">
                      ISERV
                    </SheetTitle>
                    <SheetClose className="text-white" />
                  </SheetHeader>
                  <div className="m-4 flex-col p-4 text-slate-200">
                    <ul className="flex-col gap-x-10">
                      <li className="m-4">
                        <SheetClose asChild>
                          <Link href="/">
                            <p>Escala Fechada</p>
                          </Link>
                        </SheetClose>
                      </li>

                      <li className="m-4">
                        <SheetClose asChild>
                          <Link href="/Ultimos30Dias">
                            <p>Ultimos 30 dias</p>
                          </Link>
                        </SheetClose>
                      </li>

                      <li className="m-4">
                        <SheetClose asChild>
                          <Link href="/EventosAbertos">
                            <p>Em Aberto</p>
                          </Link>
                        </SheetClose>
                      </li>
                    </ul>
                  </div>
                </SheetContent>
              </Sheet>
              <Link href="/">
                <p className="text-s font-bold uppercase text-zinc-100">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text font-extrabold text-transparent">
                    IServ
                  </span>{" "}
                  App
                </p>
              </Link>
            </div>

            <div>
              <Button className=" mx-2 bg-gradient-to-r from-purple-400 to-pink-600 hover:from-green-500 hover:to-lime-700 hover:transition-all ">
                Sign Up
              </Button>
              <Button
                onClick={handleLoginClick}
                className="mx-2 bg-zinc-500 hover:bg-emerald-500"
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
