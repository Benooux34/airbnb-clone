import Image from 'next/image';
import React from 'react'

type Props = {
    data: ExploreData,
    key: string;
};

const SmallCard = ({ data, key }: Props) => {
    console.log(data.img)
  return (
    <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
        <div className='relative h-16 w-16'>
            <Image className='rounded-lg' src={data.img} layout='fill' />
        </div>
        <div className=''>
            <h2>{data.location}</h2>
            <h3 className='text-gray-500'>{data.distance}</h3>
        </div>
    </div>
  )
}

export default SmallCard