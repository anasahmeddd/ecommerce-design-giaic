import { Slider } from "6pp";
import CategoriesBoxes from "@/components/CategoriesBoxes";
import { NewArrivals } from "@/components/NewArrivals";
import ProdcutList from "@/components/ProdcutList";
import { ServicesSection } from "@/components/Service";
import { banners, categories } from "@/lib/constant";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const dynamic = 'force-static'; //ssg becuase there is no dynamic data.

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center gap-14 justify-between lg:px-14">
      <div className="flex flex-col lg:flex-row sm:gap-6 lg:gap-9 w-full">
        {/* Sidebar */}
        <aside className="lg:border-r lg:min-w-[200px] lg:max-w-[300px] p-4 sm:p-6">
          <ul className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-4 lg:gap-0 px-2 lg:px-0 
            scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
          >
            {categories.map((i) => (
              <li className="my-2 text-sm group sm:text-base" key={i}>
                <Link
                  href={`/search?category=${i.toLowerCase()}`}
                  className="text-gray-700 flex items-center gap-2 whitespace-nowrap  hover:text-gray-900 transition"
                >
                  {i} <ChevronRight className="opacity-0 group-hover:opacity-100 duration-200" />
                </Link>
              </li>
            ))}
          </ul>
        </aside>
        {/* Main Content */}
        <div className="flex-1 sm:p-6">
          <Slider
            autoplay
            autoplayDuration={1500}
            showNav={false}
            images={banners}
          // className="rounded-lg shadow-md overflow-hidden"
          />
        </div>
      </div>
      {/* Flash Sale*/}
      <ProdcutList
        heading="Today's"
        headingColor="rgb(239 68 68 / var(--tw-bg-opacity, 1))"
        heading2="Flash Sales"
        productSet={[0, 4]}
        isTimer={true}
      />

      <Link href={'/search'}>
        <button className="bg-red-400 p-4 text-white">View All Products</button>
      </Link>
      <div className="py-[1px] w-full bg-slate-200" />

      {/* Catagories */}
      <CategoriesBoxes />
      <div className="py-[1px] w-full bg-slate-200" />

      {/* Best Selling */}
      <ProdcutList
        heading="This Month"
        headingColor="rgb(239 68 68 / var(--tw-bg-opacity, 1))"
        heading2="Best Selling Products"
        productSet={[4, 8]}
        btnColor="rgb(248 113 113 / var(--tw-bg-opacity, 1))"
        btnText="View All"
        isTimer={false}
      />

      {/* Banner */}
      <section >
        <Image src={'/Frame-600.png'} alt="banner" width={3090} height={500} className="w-full mt-24" />
      </section>


      {/* random products */}
      <ProdcutList
        heading="Our Products"
        headingColor="rgb(239 68 68 / var(--tw-bg-opacity, 1))"
        heading2="Explore Our Products"
        productSet={[8, 16]}
        isTimer={false}
      />

      <Link href={'/search'}>
        <button className="bg-red-400 p-4 text-white">View All Products</button>
      </Link>      <div className="py-[1px] w-full bg-slate-200" />

      {/* Gird Layout */}
      <NewArrivals />

      {/* services */}
      <ServicesSection />
    </main>
  );
}


