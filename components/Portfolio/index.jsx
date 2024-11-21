import { fetchData } from "@/services/fetchData"
import PortfolioBox from "./PortfolioBox"
import Link from "next/link"

export default async function Portfolio() {
  const query = '*[_type == "portfolio"]'
  const portfolios = await fetchData(query)

  return (
    <section id="portfolio" className="my-24">
      <div className="container w-full">

        <h2 className="subtitle mb-12">PORTFOLYOM</h2>
        
        {/* Portfolio Boxes */}
        <div className="flex w-full h-full gap-8 flex-wrap pb-8">
          {portfolios?.length > 0 ? (
              portfolios.map((portfolio) => (
                <PortfolioBox key={portfolio._id} name={portfolio.name} image={portfolio.image} link={portfolio.link} />
              ))
            ) : (
              <p>Yüklenirken bir hata meydana geldi.</p>
            )}
        </div>

        {/* More Button */}
        <Link href={"https://www.behance.net/fatihkabul"} target="_blank" className="border-2 px-4 py-2 text-lg w-fit mx-auto
        group relative flex items-center justify-center overflow-hidden rounded-full border-neutral-200 font-medium text-[#C4DFE6] shadow-md transition duration-300 ease-out">
          
          <span className="absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-neutral-200 text-zinc-950 duration-200 group-hover:translate-x-0">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex h-full w-full transform items-center justify-center transition-all duration-200 text-neutral-200 group-hover:translate-x-full">
              Daha Fazla
            </span>
            <span className="invisible relative">Daha Fazla</span>

        </Link>

      </div>
    </section>
  )
}
