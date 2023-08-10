import { CustomFilter, Hero, SearchBar } from "@/components" 

export default function Home() {
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
      </div>
    </main>
  )
}
