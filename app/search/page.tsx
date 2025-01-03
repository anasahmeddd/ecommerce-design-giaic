import { ProductCard } from '@/components/ProductCard';
import { productData } from '@/lib/bigContants';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Shop | Giaic Ecommerce Design ",
    description: "Figma to Code Generated by Anas Ahmed for giaic hackhton practice | Shop Page",
  };

// ssr rendering

const page = ({ searchParams }: { searchParams: { query: string } }) => {
    let products: ProductProps[] | null = [];
    if (searchParams.query) {
        products = productData.filter((item) =>
            item.title.toLowerCase().includes(searchParams.query.toLowerCase())
        )

    } else {
        products = productData
    }
    return (
        <div className='flex mt-10 justify-center min-h-[90vh]'>
            {products && products.length > 0 ? <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 place-itemss-center lg:grid-cols-4 gap-3 sm:gap-9 lg:gap-14">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} isWishlistProduct={false} />
                ))}
            </div> :
                <p className='text-2xl '>No Product Found For {searchParams.query}</p>
            }
        </div>
    )
}

export default page
