export const fetchSearchData = async () => {

    const baseUrl = `${process.env.base_url}`
    const res = await fetch(baseUrl + "/api/getSearchData")
    const searchData = await res.json()

    return searchData
}