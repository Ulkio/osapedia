"use client";
import React from "react";
import Image from "next/image";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { IDrop, IItem } from "@/types/types";

interface EquipementProps {
  equipement: IItem;
}

const Equipement = ({ equipement }: EquipementProps) => {
  return (
    <div className="flex flex-col items-center justify-between px-2 py-4 rounded-sm w-60 h-72 bg-secondary-blue">
      <div className="flex flex-col items-center justify-center ">
        <Image
          src={`/img/equipments/${equipement.item}.png`}
          width={50}
          height={50}
          alt={equipement.item}
          className="object-scale-down"
        />
        <p className="text-xl font-bold text-center">{equipement.item}</p>
        <p className="text-xs italic text-center">Niv. {equipement.drops[0].level}</p>
        {equipement.drops[0].panoplie && <p className="text-xs italic text-center">{equipement.drops[0].panoplie}</p>}
      </div>
      <div className="flex flex-wrap w-full gap-1">
        {equipement.drops.map((drop: IDrop, index: number) => {
          return (
            <React.Fragment key={index}>
              <p
                data-tooltip-id={drop.id.toString()}
                data-tooltip-content={drop.taux + " %"}
                className="px-2 py-1 text-xs rounded-sm bg-primary-blue hover:cursor-pointer">
                {drop.monstre}
              </p>
              <Tooltip
                noArrow
                offset={0}
                id={drop.id.toString()}
                style={{ fontSize: "12px", padding: "4px", fontWeight: "bold" }}
              />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Equipement;
