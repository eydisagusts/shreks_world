import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div>
        <div className='flex flex-col text-center items-center mt-28'>
      <Image 
      src='/images/aboutshrek.png' 
      alt='About Shrek text' 
      width={600} 
      height={600} 
      />
      </div>
      <div>
        <p className='flex flex-col text-center mt-10 w-5/12 mx-auto text-lg text-green-800'>
        Welcome to Shrek's World – a realm brimming with charm, adventure, and laughter. 
        Journey through the iconic tales of Shrek and his loyal friends: 
        the fearless Fiona, the hilarious Donkey, the majestic Dragon, the feisty Gingerbread Man, and the swashbuckling Puss in Boots. 
        Immerse yourself in the heart of their stories, from the humble yet mysterious swamp and the towering Far Far Away castle, 
        to the secretive heights of Fiona's tower and the peculiar town of Duloc.
        Relive their most memorable moments with beloved quotes that capture the humor, wit, and wisdom that make this world so special. 
        Discover the quirks, strengths, and hidden stories of each character, and explore the legendary locations that set the stage for their epic adventures. 
        Shrek's World is a place where fairy tales are reimagined, and everyone – ogres, dragons, and talking animals alike – has a tale to tell. 
        Dive in and be enchanted by the world that has captivated audiences for generations.
        </p>
      </div>
      <div className='flex flex-col text-center'>
      <Link
                href="/"
                className="mt-10 inline-block text-green-700 hover:text-green-900 hover:underline mb-10"
            >
                &larr; Back to Home
            </Link>
            </div>
    </div>
  );
}