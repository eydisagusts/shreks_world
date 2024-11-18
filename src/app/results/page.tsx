'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

export default function SearchBar() {
    const searchParams = useSearchParams();

    const q = searchParams.get('q');
    const another = searchParams.get('anotherParam');

    return (
        <div className='flex-col flex text-center mt-28'>
            <div className='flex flex-col items-center'>
                <Image
                src='/images/results.png' 
                alt='Search results'
                width={250}
                height={250}
                />
            </div>
            <div>
            <p className='mt-14 text-lg mb-6 text-green-900 font-semibold'>Search: {q}</p>
            </div>
            <div className='text-green-700 hover:text-green-900 hover:underline'>
            <Link 
            href='/search'>
            &larr; Go back to search
            </Link>
            </div>
        </div>
    )
}