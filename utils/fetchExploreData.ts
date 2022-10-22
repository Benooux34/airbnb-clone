export const fetchExploreData = async () => {

    const baseUrl = `${process.env.base_url}`
    const res = await fetch(baseUrl + "/api/getExploreData")
    const exploreData = await res.json()

    return exploreData
}