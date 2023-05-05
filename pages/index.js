import Image from 'next/image'
import { Inter } from 'next/font/google'
import {GiTakeMyMoney} from 'react-icons/gi'
import {FaRegHandshake} from 'react-icons/fa'
import {BsGlobe} from 'react-icons/bs'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <section>
  <Navbar />

  <div className="flex flex-col md:flex-row h-screen">
    <div className="h-screen md:w-1/2 bg-[#4713AD] relative">
      <div className="p-4 md:px-16 md:py-64 py-32">
        <div className="text-3xl md:text-4xl text-white leading-tight font-bold">
          HIRE THE BEST <br/> <span className="text-[#FEBF0E]">TELEMARKETERS</span>
        </div>

        <div className="mt-4 md:mt-8 w-full md:w-[70%]">
          <p className="text-sm md:text-base text-gray-300 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed ac mauris nisi. Etiam consequat, nulla in semper semper,
            turpis ligula commodo sapien, eget tempus arcu sem non mauris.
          </p>

          <button className="bg-[#FEBF0E] hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded">
            Read More
          </button>
        </div>
      </div>

      <div className="absolute bottom-1 left-4 md:left-16 p-2 md:p-4 flex gap-4 md:gap-6">
        <div className="bg-[#FEBF0E] w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full flex justify-center items-center">
          <GiTakeMyMoney className="text-white" size={20} />
        </div>

        <div className="bg-[#FEBF0E] w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full flex justify-center items-center">
          <FaRegHandshake className="text-white" size={20} />
        </div>

        <div className="bg-[#FEBF0E] w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full flex justify-center items-center">
          <BsGlobe className="text-white" size={20} />
        </div>
      </div>
    </div>
      
    <div className="md:w-1/2 bg-right bg-cover bg-no-repeat" style={{backgroundImage: 'url("https://res.cloudinary.com/duthzbfub/image/upload/v1683267339/telemarketing%20appointments/hero-min_aomggp.png")'}}></div>
  </div>
</section>


  )
}
