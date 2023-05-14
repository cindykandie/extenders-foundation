import { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  '/assets/bg-image2.png',
  '/assets/bg-image4.png'
]

export default function SupportSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen">
      <Image
        src={images[index]}
        alt=""
        className="object-cover w-full h-full"
        layout="fill"
      />
      <div className="absolute inset-0 bg-black opacity-60 flex items-center justify-center ml-16">
        <div className="w-1/3 flex flex-col">
          <h2 className="text-white font-bold text-1xl md:text-2xl lg:text-3xl text-left px-6 mx-2">
            SUPPORT A CHILD'S LIFE{' '}
            <span className="text-red-600">TODAY</span>
          </h2>
          <p className="text-white px-4 my-6 mx-0">
            Thousands of children in Kenya go to sleep without a single meal.
            By supporting these children, we can give them a better chance at
            a brighter future and break the cycle of poverty and hunger.
          </p>
          <button className="bg-red-500 hover:bg-red-300 text-white px-3 py-2 rounded-md w-24 mx-9 my-6">
            DONATE
          </button>
        </div>
      </div>
    </section>
  )
}
