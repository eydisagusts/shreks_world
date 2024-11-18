import Link from 'next/link';
import Image from 'next/image';
import type { Location } from '../../types';

const locations: Record<string, Location> = {
    swamp: {
        name: "Swamp",
        description: "A swamp with a big green ogre.",
        imageUrl: "https://news.airbnb.com/wp-content/uploads/sites/4/2023/09/01-Shrek-Airbnb-Exterior-Credit-Alix-McIntosh-1.jpg?fit=2500%2C1667"
    },
    duloc: {
        name: "Duloc",
        description: "A perfect town with a big castle.",
        imageUrl: "https://static.wikia.nocookie.net/shrek/images/4/40/Duloc.jpg/revision/latest?cb=20140412133309"
    },
    tower: {
        name: "Tower",
        description: "A tall tower with a princess inside.",
        imageUrl: "https://static.wikia.nocookie.net/shrek/images/a/a4/Dragon%27s_Keep_Concept_Art.png/revision/latest?cb=20210503174019"
    },
    castle: {
        name: "Castle",
        description: "King Harold's and Queen Lillan's castle.",
        imageUrl: "https://static.wikia.nocookie.net/shrek/images/3/30/Palace_courtyard.jpg/revision/latest/scale-to-width-down/2440?cb=20221130201509"
    },
};

export default function Locations() {
    return (
        <div className='container mx-auto p-6'>
            <div className='flex flex-col items-center text-3xl font-semibold mt-20'>
                <Image 
                src="/images/locations.png" 
                alt="Shrek" 
                width={300} 
                height={300}
                 />
            </div>
            <div className='grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-20 justify-center'>
                {Object.entries(locations).map(([key, location]) => (
                    <div key={key} className='flex flex-col items-center mb-8'>
                        <Link href={`/locations/${key}/details`} className="p-6 rounded-lg bg-green-300 shadow-lg hover:bg-green-400 text-center text-2xl font-bold w-full ">
                            {location.name}
                            <p className="mt-2 text-sm font-semibold">{location.description}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

