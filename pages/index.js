import Image from 'next/image';
import { Inter } from 'next/font/google';
import { GiTakeMyMoney } from 'react-icons/gi';
import { FaRegHandshake } from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <section className="bg-gray-100">
      <Navbar />

  <div className="flex flex-col md:flex-row items-center justify-between h-screen max-w-8xl mx-auto px-4">
    <div className="md:w-1/2 bg-[#4713AD] py-20 px-6 md:px-9 h-full flex flex-col items-start text-white">
        
      <div className="flex flex-col h-screen justify-between items-center">
        <div className="flex-grow flex-shrink">
          <div className='flex flex-col items-center'>
            <div className='flex flex-col items-start gap-6'>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mt-0 pt-32">
                HIRE THE BEST <br/> <span className="text-[#FEBF0E]">TELEMARKETERS</span>
              </h1>

              <p className="text-base text-gray-300 my-2 max-w-[90%] text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mauris nisi. Etiam consequat, nulla in semper semper,
                turpis ligula commodo sapien, eget tempus arcu sem non mauris.
              </p>

              <button className="bg-[#FEBF0E] hover:bg-yellow-500 text-white font-semibold py-2 px-8 rounded transition-all duration-300 my-2">
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="rounded-full h-12 w-12 bg-[#FEBF0E] flex items-center justify-center mr-4">
            <GiTakeMyMoney className="text-white text-2xl" />
          </div>
          <div className="rounded-full h-12 w-12 bg-[#FEBF0E] flex items-center justify-center mr-4">
            <FaRegHandshake className="text-white text-2xl" />
          </div>
          <div className="rounded-full h-12 w-12 bg-[#FEBF0E] flex items-center justify-center">
            <BsGlobe className="text-white text-2xl" />
          </div>
        </div>
      </div>
    </div>
    

        <div className="md:w-1/2 bg-[url('https://res.cloudinary.com/duthzbfub/image/upload/v1683267339/telemarketing%20appointments/hero-min_aomggp.png')] bg-no-repeat bg-center bg-fixed bg-cover w-full h-full hidden md:block"></div>
      </div>

      <div class="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FEBF0E] rounded-full flex items-center justify-center z-10 hidden md:flex md:h-24 w-24 lg:h-36 lg:w-36">
          <img src="/assets/Mask.png" alt="[IMAGE ALT TEXT]" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-2" />
          {/* <div class="border-l-2 border-black absolute right-1/2 h-full transform translate-y-1/2"></div> */}
      </div>
      
    </section>
  );
}