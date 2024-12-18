import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export const metadata: Metadata = {
    title: "Sign-Up | Giaic Ecommerce Design ",
    description: "Figma to Code Generated by Anas Ahmed for giaic hackhton practice | Sign-up Page",
  };

const page = () => {
    return (
        <div className="flex flex-wrap gap-10 items-center 2xl:justify-between max-md:justify-center self-start mt-14 max-md:mt-10 max-md:max-w-full">
            {/* Image Section */}
            <div className="flex overflow-hidden flex-col self-stretch my-auto rounded-none lg:bg-slate-300 min-w-[240px] max-md:max-w-full w-full lg:w-[calc(60%-20px)] lg:pl-0">
                <Image
                    width={650}
                    height={2000}
                    loading="lazy"
                    src="/auth.png"
                    alt="Sign up illustration"
                    className="object-cover max-lg:hidden aspect-[1.14] w-full h-auto lg:w-scdreen lg:madx-w-none"
                />
            </div>
            {/* Form Section */}
            <div className="flex flex-col 2xl:mr-20 p-4 self-stretch my-auto min-w-[240px] w-full lg:w-[calc(30%-20px)]">
                <div className="flex flex-col self-start text-black">
                    <h1 className="text-3xl font-medium tracking-widest leading-none">
                        Create an account
                    </h1>
                    <p className="mt-4 text-base">Enter your details below</p>
                </div>
                <form className="flex flex-col items-center mt-8 max-md:mt-6">
                    <div className="flex flex-col w-full space-y-10">
                        <InputField label="Name" id="name" />
                        <InputField label="Email or Phone Number" id="email" type="email" />
                        <InputField label="Password" id="password" type="password" />
                    </div>
                    <div className="flex flex-col mt-8 text-base w-full">
                        <button
                            type="submit"
                            className="gap-2.5 self-stretch px-28 py-4 font-medium bg-red-500 rounded text-neutral-50 max-md:px-5"
                        >
                            Create Account
                        </button>
                        <div className="flex flex-col items-center mt-4 text-black">
                            <button
                                className="flex flex-col justify-center bg-white px-20 py-4 rounded border border-solid border-black border-opacity-40 w-full max-md:px-5"

                            >
                                <div className="flex gap-3 items-start">
                                    <img loading="lazy" src={'https://authjs.dev/img/providers/google.svg'} alt="google icon" className="object-contain shrink-0 w-6 aspect-square" />
                                    <span>Sign up with Google</span>
                                </div>
                            </button>
                            <div className="flex gap-4 items-center mt-8">
                                <span className="self-stretch my-auto opacity-70">
                                    Already have account?
                                </span>
                                <button className="border-b border-gray-400 self-stretch my-auto font-medium">
                                    <Link href={'/login'}><span className="opacity-70">Log in</span></Link>

                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}


const InputField: React.FC<InputFieldProps> = ({ label, type = "text", id }) => {
    return (
        <div className="flex flex-col w-full">
            <label htmlFor={id} className="text-base text-black lg:opacity-40">
                {label}
            </label>
            <div className="flex flex-col mt-2 w-full">
                <input
                    type={type}
                    id={id}
                    name={id}
                    className="w-full outline-none px-2 border-b border-gray-400"
                    aria-label={label}
                />
            </div>
        </div>
    );
}

export default page
