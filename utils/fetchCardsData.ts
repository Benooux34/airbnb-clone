export const fetchCardsData = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getCardsData`)
    const cardsData = await res.json()

    return cardsData
}