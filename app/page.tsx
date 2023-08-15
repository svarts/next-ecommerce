import { CustomFilter, Hero, SearchBar } from "@/components" 
import { fetchPhones } from "@/utils"

export default async function Home() {
  const allPhones = await fetchPhones();

  const isDataEmpty = !Array.isArray(allPhones) || allPhones.length < 1 || !allPhones;

  console.log(allPhones);
  
  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className="mt-12 padding-x padding-y max-widht" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold text-white">Phone Catalogue</h1>
          <p className="text-white">Explore the phones you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="brand"/>
            <CustomFilter title="year"/>
          </div>
        </div>

        {!isDataEmpty ? (
          <section className="text-white">
            We Have Phones
          </section>
        ): (
          <div>
            <h2 className="text-white">Opps, no results</h2>
            <p className="text-white">{allPhones?.message}</p> 
          </div>
        )}

      </div>
    </main>
  )
}
