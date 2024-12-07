import { CameraIcon,ArrowLeft, ArrowRight, HeadphonesIcon, MonitorIcon, SmartphoneIcon, WatchIcon } from "lucide-react";

import React from 'react'

const CategoriesBoxes = () => {
  const categoriesBox = [
    {
      category: 'Phone',
      icon: <SmartphoneIcon />
    },
    {
      category: 'Computer',
      icon: <MonitorIcon />
    },
    {
      category: 'Watch',
      icon: <WatchIcon />
    },
    {
      category: 'Camera',
      icon: <CameraIcon />
    },
    {
      category: 'Gaming',
      icon: <SmartphoneIcon />
    },
    {
      category: 'HeadPhones',
      icon: <HeadphonesIcon />
    }
  ]
  return (
    <section className="flex flex-col mx-4">
        <div aria-label="Flash Sales Timer" className="flex flex-col items-center sm:flex-row justify-between mt-14 w-full">
          <div className="flex flex-wrap gap-5 items-end ">
            <div className="flex flex-col h-[103px]">
              <div className="flex gap-4 items-center self-start">
                <div className="flex flex-col self-stretch my-auto w-5">
                  <div className="flex shrink-0 h-10 bg-red-500 rounded" />
                </div>
                <div className="self-stretch my-auto text-base font-semibold leading-none text-red-500">
                  Categories
                </div>
              </div>
              <h2 className="mt-6 text-4xl font-semibold tracking-widest leading-none text-black">
                Browse Categories
              </h2>
            </div>

          </div>
          <div className="flex gap-2 items-start  my-24">
            <ArrowLeft className="bg-gray-100 rounded-full " size={'2rem'} />
            <ArrowRight className="bg-gray-100 rounded-full " size={'2rem'} />
          </div>
        </div>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 place-items-center sm:gap-6 lg:gap-10" role="main"
          aria-label="Product Grid"
        >
          {categoriesBox.map(({ category, icon }, index) => (
            <div
              key={index}
              className="w-32 sm:w-40 h-32 sm:h-40 bg-gray-200 flex flex-col justify-center items-center rounded-lg"
            >
              <div className="text-2xl">{icon}</div>
              <p className="text-sm font-medium mt-2 text-center">{category}</p>
            </div>
          ))}
        </div>

      </section>
  )
}

export default CategoriesBoxes
