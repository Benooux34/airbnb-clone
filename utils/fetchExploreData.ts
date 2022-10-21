export const fetchExploreData = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExploreData`)
    const exploreData = await res.json()

    return exploreData
}