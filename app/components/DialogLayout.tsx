import React from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import * as Dialog from "@radix-ui/react-dialog";
import "../styles/dialog.css";
import Image from "next/image";
import { IAltere, ISort } from "@/types/types";

interface DialogProps {
  altere: IAltere;
  sorts: string[];
  detailSorts: ISort[];
}

const DialogLayout = ({ altere, sorts, detailSorts }: DialogProps) => {
  const zones = altere.value.split("\n");
  const imgName = altere?.nom
    .toLowerCase()
    .replace("é", "e")
    .replace("é", "e")
    .replace("è", "e")
    .replace("ê", "e")
    .replace("œ", "oe");
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <div className="flex flex-col w-full items-center justify-center h-full  gap-4">
          <Image src={`/img/alteres/${imgName}.png`} width={150} height={150} alt={imgName} />
          <p className="text-3xl font-bold">{altere.nom}</p>
          {/* <p>{altere.rarity}</p> */}
          <div className="flex flex-col items-center gap-8 w-full ">
            {sorts.map((sort: string, index: number) => {
              return (
                <p key={index} className="p-6 w-1/2  text-md text-center rounded-sm bg-primary-blue">
                  {sort}
                </p>
              );
            })}
          </div>
          <div className="flex flex-wrap items-center justify-center w-full gap-4 self-start">
            {altere.obtention === "Craft" ? (
              <>
                <p className="text-center w-full font-bold text-xl">Recette : </p>
                <p className="p-4 text-md rounded-sm bg-primary-blue">{altere.value}</p>
              </>
            ) : (
              <>
                <p className="text-center w-full font-bold text-xl">Drop :</p>
                {zones.map((zone, index) => {
                  return (
                    <p key={index} className="p-2 text-md rounded-sm bg-primary-blue">
                      {zone.replace("Altéré ", "").replace("(", "").replace(")", "")}
                    </p>
                  );
                })}
              </>
            )}
          </div>
        </div>
        <Dialog.Close asChild>
          <button aria-label="Close">
            <Cross2Icon className="absolute top-4 right-4 h-8 w-8 hover:cursor-pointer transition duration-200" />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
};

export default DialogLayout;
