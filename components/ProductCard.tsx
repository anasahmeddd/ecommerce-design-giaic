import { Eye, Heart, Star, StarHalfIcon, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { StarRatings } from "./StarRatings";

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isWishlistProduct,
}) => (
  <div
    className={`relative bg-white max-w-56 rounded-lg overflow-hidden transition-transform transform hover:scale-102`}
  >
    <Link href={`/product/${product.slug}`}>
      <div className="relative bg-neutral-100 p-4">
        <Image
          loading="lazy"
          src={product.image}
          alt={product.title}
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
        {product.discount && (
          <div
            className="absolute top-2 left-2 px-3 py-1 bg-red-500 text-white text-xs rounded"
            role="text"
            aria-label={`${product.discount}% discount`}
          >
            -{product.discount}%
          </div>
        )}
      </div>
    </Link>

    {/* Product Details */}
    <div className="py-4">
      <div className="flex flex-col items-start self-start text-base font-medium">
        <div className="self-stretch text-black">{product.title}</div>
        <div className="flex gap-3 items-start mt-2 whitespace-nowrap">
          <div className="text-red-500">${product.currentPrice}</div>
          {product.originalPrice && product.originalPrice > 0 && (
            <div className="text-black opacity-50 line-through">
              ${product.originalPrice}
            </div>
          )}
        </div>
        {!isWishlistProduct && <StarRatings rating={product.rating} reviews={product.reviews} size={1.2} />}
      </div>
      {/* Product Colors */}
      {!isWishlistProduct && product.colors && (
        <div className="flex gap-1 mt-3">
          {product.colors.map((item, i) => (
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

