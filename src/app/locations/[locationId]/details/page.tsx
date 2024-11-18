'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Location {
    name: string;
    description: string;
    imageUrl: string;
}

const locations: Record<string, Location> = {
    swamp: {
        name: "Shrek's Swamp",
        description: "Shrek's swamp is the residence of Shrek, Princess Fiona, and their children. The Swamp House is a giant tree that contains two rooms. Upon entrance, there's the main room, which functions as both a kitchen and dining room. There is also a bed for the Ogre Triplets. And the west of the main room is Shrek and Fiona's bedroom. In Rumpelstiltskin’s universe there is no furniture in the house because it is just an empty tree stump with no doors or windows carved into it and the marshes surrounding have completely dried up. Outside, he has an ogre mud bath where he can relax and play with his children.",
        imageUrl: "https://news.airbnb.com/wp-content/uploads/sites/4/2023/09/01-Shrek-Airbnb-Exterior-Credit-Alix-McIntosh-1.jpg?fit=2500%2C1667"
    },
    duloc: {
        name: "Duloc",
        description: "Duloc is a city-state centered around an enormous castle. The citizens of Duloc live under a strict dictatorship commanded by Lord Farquaad- who spends his short existence trying to make the city and its surrounding territory artificially perfect, with symmetrical planning and rigid rules for the townspeople to follow. He further plans to transform it into a kingdom by marrying Princess Fiona, but ultimately fails after being eaten alive by Dragon.",
        imageUrl: "https://static.wikia.nocookie.net/shrek/images/4/40/Duloc.jpg/revision/latest?cb=20140412133309"
    },
    tower: {
        name: "Fiona's Tower",
        description: "Princess Fiona's tower is the tallest tower of the Dragon's Keep. Princess Fiona was locked away in its highest room, waiting for her true love to slay her Dragon guardian and rescue her. It is revealed that Fiona's parents, Harold and Lillian, locked her away in the tower. They did so at the advice of Fairy Godmother, with the intention of having her son Prince Charming rescue her, marry her, and become king of Far Far Away. Later when Shrek chastises Harold for locking Fiona away, Harold similiarly justifies that he did it because he loves her. Fiona was told by her father that she would be 'going away for a while', which she assumed meant that she would be attending a finishing school. Later she seemed happy about being sent to the tower, when her mother had told her that when she was old enough her Prince Charming would rescue her and return her back home.",
        imageUrl: "https://static.wikia.nocookie.net/shrek/images/a/a4/Dragon%27s_Keep_Concept_Art.png/revision/latest?cb=20210503174019"
    },
    castle: {
        name: "Far Far Away Castle",
        description: "The Far Far Away Castle is the home of the Far Far Away Royal Family, princess Fiona and her parents, and their servants. The castle contains many erect towers, keeps, fortress, drawbridges, etc. It has a garden stretching out to the sea, which is on top of a huge grand balcony shape like building on the cliffs. The castle is home to a pond with a statue of King Harold. It has 108 turrets and has a moat, which has a bridge connecting to drawbridge. Also, there is the courtyard, the site of Shrek and Fiona's appalling arrival.",
        imageUrl: "https://static.wikia.nocookie.net/shrek/images/3/30/Palace_courtyard.jpg/revision/latest/scale-to-width-down/2440?cb=20221130201509"
    },
};

import { useEffect, useState } from 'react';

export default function LocationDetails({ params }: { params: Promise<{ locationId: string }> }) {
    const [locationId, setLocationId] = useState<string | null>(null);

    useEffect(() => {
        params.then(({ locationId }) => setLocationId(locationId));
    }, [params]);

    const location = locationId ? locations[locationId] : null;

    if (!location) {
        return (
            <div className="text-center mt-20">
                <h2 className="text-3xl font-bold text-red-800">Location not found</h2>
                <Link
                    href="/locations"
                    className="mt-28 inline-block text-green-700 hover:text-green-900 mb-10"
                >
                    &larr; Back to locations
                </Link>
            </div>
        );
    }

    return (
        <div className="text-center mt-20">
            <div className="absolute left-10 mt-20 w-96 h-96 mx-auto mb-6">
                <Image
                    src={location.imageUrl}
                    alt={location.name}
                    width={400}
                    height={400}
                    className="object-cover rounded-lg w-full h-full"
                />
            </div>
            <h2 className="text-3xl font-bold text-green-800">{location.name}</h2>
            <div className="flex items-center text-center justify-center w-5/12 mx-auto">
                <p className="mt-28">{location.description}</p>
            </div>
            <Link
                href="/locations"
                className="mt-28 inline-block text-green-700 hover:text-green-900 hover:underline mb-10"
            >
                &larr; Back to locations
            </Link>
        </div>
    );
}