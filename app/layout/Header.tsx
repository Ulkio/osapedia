"use client";
import React from "react";
import Link from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import "../styles/dropdown.css";

const Header = () => {
  return (
    <div className="sticky top-0 flex justify-between h-16 py-4 shadow-xl bg-primary-blue px-44 backdrop-filter backdrop-blur-lg bg-opacity-60">
      <div>
        <h1 className="text-2xl font-black">
          <Link href="/">OSAPEDIA</Link>
        </h1>
      </div>
      <div className="flex items-center justify-center w-full gap-40 font-bold">
        {/* <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="uppercase select-none hover:cursor-pointer" aria-label="Customise options">
              Altérés
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content className="DropdownMenuContent" align={"start"}>
              <DropdownMenu.Item className="DropdownMenuItem" asChild>
                <Link href={"alteres"}>Liste des altérés</Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="DropdownMenuItem" asChild>
                <Link href={"zones"}>Position des altérés</Link>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root> */}
        <Link href={"alteres"} className="uppercase select-none hover:cursor-pointer">
          Liste des altérés
        </Link>
        <Link href={"equipements"} className="uppercase select-none hover:cursor-pointer">
          Équipements
        </Link>
        {/* <Link href={"monstres"} className="uppercase select-none hover:cursor-pointer">
          Monstres
        </Link> */}
      </div>
    </div>
  );
};

export default Header;
