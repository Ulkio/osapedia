"use client";
import React, { useState } from "react";
import Altere from "../components/Altere";
import "../styles/dialog.css";
import alteres from "../../data/alteres.json";
import sorts from "../../data/data_alteres_sorts.json";
import { IAltere } from "@/types/types";

const page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="flex flex-col w-full gap-4 pt-8">
      <h2 className="w-1/2 text-3xl font-bold uppercase">Liste des altérés</h2>
      <input
        type="text"
        name="search"
        id="search"
        className="p-4 text-sm rounded-md bg-secondary-blue w-fit placeholder:text-xs"
        placeholder="Rechercher..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {/* <div className="flex gap-4"><p>feu</p> <p>terre</p> <p>air</p> <p>eau</p></div> */}
      <div className="flex flex-wrap h-full gap-10 overflow-y-scroll">
        {alteres
          .filter((altere: IAltere) => altere.nom.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((altere: IAltere, index: number) => {
            const sortsAltere = altere.actif.split(",");
            const spells = sorts.filter((sort) => sort.numero === altere.numero);
            return <Altere key={index} altere={altere} sorts={spells} nomSorts={sortsAltere} />;
          })}
      </div>
    </div>
  );
};

export default page;
