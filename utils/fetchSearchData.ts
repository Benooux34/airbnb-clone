export const fetchSearchData = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSearchData`)
    const searchData = await res.json()

    return searchData
}