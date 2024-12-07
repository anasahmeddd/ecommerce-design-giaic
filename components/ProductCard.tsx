import { Eye, Heart, Star, StarHalfIcon, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { StarRatings } from "./StarRatings";

export const ProductCard: React.FC<ProductCardProps> = ({
  discount,
  image,
  title,
  slug,
  currentPrice,
  originalPrice,
  rating,
  colors,
  isWishlistProduct,
  reviews,
}) => (
  <div
    className={`relative bg-white max-w-56 rounded-lg overflow-hidden transition-transform transform hover:scale-102`}
  >
    <Link href={`/product/${slug}`}>
      <div className="relative bg-neutral-100 p-4">
        <Image
          loading="lazy"
          src={image}
          alt={title}
          width={292}
          height={192}
          className="object-contain max-w-full aspect-[1.13] w-[292px]"
        />

        <div className="absolute top-2 right-2 flex flex-col gap-2">
          {!isWishlistProduct ? <><button
            className="p-2 bg-white rounded-full shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            <Heart className="w-6 h-6" />
          </button>
            <button
              className="p-2 bg-white rounded-full shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <Eye className="w-6 h-6" />
            </button>
          </> :
            <button
              className="p-2 bg-white rounded-full shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <Trash2 className="w-6 h-6" />
            </button>}

        </div>
        {discount && (
          <div
            className="absolute top-2 left-2 px-3 py-1 bg-red-500 text-white text-xs rounded"
            role="text"
            aria-label={`${discount}% discount`}
          >
            -{discount}%
          </div>
        )}
      </div>
    </Link>

    {/* Product Details */}
    <div className="py-4">
      <div className="flex flex-col items-start self-start text-base font-medium">
        <div className="self-stretch text-black">{title}</div>
        <div className="flex gap-3 items-start mt-2 whitespace-nowrap">
          <div className="text-red-500">${currentPrice}</div>
          {originalPrice && originalPrice > 0 && (
            <div className="text-black opacity-50 line-through">
              ${originalPrice}
            </div>
          )}
        </div>
        {!isWishlistProduct && <StarRatings rating={rating} reviews={reviews} size={1.2} />}
      </div>
      {/* Product Colors */}
      {!isWishlistProduct && colors && (
        <div className="flex gap-1 mt-3">
          {colors.map((item, i) => (
            <span
              key={i}
              style={{ backgroundColor: item }}
              className="rounded-full hover:ring-2 hover:ring-black w-6 h-6 cursor-pointer"
            ></span>
          ))}
        </div>
      )}
    </div>
  </div >

);

