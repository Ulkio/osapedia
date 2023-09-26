import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full">
      <div className="flex flex-col justify-center gap-16 basis-1/3">
        <h2 className="text-4xl font-black ">Bienvenue sur OSAPEDIA</h2>
        <div className="flex flex-col gap-8 pb-6 text-lg">
          <div>
            <p>
              Le guide pour votre aventure sur <span className="font-bold">OSATOPIA 2.</span>
            </p>
            <p>Comment drop cet altéré ? Quels sont ses sorts ? Et mes équipements, où les trouver ? </p>
            <p>Tout est accessible ici !</p>
          </div>
          <Link href={"/alteres"}>
            <button className="self-start px-8 py-2 font-black text-black transition duration-100 ease-linear border border-solid rounded-md bg-primary-yellow hover:bg-transparent hover:border-primary-yellow hover:text-white">
              C’EST PARTI <span className="pl-2 text-xl">&rarr;</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-end basis-2/3">
        <div className="grid grid-cols-2">
          <Image src={"/img/pet1-big.png"} width={250} height={250} alt="generic" className="object-scale-down" />
          <Image src={"/img/pet2-big.png"} width={250} height={250} alt="generic" className="object-scale-down " />
          <Image src={"/img/pet3-big.png"} width={300} height={300} alt="generic" className="object-scale-down" />
          <Image src={"/img/pet4-big.png"} width={250} height={250} alt="generic" className="object-scale-down " />
        </div>
      </div>
    </div>
  );
}
