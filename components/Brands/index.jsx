import { fetchData } from "@/services/fetchData"
import Carousel from "./Carousel"

export default async function Brands() {

    const query = '*[_type == "brands"]'
    const data = await fetchData(query)

    return (
        <Carousel brands={data} />
    )
}
