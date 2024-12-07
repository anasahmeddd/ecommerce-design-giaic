'use client'
import { CirclePlusIcon, LogOut, ShoppingBag, Star, User2, Wallet } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const ProfileDropDown = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex relative">
            <button
                onFocus={() => setOpen(true)}
                onBlur={() => setTimeout(() => setOpen(false), 120)}
                className="flex rounded-full p-1 bg-red-500 text-white items-center justify-center">
                <User2 size={'1.3rem'} />
            </button>
            {open && <div className="absolute p-2 gap-3 animate-modal w-56 text-white top-8 right-0 z-20 bg-gradient-to-br from-[#A39DA5] font-light via-[#756677] to-[#1D161D] max-sm:text-sm shadow-lg rounded flex flex-col">
                <Link href={'/account'} className='flex gap-3 items-center'><User2 size={'1.7rem'} />Manage My Account</Link>
                <Link href={'/account'} className='flex gap-3 items-center'><ShoppingBag size={'1.7rem'} />My Orders</Link>
                <Link href={'/account'} className='flex gap-3 items-center'><CirclePlusIcon className='rotate-45' size={'1.7rem'} /> My Cancelations</Link>
                <Link href={'/account'} className='flex gap-3 items-center'><Star size={'1.7rem'} /> My Reviews</Link>
                <Link href={'/account'} className='flex gap-3 items-center'><LogOut className='rotate-180' size={'1.7rem'} />Logout</Link>
                <Link href={'/checkout'} className='flex gap-3 items-center'><Wallet size={'1.7rem'} />Checkout</Link>
                <Link href={'/404'} className='flex gap-3 items-center'><CirclePlusIcon className='rotate-45' size={'1.7rem'} />404</Link>

            </div>}

        </div>
    )
}

export default ProfileDropDown
