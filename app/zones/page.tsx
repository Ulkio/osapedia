"use client";
import React, { useState } from "react";
import Altere from "../components/Altere";
import alteres from "../../data/alteres.json";
import sorts from "../../data/data_alteres_sorts.json";
import { IAltere } from "@/types/types";
const Page = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  return (
    <div className="flex w-full gap-4">
      <div className="flex flex-col gap-4 pt-8 border-r-4 basis-1/2 border-r-primary-yellow">
        <h2 className="text-3xl font-bold uppercase">Liste des zones</h2>
        <input
          type="text"
          name="search"
          id="search"
          className="p-4 text-sm rounded-md bg-secondary-blue w-fit placeholder:text-xs"
          placeholder="Rechercher..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {/* <div className="flex flex-col gap-4 pt-8">
          <p className="px-8 py-2 rounded-md select-none w-fit bg-secondary-blue hover:cursor-pointer">
            Forêt d'Amakna
          </p>
          <p className="px-8 py-2 rounded-md select-none w-fit bg-secondary-blue hover:cursor-pointer">
            Forêt d'Amakna
          </p>
          <p className="px-8 py-2 rounded-md select-none w-fit bg-secondary-blue hover:cursor-pointer">
            Forêt d'Amakna
          </p>
          <p className="px-8 py-2 rounded-md select-none w-fit bg-secondary-blue hover:cursor-pointer">
            Forêt d'Amakna
          </p>
        </div> */}
      </div>
      <div className="flex flex-col gap-8 pt-8 basis-1/2 ">
        <p className="text-xl">Altérés trouvable dans la zone</p>
        <div className="flex flex-wrap justify-center overflow-y-scroll gap-x-12 gap-y-10">
          {alteres.map((altere: IAltere, index: number) => {
            const sortsAltere = altere.actif.split(",");
            const spells = sorts.filter((sort) => sort.numero === altere.numero);
            return <Altere key={index} altere={altere} sorts={spells} nomSorts={sortsAltere} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
