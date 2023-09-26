"use client";
import React from "react";
import Image from "next/image";
import { Slot } from "@radix-ui/react-slot";
import { Cross2Icon } from "@radix-ui/react-icons";
import * as Dialog from "@radix-ui/react-dialog";
import DialogLayout from "../components/DialogLayout";
import { IAltere, ISort } from "@/types/types";

interface AltereProps {
  altere: IAltere;
  sorts: ISort[] | any;
  nomSorts: string[];
}

const Altere = ({ altere, sorts, nomSorts }: AltereProps) => {
  const imgName = altere?.nom
    .toLowerCase()
    .replace("é", "e")
    .replace("é", "e")
    .replace("è", "e")
    .replace("ê", "e")
    .replace("œ", "oe");
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <div className="flex flex-col items-center justify-between py-4 rounded-sm w-60 h-72 bg-secondary-blue">
            <Image
              src={`/img/alteres/${imgName}.png`}
              width={100}
              height={100}
              alt={altere?.nom}
              className="object-scale-down"
            />
            <p>{altere?.nom}</p>
            <div className="flex flex-wrap self-start gap-2 px-4 text-sm">
              {nomSorts?.map((sort: string, index: number) => {
                return (
                  <p className="px-2 py-1 text-xs rounded-sm bg-primary-blue" key={index}>
                    {sort}
                  </p>
                );
              })}
            </div>
          </div>
        </Dialog.Trigger>
        <DialogLayout altere={altere} sorts={nomSorts} detailSorts={sorts} />
      </Dialog.Root>
    </>
  );
};

export default Altere;
