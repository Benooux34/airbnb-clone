export const fetchSearchData = async () => {

    const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}`
    const res = await fetch(baseUrl + "/api/getSearchData")
    const searchData = await res.json()

    return searchData
}