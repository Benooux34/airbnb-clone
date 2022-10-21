import { GetStaticProps } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'
import { fetchCardsData } from '../utils/fetchCardsData'
import { fetchExploreData } from '../utils/fetchExploreData'

type Props = {
  exploreData: ExploreData[],
  cardsData: CardsData[],
}

export default function Home({ exploreData, cardsData }: Props) {
  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explorez</h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData.map((data) => (
              <SmallCard key={data._id} data={data} />
            ))}
          </div>
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Vivez où vous voulez</h2>

          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {cardsData?.map((card) => (
              <MediumCard card={card} key={card._id} />
            ))}
          </div>
        </section>

        <LargeCard
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoors'
          description='Wishlists curated by Airbnb.'
          buttonText='Get Inspired'
        />
      </main>      
      
      <Footer />

    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {

  const exploreData = await fetchExploreData()
  const cardsData = await fetchCardsData()

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}