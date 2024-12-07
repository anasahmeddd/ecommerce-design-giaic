import NotFound from '@/components/NotFound';
import ProdcutList from '@/components/ProdcutList';
import { StarRatings } from '@/components/StarRatings';
import { productData } from '@/lib/bigContants';
import { ArrowRightLeft, Truck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

//for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
    const product = productData.find((i) => params.slug === i.slug)
    if (!product) return;
    return {
        title: `${product.title} | Ecommerce Design by Anas Ahmed.`,
        description: product.title || "Shop high-quality products at Ecommerce Design by Anas Ahmed for giac hackhton practice.",
        openGraph: {
            title: `${product.title} | Ecommerce Design`,
            description: product.title || "Shop high-quality products at Ecommerce Design by Anas Ahmed.",
            url: `${process.env.ECOM_STORE_URL}/products/${params.slug}`,
            images: [
                {
                    url: product.image || 'fallback-image.jpg',
                    width: 220,
                    height: 250,
                    alt: product.title,
                },
            ],
            site_name: 'Figma to Code Next.js Ecommerce app Design by Anas Ahmed',
        },
    };
}

// ssr rendering
const page = async ({ params }: { params: { slug: string } }) => {
    const product = productData.find((i) => params.slug === i.slug)
    if (!product) return <NotFound />;
    const thumbnails = [
        { src: "/controller3@1.png", alt: "Gamepad view 1", className: "object-contain aspect-[1.06] w-[121px]", containerClassName: "px-6 py-3" },
        { src: "/controller3@2.png", alt: "Gamepad view 2", className: "object-contain w-28 aspect-[1.15]", containerClassName: "px-7 py-5 mt-4" },
        { src: "/controller3@3.png", alt: "Gamepad view 3", className: "object-contain aspect-[1.43] w-[134px]", containerClassName: "px-5 py-6 mt-4" },
        { src: "/controller3@4.png", alt: "Gamepad view 4", className: "object-contain aspect-[1.15] w-[122px]", containerClassName: "px-6 py-4 mt-4" }
    ];

    return (
        <div className="flex flex-col px-4 sm:px-10 self-center mt-10 w-full max-md:mt-5 max-md:max-w-full">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        name: product.title,
                        description: product.desc || 'flex flex-col px-4 sm:px-10 self-center mt-10 w-full max-md:mt',
                        image: product.image,
                        offers: {
                            "@type": "AggregateOffer",
                            availability: product.stock > 0
                                ? 'https://schema.org/InStock'
                                : 'https://schema.org/OutOfStock',
                            priceCurrency: "USD",
                            price: product.currentPrice,
                        },
                        aggregateRating: {
                            "@type": "AggregateRating",
                            ratingValue: product.rating,
                            reviewCount: product.reviews,
                        },
                    }),
                }}
            />
            <nav aria-label="Breadcrumb" className="flex flex-wrap gap-3 items-center self-start text-sm text-black">
                <Link href={'/'} className="self-stretch my-auto opacity-50">Home /</Link>
                <Link href={'/product/' + product.slug} className="self-stretch my-auto opacity-50">Product /</Link>
                <Link href={'/product/' + product.slug} className="self-stretch my-auto">{product.title}</Link>
            </nav>

            <main className="mt-10 w-full max-md:mt-5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                    <section className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full" >
                        <div className="grow max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col">
                                <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow max-md:mt-8">
                                        {thumbnails.map((thumb, index) => (
                                            <ProductThumbnail key={index} {...thumb} />
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col ml-5 w-9/12 max-md:ml-0 max-md:w-full">
                                    <div className="flex overflow-hidden flex-col grow justify-center px-7 py-36 w-full rounded bg-neutral-100 max-md:px-5 max-md:py-24 max-md:mt-8 max-md:max-w-full">
                                        <Image
                                            loading="lazy"
                                            width={1000}
                                            height={1000}
                                            src={product.image}
                                            alt={product.title}
                                            className="object-contain w-full aspect-[1.42] max-md:max-w-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full" aria-label="Product Details">
                        <div className="flex flex-col items-start w-full max-md:mt-10">
                            <h1 className="text-2xl font-semibold tracking-wider leading-none text-black">
                                {product.title}
                            </h1>

                            <div className="flex gap-4 items-start mt-4 text-sm">
                                <StarRatings rating={product.rating} reviews={product.reviews} size={1.5} />

                                <div className="flex gap-4 items-center text-green-500">
                                    <div className="shrink-0 self-stretch my-auto w-0 h-4 bg-black border border-black border-solid opacity-50" />
                                    <div className="self-stretch my-auto opacity-60">
                                        {product.stock > 0 ? 'In Stock' : "Out Stock"}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 text-2xl tracking-wider leading-none text-black">
                                ${product.currentPrice}
                            </div>

                            <p className="self-stretch mt-6 mr-7 text-sm leading-5 text-black max-md:mr-2.5">
                                {product.desc ? product.desc : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic sit temporibus, facilis distinctio odit provident neque, laborum minima saepe recusandae cumque fuga aspernatur maxime nesciunt delectus architecto iure aliquam quaerat eos eligendi'}
                            </p>

                            <hr className="shrink-0 self-stretch mt-6 w-full h-px bg-black border border-black border-solid" />

                            {product.colors && <div className="flex gap-6 items-start mt-6">
                                <div className="text-xl tracking-wide leading-none text-black">Colours:</div>
                                <div className="flex gap-2 items-start" role="radiogroup" aria-label="Color selection">
                                    {product.colors.map((color, index) => (
                                        <div key={index} style={{ backgroundColor: color }} className="flex cursor-pointer hover:ring-2 ring-black shrink-0 w-5 h-5 bg-indigo-300 rounded-full" />
                                    ))}
                                </div>
                            </div>}

                            {product.sizes && <div className="flex gap-6 items-center mt-6 whitespace-nowrap">
                                <div className="self-stretch my-auto text-xl tracking-wide leading-none text-black">Size:</div>
                                <div className="flex flex-wrap gap-4 items-start self-stretch my-auto text-sm font-medium text-black" role="radiogroup" aria-label="Size selection">
                                    {product.sizes.map((size, index) => (
                                        <button
                                            className={`hover:bg-red-500 hover:text-white overflow-hidden px-2 pt-1.5 pb-4 wg-8 rounded border border-solid `}
                                            key={index}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>}

                            <div className="flex flex-wrap gap-4 self-stretch mt-6 w-full font-medium">
                                <div className="flex gap-0 items-start text-xl leading-snug text-black whitespace-nowrap min-h-[44px]" role="spinbutton" aria-label="Quantity selector">
                                    <button aria-label="Decrease quantity" className="object-contain shrink-0 w-10 rounded-l aspect-[0.91] border border-black border-opacity-50">
                                        -
                                    </button>
                                    <div className="overflow-hidden px-9 py-[7px] w-20 border-t border-b border-black border-opacity-50 max-md:px-5">
                                        2
                                    </div>
                                    <button aria-label="Increase quantity" className="object-contain shrink-0 rounded-r aspect-[0.93] w-[41px] border border-black border-opacity-50">
                                        +
                                    </button>
                                </div>
                                <button className="gap-2.5 self-stretch px-12 py-2.5 text-base bg-red-500 rounded text-neutral-50 max-md:px-5">
                                    Buy Now
                                </button>
                                <button aria-label="Add to wishlist" className="object-contain shrink-0 self-start rounded aspect-square w-[42px]">
                                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/96b388edb85323f98c8e7e985856939fb1e202a7b2c62362d9367fbfb2293b30?placeholderIfAbsent=true&apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f" alt="" />
                                </button>
                            </div>

                            <div className="flex overflow-hidden flex-col items-start self-stretch py-6 mt-10 w-full font-medium rounded border border-solid border-black border-opacity-50">
                                <div className="flex gap-4 items-center ml-4 max-md:ml-2.5">

                                    <Truck size={'1.9rem'} className="shrink-0 self-stretch my-auto w-10 aspect-square" />
                                    <div className="flex flex-col self-stretch my-auto min-w-[240px]">
                                        <div className="text-base text-black">Free Delivery</div>
                                        <div className="mt-2 text-xs text-black">
                                            Enter your postal code for Delivery Availability
                                        </div>
                                    </div>
                                </div>
                                <hr className="shrink-0 self-stretch my-3 h-px bg-black border border-black border-solid" />
                                <div className="flex gap-4 items-center ml-4 max-md:ml-2.5">
                                    <ArrowRightLeft size={'1.9rem'} className="shrink-0 self-stretch my-auto w-10 aspect-square" />
                                    <div className="flex flex-col self-stretch my-auto min-w-[240px]">
                                        <div className="text-base text-black">Return Delivery</div>
                                        <div className="mt-2 text-xs text-black">
                                            Free 30 Days Delivery Returns. Details
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <ProdcutList
                heading="Related Item"
                headingColor="rgb(239 68 68 / var(--tw-bg-opacity, 1))"
                productSet={[1, 5]}
                btnColor="rgb(248 113 113 / var(--tw-bg-opacity, 1))"
                btnText="View All"
                isTimer={false}
            />
        </div>
    )
}


const ProductThumbnail: React.FC<ThumbnailProps> = ({
    src,
    alt,
    className,
    containerClassName
}) => (
    <div className={`flex overflow-hidden flex-col justify-center rounded bg-neutral-100 ${containerClassName}`}>
        <img
            loading="lazy"
            src={src}
            alt={alt}
            className={className}
        />
    </div>
);

export default page
