import CustomHead from '@/components/CustomHead'
import Image from "next/image";
import { sectionsData } from "@/data/sectionsData";
import React from 'react'

export default function Involved() {
  return (
    <div className='mt-10'>
     <CustomHead />
     <section className="relative h-screen ">
        <img src="/assets/bg-image3.png" alt="" className="object-cover w-full h-full" />
        <div className="absolute inset-0 flex items-center justify-end">
          <h2 className="text-white font-bold text-1xl md:text-2xl lg:text-3xl text-right px-6 w-[300px] mx-[25%]">
            GET INVOLVED, EXTENDERS FOUNDATION
          </h2>
        </div>
    </section>


    <section className='w-full mx-auto px-10'>
  {sectionsData.map((section, index) => (
    <div 
      key={section.id}
      className={`${
        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
      } flex items-center py-8 justify-center`}
    >
        <Image src={section.image} alt={section.imageAlt} width={500} height={200} />
        <div className="md:pl-8 md:pr-24 ml-4 md:ml-0">
            <h2 className="text-3xl font-bold">{section.title}</h2>
            <p className="text-md leading-5 mt-4 w-5/6">{section.description}
            </p>
            <button className="bg-red-400 px-4 py-2 mt-4 mb-4 md:mb-0 rounded-sm hover:bg-red-500">
              {section.buttonText}
            </button>
        </div>
    </div>
     ))}
</section>


    
    </div>
  )
}
