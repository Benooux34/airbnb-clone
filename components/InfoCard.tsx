import Image from 'next/image';
import React from 'react'
import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'

type Props = {
    search: SearchData,
    key: string;
}

const InfoCard = ({ search, key }: Props) => {
  return (
    <div className='flex flex-col sm:flex-row py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t'>
        <div className='relative h-52 w-full md:h-52 sm:w-80 flex-shrink-0'>
            <Image className='rounded-xl' src={search.img} layout='fill' objectFit='cover' />
        </div>

        <div className='flex flex-col flex-grow pl-5'>
            <div className='hidden sm:inline-flex justify-between'>
                <p>{search.location}</p>
                <HeartIcon className='h-7 cursor-pointer' />
            </div>

            <h4 className='py-2 sm:pt-0 text-xl'>{search.title}</h4>
            <div className='hidden sm:inline border-b w-10 pt-2' />
            <p className='hidden sm:inline pt-2 text-sm text-gray-600 flex-grow'>{search.description}</p>

            <div className='flex justify-between items-end sm:pt-5'>
                <p className='flex items-center'>
                    <StarIcon className='h-5 text-red-400' />
                    {search.star}
                </p>

                <div>
                    <p className='text-lg font-semibold pb-2 lg:text-2xl'>{search.price}</p>
                    <p className='text-right font-extralight'>{search.total}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoCard