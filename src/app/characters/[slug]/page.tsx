import { Character } from "../../../types";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const characterData: Record<string, Character> = {
  shrek: {
    name: "Shrek",
    description:
      "Shrek is a large, green-skinned, physically intimidating ogre with a Scottish accent, who once lived alone with a resentment towards those who judged him by appearance. He would open up after meeting his best friend Donkey and wife Fiona, having a new perspective on society's views towards ogres. This would lead Shrek to become heir to the kingdom of Far Far Away, and raise three children.",
    imageUrl:
      "https://i2-prod.mirror.co.uk/incoming/article33207923.ece/ALTERNATES/s1200b/0_shrek.jpg",
      quotes: ["Ogres are like onions in the sense that they have layers. Ogres are like onions. Ogres have layers... Onions have layers.", "What are you doing in my swamp?", "Better out than in, I always say."]
  },

  fiona: {
    name: "Princess Fiona",
    description: "Fiona is a beautiful princess, the daughter of King Harold and Queen Lillian of the kingdom of Far Far Away.  Due to a curse placed on her as a child, she transformed into an ogress every night when the sun sets. She is initially determined to break the enchantment by kissing a prince, only to meet Shrek, an ogre, instead. The transforming spell was broken and she permanently took the form of an ogress after realizing Shrek was her true love. She and Shrek marry and have three babies named Fergus, Farkle and Felicia.",
    imageUrl:
      "https://static.wikia.nocookie.net/dreamworks/images/3/34/Fiona_Profile.jpg/revision/latest/thumbnail/width/360/height/360?cb=20231223034631",
      quotes: ["I want what any princess wants - to live happily ever after... with the ogre I married.", "The battle is won. You may remove your helmet, good Sir", "But I'm supposed to be rescued by my true love, not by some ogre and his PET!" ]
    },

  donkey: {
    name: "Donkey",
    description: "Donkey's special power was his ability to talk, which his owner, an old woman, tried to capitalize on. Following a lucky escape, he befriends Shrek, who, although was annoyed by Donkey's non-stop chatter, slowly and reluctantly develops an affection for him. Donkey is known for his love of waffles, his tendency to be a bit of a coward, and his ability to talk his way out of sticky situations. Donkey marries Elisabeth the Dragon and has six dragon-donkey hybrid children.",
    imageUrl:
      "https://static.wikia.nocookie.net/dreamworks/images/1/18/Donkey_Profile.jpg/revision/latest?cb=20231223024256",
      quotes: ["You're so wrapped up in layers, onion boy, you're afraid of your own feelings.", "This is gonna be fun! We can stay up late, swappin' manly stories, and in the mornin' I'm makin' waffles.", "You can't do this to me, Shrek. I'm too young for you to die!"]
  },

  elizabeth: {
    name: "Elizabeth the Dragon",
    description: "Dragon (canonically named Elizabeth) is a green-eyed, red dragon that lived in her keep where once guarded Fiona's tower. Donkey and Elisabeth met while rescuing Fiona from the tower. At first sight, Donkey was terrified of her, but somewhow managed to smooth talk her into falling in love with him. Donkey finally rescued Elisabeth from the tower and they eventually fell in love, married and had six dragon-donkey hybrid children.",
    imageUrl:
      "https://static.wikia.nocookie.net/dreamworks/images/d/df/Dragon_Profile.jpg/revision/latest?cb=20231224234654",
      quotes: ["rooooar", "roar", "ROAR"]
  },

  puss: {
    name: "Puss in boots",
    description: "Puss in Boots, often referred to as just Puss, is a ginger-striped cat that is skilled with a sword and whose name is derived from the hat and boots he wears. He was initially hired by King Harold, Fiona's father, to kill Shrek but later became Shrek's faithful sidekick, until leaving to become the 'fearless hero' he always believed himself to be.",
    imageUrl:
      "https://static.wikia.nocookie.net/pussinbootsnetflix/images/d/d6/CuteKittenEyes.jpeg/revision/latest/scale-to-width-down/985?cb=20230227041601",
      quotes: ["At least you don't look like a bloated roadside piñata. You really need to go on a diet.", "I hate Mondays.", "Fear me, if you dare!" ]
  },

  gingerbread: {
    name: "Gingerbread Man",
    description: "Gingerbread Man, also known as Gingy, is a gingerbread cookie who was created by the Muffin Man. Gingy is made of gingerbread and is about the size of a human hand. He is decorated with colored frosting and two gumdrops of which he is very protective of. Gingy presents himself as a cheerful and carefree individual. However, this is mostly a facade for his public appearances, as he has shown to be an extreme worrywart and is occasionally snarky.",
    imageUrl:
      "https://www.nj.com/resizer/v2/https%3A%2F%2Fadvancelocal-adapter-image-uploads.s3.amazonaws.com%2Fimage.nj.com%2Fhome%2Fnjo-media%2Fwidth2048%2Fimg%2Fentertainment_impact%2Fphoto%2Fshrek-forever-afterjpg-28635847362929a3.jpg?auth=837d95eeb32c381ce763447cade10c5e42dfb3e7f66a57fe9f437b26d183d4c8&width=800&quality=90",
      quotes: ["No, not the buttons. Not my gumdrop buttons.", "Do you know the muffin man? The muffin man!", "You're the king of...you're the king of the stupids!" ]
    },
};

interface CharacterPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CharacterPage({ params }: CharacterPageProps) {
  const awaitedParams = await params;
  const character = characterData[awaitedParams.slug];

  if (!character) {
    return notFound();
  }

  return (
    <div className="text-center mt-20">
        <div className="absolute left-0 ml-36 mt-6 w-96">
          <h4 className="text-xl font-semibold">{character.name}'s famous quotes:</h4>
          <ul className="mt-2">
            {character.quotes.map((quote: string) => (
              <li key={quote} className="border bg-green-300 rounded-md text-lg m-4 p-2">
                "{quote}"
              </li>
            ))}
          </ul>
        </div>
        <div className="w-96 h-96 mx-auto mb-6">
          <Image
            src={character.imageUrl}
            alt={character.name}
            width={400}
            height={400}
            className="object-cover rounded-lg w-full h-full"
          />
        </div>
      <h2 className="text-3xl font-bold text-green-800">{character.name}</h2>
      <div className="flex items-center text-center justify-center w-96 mx-auto">
        <p className="mt-4">{character.description}</p>
      </div>
      <Link
        href="/characters"
        className="mt-6 inline-block text-green-700 hover:text-green-900 hover:underline mb-10"
      >
        &larr; Back to characters
      </Link>
    </div>
  );
}
