interface GridBannerProps {
  title: string;
  description: string;
  imageUrl: string;
  imageSize: number;
  gridColumn?: string
  gridRow?: string
  ariaLabel?: string;
}

interface ProductImageProps {
  src: string;
  alt: string;
  className: string;
}

interface ThumbnailProps extends ProductImageProps {
  containerClassName?: string;
}

interface SizeOptionProps {
  size: string;
  isSelected: boolean;
}

interface ColorOptionProps {
  color: string;
  isSelected: boolean;
}

interface DeliveryInfoProps {
  icon: string;
  title: string;
  description: string;
}

interface InputFieldProps {
  label: string;
  type?: string;
  id: string;
}
interface AccountInputFieldProps {
  label: string;
  value: string;
  className?: string;
}

interface ProfileFormData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
}

interface MenuItemProps {
  text: string;
  isActive?: boolean;
}
interface SocialButtonProps {
  icon: string;
  text: string;
}

interface ProductCardProps {
  product:ProductProps
  isWishlistProduct?: boolean;
}
interface ProductProps {
  discount?: number;
  image: string;
  slug: string;
  title: string;
  currentPrice: number;
  originalPrice?: number;
  rating: number;
  desc?: string;
  stock: number;
  reviews: number;
  colors?: string[]
  sizes?: string[]
}

interface RatingProps {
  rating: number;
  size: number
  reviews: number;
}

interface PriceDisplayProps {
  currentPrice: number;
  originalPrice?: number;
}

interface SocialLinkProps {
  icon: JSX.Element;
  alt: string;
  href: string;
}

interface FooterLinkProps {
  text: string;
  href: string;
}

interface FooterSectionProps {
  title: string;
  links: FooterLinkProps[];
}

interface AppDownloadProps {
  qrCode: string;
  playStore: string;
  appStore: string;
}

interface ProdductListProps {
  heading?: string;
  headingColor?: string;
  heading2?: string;
  isTimer?: boolean;
  btnText?: string;
  btnColor?: string;
  productSet: number[]
  isWishlistProduct?: boolean;
}
interface CartItemProps {
  productName: string;
  price: string;
  quantity: number;
  subtotal: string;
  imageSrc?: string;
}

interface CartItemsData {
  items: CartItemProps[];
}
interface CartTotalProps {
  subtotal: string;
  shipping: string;
  total: string;
}

interface ContactInfoProps {
  icon: JSX.Element;
  title: string;
  descriptions: string[];
}

interface ContactInputProps {
  label: string;
  type: string;
  id: string;
  required?: boolean;
}

interface FormFieldProps {
  label: string;
  required?: boolean;
  id: string;
  type?: string;
}

interface PaymentMethodProps {
  type: string;
  icons?: string[];
}


interface PaymentMethodProps {
  type: string;
  icons?: string[];
}

