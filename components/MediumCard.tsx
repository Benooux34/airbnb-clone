import Image from 'next/image';
import React from 'react'

type Props = {
    card: CardsData,
    key: string;
}

const MediumCard = ({card, key}: Props) => {
  return (
    <div className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out'>
        <div className='relative h-80 w-80'>
            <Image className='rounded-xl' src={card.img} layout='fill' />
        </div>
        <h3 className='text-2xl mt-3'>{card.title}</h3>
    </div>
  )
}

export default MediumCard