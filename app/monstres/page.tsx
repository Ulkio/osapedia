import React from "react";
import Monstre from "../components/Monstre";

const Page = () => {
  return (
    <div className="flex flex-col w-full pt-8 gap-4">
      <h2 className="text-3xl w-1/2">Liste des monstres</h2>
      <input
        type="text"
        name="search"
        id="search"
        className="bg-secondary-blue w-fit rounded-md px-4 text-sm h-12 placeholder:text-xs"
        placeholder="Rechercher..."
      />
      <div className="flex flex-wrap gap-x-20 gap-y-10 overflow-y-scroll h-full">
        <Monstre />
        <Monstre />
        <Monstre />
        <Monstre />
        <Monstre />
        <Monstre />
      </div>
    </div>
  );
};

export default Page;
