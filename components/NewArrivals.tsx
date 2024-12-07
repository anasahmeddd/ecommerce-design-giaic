import { gridBanners } from "@/lib/bigContants";
import Image from "next/image";
import * as React from "react";

export const NewArrivals = () => {
  return (
    <section
      className=" px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8"
      aria-labelledby="new-arrivals-title"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="w-5 h-10 bg-red-500 rounded" aria-hidden="true" />
        <span className="text-base font-semibold text-red-500">Featured</span>
      </div>

      <h2
        id="new-arrivals-title"
        className="text-4xl font-semibold tracking-widest text-black mb-12"
      >
        New Arrival
      </h2>

      <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {gridBanners.map((product, index) => (
          <GridBanner key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

const GridBanner: React.FC<GridBannerProps> = ({
  title,
  description,
  imageUrl,
  imageSize,
  gridColumn ,
  gridRow ,
  ariaLabel,
}) => {
  return (
    <article
    style={{gridColumn:gridColumn,gridRow:gridRow}} 
    className={`relative rounded-lg bg-stone-950 overflow-hidden shadow-md `}
    >
      <div className="relative aspect-w-4 aspect-h-5">
        <Image
          loading="lazy"
          src={imageUrl}
          alt="gridBanner"
          width={imageSize}
          height={311}
          className="relative bottom-0 object-cover w-full"
          aria-hidden="true"
        />
      </div>
      {/* Content section */}
      <div className="absolute bottom-0 p-6 z-10">
        <h3
          className="text-xl font-semibold text-white"
        >
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-300">{description}</p>
        <button
          className="group mt-4 inline-flex items-center text-sm font-medium text-white focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-white"
          aria-label={ariaLabel || `Shop ${title} now`}
        >
          <span>Shop Now</span>
          <svg
            className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </article>
  );
};
