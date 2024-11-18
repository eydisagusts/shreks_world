'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const Search = () => {
    const [search, setSearch] = useState('');

    return (
        <div className='flex flex-col items-center mt-28'>
            <div className='mb-10'>
                <Image 
                src='/images/search.png' 
                alt='Shrek search'
                width={200}
                height={200}
                className='mb-4 ml-3'
                />
                <p className='text-green-800 font-semibold'>
                    Search for anything you want!
                </p>
            </div>
            <input 
            type="text" 
            // Var í basli með að gera það sama fyrir Search takkann og naum á tíma en virkar á Enter
            onKeyDown={e => {
                if (e.key === 'Enter') {
                    if (search === '') {
                        alert('Please input a text in the search box');
                        e.preventDefault();
                    } else {
                        window.location.href = `/results?q=${search}`;
                    }
                }
            }}
            placeholder='Search...'
            onChange={e => setSearch(e.target.value)} 
            className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-6 shadow-lg'
            />

            <Link 
            href={{
                pathname: '/results',
                query: { q: search, anotherParam: 'anotherParam' },
            }}
            className='bg-blue-500 text-center text-white font-semibold py-2 px-4 rounded-md shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-10'
            >
            Search
            </Link>
        </div>
    );
};

export default Search;

