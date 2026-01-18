import { bestSellers, latestEbooks } from '@/lib/db.js'
import Items from './Items'
const Section = () => {
    return (
        <div className="p-4">
            <div>
                <div className="mx-auto max-w-2xl lg:mx-0 my-2">
                    <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Best Sellers</h2>
                    <p className="mt-2 text-lg/8 text-gray-600">Explore the best sellers from Packt</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {bestSellers.length > 0 &&
                        bestSellers.map((item, index) => (
                            <Items
                                key={index} // Preferred to use a unique ID
                                imageSrc={item.imageSrc}
                                title={item.title}
                                isNew={item.isNew}
                                description={item.description}
                                pages={item.pages}
                                authors={item.authors}
                                releaseDate={item.releaseDate}
                                categories={item.categories}
                            />
                        ))
                    }
                </div>
            </div>
            <div>
                <div className="mx-auto max-w-2xl lg:mx-0 my-2">
                    <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Latest Titles</h2>
                    <p className="mt-2 text-lg/8 text-gray-600">Explore the latest titles from Packt</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {latestEbooks.length > 0 &&
                        latestEbooks.map((item, index) => (
                            <Items
                                key={index} // Preferred to use a unique ID
                                imageSrc={item.imageSrc}
                                title={item.title}
                                isNew={item.isNew}
                                description={item.description}
                                pages={item.pages}
                                authors={item.authors}
                                releaseDate={item.releaseDate}
                                categories={item.categories}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Section