"use client";
import { useCounter } from "@/context/CounterContext";
import Link from "next/link";
import Image from "next/image";
import type { Character } from "../../types";

const characters: Record<string, Character> = {
  shrek: {
    name: "Shrek",
    description: "Shrek is a large, green-skinned, physically intimidating ogre with a Scottish accent, who once lived alone with a resentment towards those who judged him by appearance...",
    imageUrl:
      'https://i2-prod.mirror.co.uk/incoming/article33207923.ece/ALTERNATES/s1200b/0_shrek.jpg',
  },

  fiona: {
    name: "Princess Fiona",
    description: "Fiona is a beautiful princess, the daughter of King Harold and Queen Lillian of the kingdom of Far Far Away.  Due to a curse placed on her as a child, she transformed into an...",
    imageUrl:
      "https://static.wikia.nocookie.net/dreamworks/images/3/34/Fiona_Profile.jpg/revision/latest/thumbnail/width/360/height/360?cb=20231223034631",
  },

  donkey: {
    name: "Donkey",
    description: "Donkey's special power was his ability to talk, which his owner, an old woman, tried to capitalize on. Following a lucky escape, he befriends Shrek, who, although was annoyed by Donkey's non-stop chatter...",
    imageUrl:
      "https://static.wikia.nocookie.net/dreamworks/images/1/18/Donkey_Profile.jpg/revision/latest?cb=20231223024256",
  },

  elizabeth: {
    name: "Elizabeth the Dragon",
    description: "Dragon (canonically named Elizabeth) is a green-eyed, red dragon that lived in her keep where once guarded Fiona's tower. Donkey and Elisabeth met while rescuing Fiona from the tower...",
    imageUrl:
      "https://static.wikia.nocookie.net/dreamworks/images/d/df/Dragon_Profile.jpg/revision/latest?cb=20231224234654",
  },

  puss: {
    name: "Puss in boots",
    description: "Puss in Boots, often referred to as just Puss, is a ginger-striped cat that is skilled with a sword and whose name is derived from the hat and boots he wears. He was initially hired by King Harold, Fiona's father, to kill Shrek...",
    imageUrl:
      "https://static.wikia.nocookie.net/pussinbootsnetflix/images/d/d6/CuteKittenEyes.jpeg/revision/latest/scale-to-width-down/985?cb=20230227041601",
  },

  gingerbread: {
    name: "Gingerbread Man",
    description: "Gingerbread Man, also known as Gingy, is a gingerbread cookie who was created by the Muffin Man. Gingy is made of gingerbread and is about the size of a human hand...",
    imageUrl:
      "https://www.nj.com/resizer/v2/https%3A%2F%2Fadvancelocal-adapter-image-uploads.s3.amazonaws.com%2Fimage.nj.com%2Fhome%2Fnjo-media%2Fwidth2048%2Fimg%2Fentertainment_impact%2Fphoto%2Fshrek-forever-afterjpg-28635847362929a3.jpg?auth=837d95eeb32c381ce763447cade10c5e42dfb3e7f66a57fe9f437b26d183d4c8&width=800&quality=90",
  },
};

export default function Characters() {
  const { incrementCounter, count } = useCounter();

  return (
    <div>
      <div className="ml-6 mt-4">
        <div>
          <p className="underline text-green-800">You found the Shrek counter!</p>
          <p className="font-bold text-green-950">The current count is: {count}</p>
        </div>
        <button
          type="button"
          className="bg-green-400 p-2 rounded-lg hover:bg-green-500"
          onClick={incrementCounter}
        >
          Shrek counter
        </button>
      </div>
      <div className="flex flex-col items-center">
        <Image 
        src='/images/characters.png'
        alt='Shrek characters text'
        width={350}
        height={350}
        />
      </div>
    <div className="grid grid-cols-3 mt-10 gap-6 my-6 text-center mb-36">
      {Object.entries(characters).map(([slug, character]) => (
        <Link
        key={slug}
        href={`/characters/${slug}`}
        className="bg-green-100 rounded-lg p-6 shadow hover:bg-green-200"
        >
        <div className="relative w-full h-96">
          <Image
            src={character.imageUrl}
            alt={character.name}
            layout="fill"
            objectFit="cover"
            objectPosition={slug === "gingerbread" ? "top" : "center"} // myndin af Gingerbread man sýndi ekki á honum andlitið, þurfti aðeins að lagfæra hana
            className="rounded-lg"
          />
        </div>
        <h2 className="text-2xl font-semibold text-green-800 mt-4">
          {character.name}
        </h2>
        <p className="mt-2">{character.description}</p>
        </Link>
      ))}
    </div>
    </div>
  );
}
