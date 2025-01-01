
'use client';

import React, { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { timerData } from '@/lib/constant';

const ProductList = ({
  heading,
  headingColor,
  heading2,
  isTimer,
  btnText,
  btnColor,
  productSet,
  isWishlistProduct,
}: ProdductListProps) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SITE_URL}/api/products?start=${productSet[0]}&end=${productSet[1]}`
        );

        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]); // Set products to empty array in case of error
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchData();
  }, [productSet]);

  return (
    <section className="flex flex-col mx-4">
      <div className="flex flex-col sm:flex-row justify-between my-s24 w-full">
        <div className="flex flex-wrap gap-5 items-end">
          <div className="flex flex-col" style={{ height: !heading2 ? '102px' : '' }}>
            <div className="flex gap-4 items-center self-start">
              <div className="flex flex-col self-stretch my-auto w-5">
                <div className="flex shrink-0 h-10 bg-red-500 rounded" />
              </div>
              <h4
                style={{ color: headingColor }}
                className="self-stretch my-auto text-base font-semibold leading-none"
              >
                {heading}
              </h4>
            </div>
            {heading2 && (
              <h2 className="mt-6 text-4xl font-semibold tracking-widest leading-none text-black">
                {heading2}
              </h2>
            )}
          </div>
          {isTimer && (
            <div className="flex gap-4 text-black whitespace-nowrap min-w-[240px] w-[302px]">
              {timerData.map((item, index) => (
                <div key={index}>
                  <TimerItem label={item.label} value={item.value} />
                  {index < timerData.length - 1 && (
                    <div className="flex self-end mt-7 min-h-[16px]" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        {!btnText ? (
          <div className="flex gap-2 items-start">
            <ArrowLeft className="bg-gray-100 rounded-full" size={'2rem'} />
            <ArrowRight className="bg-gray-100 rounded-full" size={'2rem'} />
          </div>
        ) : (
          <div className="flex gap-2 items-end">
            <button
              style={{
                backgroundColor: btnColor,
                color: btnColor ? 'white' : 'black',
                border: btnColor ? '' : '2px solid gray',
              }}
              className="rounded-sm py-3 px-5 my-14"
            >
              {btnText}
            </button>
          </div>
        )}
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader border-t-transparent border-4 border-gray-400 rounded-full w-12 h-12 animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 mt-12 place-itemss-center lg:grid-cols-4 gap-3 sm:gap-9 lg:gap-14">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} isWishlistProduct={isWishlistProduct} />
          ))}
        </div>
      )}
    </section>
  );
};

const TimerItem = ({ label, value }:{label:string,value:String}) => (
  <div className="flex flex-col min-h-[50px]">
    <div className="text-xs font-medium">{label}</div>
    <div className="mt-1 text-3xl font-bold tracking-widest leading-none">{value}</div>
  </div>
);

export default ProductList;
