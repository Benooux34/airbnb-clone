import { GetServerSideProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import InfoCard from '../../components/InfoCard'
import Map from '../../components/Map'
import { fetchSearchData } from '../../utils/fetchSearchData'

type Props = {
    searchData: SearchData[],
}

const location = ({ searchData }: Props) => {
    const router = useRouter()
    const { location, startDate, endDate, number } = router.query

  return (
    <div>
        <Header placeholder={`${location}`} />

        <main className='flex'>
            <section className='flex-grow pt-14 px-6'>
                <p className='text-xs'>300+ Stays for {number} guests</p>
                <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

                <div className='hidden md:inline-flex space-x-3 mb-5 text-gray-800 whitespace-nowrap'>
                    <p className='searchFilter'>Cancellation Flexibility</p>
                    <p className='searchFilter'>Type of Place</p>
                    <p className='searchFilter'>Price</p>
                    <p className='searchFilter'>Rooms & Beds</p>
                    <p className='searchFilter'>More Filter</p>
                </div>

                <div className='flex flex-col'>
                    {searchData.map((search) => (
                        <InfoCard search={search} key={search.img} />
                    ))}
                </div>

            </section>

            <section className='hidden lg:inline-flex lg:min-w-[600px] lg:cursor-pointer'>
                <Map searchData={searchData} />
            </section>
        </main>

        <Footer />
    </div>
  )
}

export default location

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const searchData = await fetchSearchData()

    return {
        props: {
            searchData,
        }
    }
}