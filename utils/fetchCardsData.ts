export const fetchCardsData = async () => {

    const baseUrl = `${process.env.base_url}`
    const res = await fetch(baseUrl + "/api/getCardsData")
    const cardsData = await res.json()

    return cardsData
}