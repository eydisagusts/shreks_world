'use client';
import { CounterContext } from "@/context/CounterContext";
import { useCounter } from "@/context/CounterContext";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { count } = useCounter();
  return (
    <>
    <div className="flex flex-col items-center justify-center p-8">
      <div className="mt-10">
        <Image 
        src="/images/shreksworld.png" 
        alt="Shrek" 
        width={450} 
        height={400} 
        />
      </div>
      <div className="py-36 bg-green-300 px-96 mt-10 flex flex-col items-center relative rounded-lg ">
      <h1 className="text-5xl font-semibold text-green-800">Welcome to Shrek's world!</h1>
      <p className="text-xl text-green-800 mt-4">Get to know Shrek and his family</p>

      <div className="absolute bottom-1 mb-4 text-center">
        <p className="text-green-800 underline">Have you clicked the Shrek button yet? Find the Shrek button to increase the number!</p>
        <p className="text-green-800 font-bold mt-2">You have clicked the Shrek button: {count} times</p>
      </div>
      </div>
      <section className= "grid grid-cols-3 gap-28 mt-20">
        <Link href="/characters"
        className=" p-6 rounded-lg bg-green-300 shadow-lg hover:bg-green-400 text-center text-xl text-green-900 font-bold"> 
        Characters 
        <p className="font-thin mt-2">Get to know Shrek's family and friends!</p>
        </Link>

        <Link href="/locations"
        className="p-6 rounded-lg bg-green-300 shadow-lg hover:bg-green-400 text-center text-xl text-green-900 font-bold"> 
        Location 
        <p className="font-thin mt-2">Get to know Shrek's swamp and more locations</p>
        </Link>

        <Link href="/about"
        className="p-6 rounded-lg bg-green-300 shadow-lg hover:bg-green-400 text-center text-xl text-green-900 font-bold"> 
        About 
        <p className="font-thin mt-2">Get to know Shrek</p>
        </Link>
      </section>
    </div>
    </>
  );
}
