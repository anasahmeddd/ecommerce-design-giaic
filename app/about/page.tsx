import { ServicesSection } from '@/components/Service';
import { statisticsData, teamData } from '@/lib/constant';
import { InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About | Giaic Ecommerce Design ",
    description: "Figma to Code Generated by Anas Ahmed for giaic hackhton practice | About Page",
};

export const dynamic = 'force-static'; //ssg becuase there is no dynamic data.


const page = () => {

    return (
        <main className='py-16'>
            <nav className="text-sm ml-6 text-gray-400">
                <Link href={'/'}>Home</Link> / <span className="font-semibold text-gray-800"><Link href={'/about'}>About</Link></span>
            </nav>
            <section className="self-stretch mt-11 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                    <div className="flex pl-8 flex-col w-[43%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                            <h1 className="text-6xl font-semibold leading-none text-justify text-black tracking-[3.24px] max-md:text-4xl">
                                Our Story
                            </h1>
                            <div className="flex flex-col mt-10 max-w-full text-base leading-7 text-black w-[525px]">
                                <p className={`mt-6 max-md:max-w-full`}>
                                    Launced in 2015, Exclusive is South Asia's premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
                                </p>
                                <p className={`max-md:max-w-full`}>
                                    Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from consumer.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
                        <div className="flex overflow-hidden flex-col grow w-full rounded max-md:mt-10 max-md:max-w-full">
                            <img
                                loading="lazy"
                                src="/abouthero.png"
                                alt="Exclusive shopping marketplace visual representation"
                                className="object-contain w-full aspect-[1.16] max-md:max-w-full"
                            />
                        </div>

                    </div>
                </div>
            </section>
            <Statistics />
            <section className="flex justify-center flex-wrap gap-8 items-start mt-36 max-md:mt-10">
                {teamData.map((member, index) => (
                    <TeamMemberCard key={index} {...member} />
                ))}
            </section>
            <div className='flex gap-2 justify-center  mt-10 items-center'>
                <div className="bg-gray-400 h-3 w-3 rounded-full" />
                <div className="bg-gray-400 h-3 w-3 rounded-full" />
                <div className="bg-red-500 ring-2 ring-offset-1 ring-gray-400 h-3 w-3 rounded-full" />
                <div className="bg-gray-400 h-3 w-3 rounded-full" />
                <div className="bg-gray-400 h-3 w-3 rounded-full" />
            </div>
            <ServicesSection />
        </main>
    )
}

export const Statistics = () => {

    return (
        <section
            className="flex justify-center  flex-wrap gap-8 items-start mt-36 text-black max-md:mt-10 max-md:max-w-full"
            aria-label="Statistics Overview"
        >
            {statisticsData.map((stat, index) => (
                <div key={index} className={`flex ${index === 1 ? 'bg-red-500 text-white' : 'text-black'} overflow-hidden flex-col justify-center px-12 py-8 rounded min-w-[240px] w-[270px] max-md:px-5  border border-solid border-black border-opacity-30`}>
                    <div className="flex flex-col items-center">
                        <img
                            loading="lazy"
                            src={stat.icon}
                            alt=""
                            className="object-contain w-20 aspect-square"
                        />
                        <div className="flex flex-col items-center mt-6">
                            <div
                                className="text-3xl font-bold tracking-widest leading-none"
                                role="text"
                                aria-label={`${stat.value} ${stat.description}`}
                            >
                                {stat.value}
                            </div>
                            <div className="mt-3 text-base text-center">
                                {stat.description}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

const TeamMemberCard = ({
    image,
    name,
    role,
}: {
    image: string,
    name: string,
    role: string,
}) => (
    <div className="flex flex-col min-w-[240px] w-[370px]">
        <div className="flex overflow-hidden flex-col justify-end px-9 pt-10 max-w-full rounded bg-neutral-100 w-[370px] max-md:px-5">
            <Image
                loading="lazy"
                src={image}
                width={1000}
                height={1000}
                alt={`${name} - ${role}`}
                className="object-contain w-full aspect-[0.s6]"
            />
        </div>
        <div className="flex flex-col self-start mt-8">
            <div className="flex flex-col text-black">
                <h2 className="text-3xl font-medium tracking-widest leading-none">
                    {name}
                </h2>
                <div className="mt-2 text-base">{role}</div>
            </div>
            <div className="flex gap-4 items-start self-start mt-4">
                <TwitterIcon className="object-contain shrink-0 w-6 aspect-square" />
                <InstagramIcon className="object-contain shrink-0 w-6 aspect-square" />
                <LinkedinIcon className="object-contain shrink-0 w-6 aspect-square" />
            </div>
        </div>
    </div>
);
export default page