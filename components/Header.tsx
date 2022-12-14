import Image from 'next/image'
import React, { useState } from 'react'
import { 
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UsersIcon,
    UserCircleIcon
} from "@heroicons/react/solid"
import { DateRangePicker } from "react-date-range"
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import Router, { useRouter } from 'next/router'

type Props = {
    placeholder: string;
}

const Header = ({ placeholder }: Props) => {

    const [searchInput, setSearchInput] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [number, setNumber] = useState('1')
    const route = useRouter()
    
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    const handleSelect = (ranges: any) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const resetInput = () => {
        setSearchInput('');
    }

    const search = () => {
        Router.push({
            pathname: '/search/[location]',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                number: number,
            }
        })
    }

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
        <div className='relative flex items-center justify-center h-10 cursor-pointer my-auto'>
            <Image
                onClick={() => route.push('/')}
                src="https://links.papareact.com/qd3" 
                layout='fill' 
                objectFit='contain'
                objectPosition="left"    
            />
        </div>

        <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
            <input
                className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400'
                type="text"
                placeholder={placeholder || 'Commencer vos recherches'}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
            <SearchIcon className='hidden md:inline-flex h-8 cursor-pointer bg-red-400 text-white rounded-full p-2 md:mx-2' />
        </div>

        <div className='flex items-center space-x-4 justify-end text-gray-500'>
            <p className='hidden md:inline'>Devenez h??te</p>
            <GlobeAltIcon className='hidden sm:inline h-6' />
            <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
                <MenuIcon className='h-6 cursor-pointer' />
                <UserCircleIcon className='h-6 cursor-pointer' />
            </div>
        </div>

        {/* Condition If */}
        {searchInput && (
            <div className='hidden sm:inline-flex sm:flex-col sm:col-span-3 mx-auto mt-3'>
                <DateRangePicker
                    ranges={[selectionRange]}
                    minDate={new Date()}
                    rangeColors={["#FD5B61"]}
                    onChange={handleSelect}
                />

                <div className='flex items-center border-b mb-4'>
                    <h2 className='text-2xl flex-grow font-semibold'>Nombre d&apos;invit??s</h2>
                    <UsersIcon className='h-5' />
                    <input
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        min={1}
                        className='w-12 pl-2 text-lg outline-none text-red-400' type="number"
                        placeholder='3'
                    />
                </div>

                <div className='flex'>
                    <button onClick={resetInput} className='flex-grow text-gray-500'>Cancel</button>
                    <button
                        className='flex-grow text-red-400'
                        onClick={search}
                    >
                        Search
                    </button>
                </div>
            </div>
        )}

    </header>
  )
}

export default Header