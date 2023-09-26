"use client";
import React, { useState } from "react";
import Equipement from "../components/Equipement";
import data from "../../data/data_drops.json";
import { IItem } from "@/types/types";

const page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeSelected, setTypeSelected] = useState("amulette");

  const filterAndMapItems = (type: string): JSX.Element[] => {
    return data[type as keyof typeof data]
      ?.sort((item1: IItem, item2: IItem) => {
        const level1 = item1.drops[0]?.level || 0;
        const level2 = item2.drops[0]?.level || 0;
        return level1 - level2;
      })
      ?.filter((item: IItem) => item.item.toLowerCase().includes(searchQuery.toLowerCase()))
      ?.map((item: IItem, index: number) => (
        <React.Fragment key={index}>
          <Equipement equipement={item} />
        </React.Fragment>
      ));
  };

  return (
    <div className="flex flex-col w-full gap-4 pt-8">
      <h2 className="w-1/2 text-3xl font-bold uppercase">Liste des équipements</h2>
      <input
        type="text"
        name="search"
        id="search"
        className="h-12 px-4 text-sm rounded-md bg-secondary-blue w-fit placeholder:text-xs"
        placeholder="Rechercher..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <select
        name="type"
        id="type"
        className="p-1 rounded-sm bg-secondary-blue w-fit"
        onChange={(e) => setTypeSelected(e.target.value)}>
        {Object.keys(data).map((type: string, index: number) => {
          return (
            <option key={index} className="text-sm" value={type}>
              {type.toUpperCase()}
            </option>
          );
        })}
      </select>
      <div className="flex flex-wrap h-full gap-10 py-4 overflow-y-scroll">{filterAndMapItems(typeSelected)}</div>
    </div>
  );
};

export default page;
