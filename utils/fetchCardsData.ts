export const fetchCardsData = async () => {

    const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}`
    const res = await fetch(baseUrl + "/api/getCardsData")
    const cardsData = await res.json()

    return cardsData
}