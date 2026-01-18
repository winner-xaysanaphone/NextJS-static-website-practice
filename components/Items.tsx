import Image from "next/image"

function Items({ imageSrc, title, isNew, description, pages, authors, releaseDate, categories }: {
    imageSrc: string,
    title: string,
    isNew: boolean,
    description: string,
    pages: string,
    authors: string,
    releaseDate: string,
    categories: string
}) {
    return (

        <div className="card bg-base-100 w-full shadow-sm border border-base-200"> {/* Changed w-96 to w-full */}
            <figure className="px-4 pt-4 hover-3d"> {/* Added padding to keep image from touching edges */}
                <img
                    src={imageSrc}
                    alt={title}
                    className="rounded-xl aspect-[3/4] object-cover"
                />
            </figure>
            <div className="card-body p-4">
                <h2 className="card-title text-sm md:text-base">
                    <span className="line-clamp-1">{title}</span>
                    {isNew && <div className="badge badge-secondary badge-sm">NEW</div>}
                </h2>

                {/* Added line-clamp to keep description heights consistent */}
                <p className="text-xs text-gray-500 line-clamp-2">{description}</p>

                {/* flex-wrap is key here to prevent the badges from overlapping */}
                <div className="card-actions justify-start flex-wrap gap-1 mt-2">
                    <div className="badge badge-outline badge-xs md:badge-sm">{pages} pages</div>
                    <div className="badge badge-outline badge-xs md:badge-sm">{categories}</div>
                    <div className="">By: {authors}</div>
                </div>

                <div className="card-actions justify-end mt-4 ">
                    <div className="tooltip">
                        <div className="tooltip-content">
                            <div className="animate-bounce text-orange-400 -rotate-10 text-2xl font-black">Wow!</div>
                        </div>
                        <button className="btn btn-primary btn-sm btn-block">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Items