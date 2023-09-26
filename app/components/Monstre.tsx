import React from "react";
import Image from "next/image";

const Monstre = () => {
  return (
    <div className="h-52 w-48 bg-secondary-blue shadow-2xl rounded-sm flex flex-col justify-between items-center py-4">
      <Image src={"/img/mob1.png"} width={100} height={100} alt="carafon" className="object-scale-down" />
      <p>Pissenlit</p>
      <div className="flex">
        <Image src={"/img/stuff1.png"} width={50} height={50} alt="sort" />
      </div>
    </div>
  );
};

export default Monstre;
