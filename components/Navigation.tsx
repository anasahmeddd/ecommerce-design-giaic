import { navigationLinks } from "@/lib/constant";
import { Heart, ShoppingCart, User2 } from "lucide-react";
import Link from "next/link";
import Search from "./Search";
import ProfileDropDown from "./ProfileDropDown";

const Navigation = () => {

    return (
        <nav className="flex border-b flex-wrap px-4 sm:py-4 pb-2 lg:px-[4.9rem] gap-3 lg:gap-8 items-start justify-between self-stretch my-auto text-black min-w-[240px] max-md:max-w-full" role="navigation">
            <div className="flex flex-wrap gap-5 lg:gap-10 items-center self-stretch my-auto text-black min-w-[240px] max-md:max-w-full">
                <Link href={'/'} className="text-lg sm:text-2xl font-bold tracking-wider leading-none whitespace-nowrap w-[118px]">
                    Exclusive
                </Link>
            </div>
            <div className="flex gap-5 lg:gap-8 items-start text-base text-center min-w-[240px]">
                {navigationLinks.map((item, index) => (
                    <NavigationItem key={index} {...item} />
                ))}
            </div>
            <div className="flex flex-wrap gap-3 items-center self-stretch my-auto min-w-[240px]">
                <Search
                    placeholder="What are you looking for?"
                />
                <div className="flex  gap-4 justify-center items-center self-stretch my-auto">
                    <Link href={'/wishlist'} className="flex items-center justify-center">
                        <Heart />
                    </Link>
                    <Link
                        href="/cart"
                        className="mr-2 hover:text-gray-800 text-gray-800 relative"
                        aria-label="Shopping Cart"
                    >
                        <ShoppingCart />
                        {2 > 0 && (
                            <span className="absolute -top-1 -right-2 bg-red-500 text-gray-100 rounded-full px-1 text-xs">
                                2
                            </span>
                        )}
                    </Link>
                    <ProfileDropDown />
                </div>
            </div>
        </nav>
    );
}
export default Navigation


const NavigationItem = ({ label, url }: { label: string; url: string; }) => {
    return (
        <div className="flex hover:border-b border-black flex-col items-center w-12 whitespace-nowrap">
            <Link href={url}>{label}</Link >
        </div>
    );
}