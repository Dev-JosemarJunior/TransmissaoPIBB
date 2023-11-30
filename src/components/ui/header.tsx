import React from "react";
import Link from "next/link";
// import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <>
      <div className="sticky top-0 h-20 w-full bg-zinc-800">
        <div className="container mx-auto h-full px-4">
          <div className="flex h-full items-center justify-between">
            <div className="flex items-center">
              <Button size="icon" variant="outline" className=" bg-white mr-4 hover:bg-primary hover:text-white border-primary">
                <MenuIcon className="" />
              </Button>
              <p className="text-s font-bold uppercase text-zinc-100">
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">IServ</span> App
              </p>
            </div>
            {/* <ul className="hidden gap-x-6 text-white md:flex">
              <li>
                <Link href="/">
                  <p>Escala Fechada</p>
                </Link>
              </li>
              <li>
                <Link href="/Ultimos30Dias">
                  <p>Ultimos 30 dias</p>
                </Link>
              </li>
              <li>
                <Link href="/EventosAbertos">
                  <p>Em Aberto</p>
                </Link>
              </li>
            </ul> */}
            <div>
              <Button className=" mx-2 bg-gradient-to-r from-purple-400 to-pink-600 hover:from-green-500 hover:to-lime-700 hover:transition-all ">Sign Up</Button>
              <Button className="mx-2 bg-zinc-500 hover:bg-emerald-500">
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
