'use client'
import { productData } from '@/lib/bigContants';
import { SearchIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react'

const Search = ({ placeholder }: { placeholder: string; }) => {
    const [query, setQuery] = useState('')
    const router = useRouter()
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (query) {
            router.push(`/search?query=${query}`)
        }
    }
    return (

        <div className="flex flex-col justify-center items-center py-1 text-xs text-black rounded bg-neutral-100 min-w-[240px]">
            <form className="flex gap-1 lg:gap-3 justify-center items-center" onSubmit={handleSubmit}>
                <label htmlFor="searchInput" className="sr-only">Search</label>
                <input
                    id="searchInput"
                    type="search"
                    list="titles"
                    placeholder={placeholder}
                    autoComplete="off"
                    onChange={(e)=>setQuery(e.target.value)}
                    className="self-stretch my-auto opacity-50 bg-transparent border-none outline-none"
                />
                <datalist id="titles" >
                    {productData.map((item, _) => (
                        <option key={_} value={item.title}></option>
                    ))}
                </datalist>
                <button type='submit'>
                    <SearchIcon />
                </button>

            </form>
        </div>
    )
}

export default Search
