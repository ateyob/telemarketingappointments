import Navbar from '@/components/Navbar'
import React from 'react'

const about = () => {

  return (
    <section>
        <Navbar />
        <div className='h-96 flex'>
            <div className=' w-2/6 md:w-2/4 bg-center bg-cover' style={{backgroundImage: 'url("https://res.cloudinary.com/duthzbfub/image/upload/v1683267298/telemarketing%20appointments/about-min_cwgs7w.png")'}}></div>
            <div className=' w-4/6 md:w-2/4 p-8 py-32 bg-white text-black'>
            <div className='text-lg md:text-3xl font-bold'>
                Lorem ipsum dolor <br/> <span className=' text-[#FEBF0E]'>sit amet.</span>
            </div>
            <p className=' text-xs md:text-sm pt-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed ac mauris nisi. Etiam consequat, nulla in semper semper,
            turpiLorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed ac mauris nisi. Etiam consequat, nulla in semper semper,
            turpis ligula commodo sapien, eget tempus arcu sem non mauris
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
            </div>
        </div>

        <div className=' h-screen flex'>
            <div className=' w-1/6 bg-[#FEBF0E]'></div>
            <div className=' w-5/6 bg-white text-black p-16'>
                <div className='text-2xl font-bold'>
                   About Company
                </div>
                <p className='text-sm py-4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed ac mauris nisi. Etiam consequat, nulla in semper semper,
                    turpis ligula commodo sapien, eget tempus arcu sem non mauris
                    consectetur adipiscing elit Sed ac mauris nisi. Etiam consequat,
                    nulla in semper semper, turpis ligula commodo sapien, eget tempus arcu sem non mauris.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed ac mauris nisi. Etiam consequat, nulla in semper semper,
                    turpis ligula commodo sapien, eget tempus arcu sem non mauris
                    consectetur adipiscing elit Sed ac mauris nisi. Etiam consequat,
                    nulla in semper semper, turpis ligula commodo sapien, eget tempus arcu sem non mauris.
                </p>
                <p className='text-sm py-4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed ac mauris nisi. Etiam consequat, nulla in semper semper,
                    turpis ligula commodo sapien, eget tempus arcu sem non mauris
                    consectetur adipiscing elit Sed ac mauris nisi. Etiam consequat,
                    nulla in semper semper, turpis ligula commodo sapien, eget tempus arcu sem non mauris.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed ac mauris nisi. Etiam consequat, nulla in semper semper,
                    turpis ligula commodo sapien, eget tempus arcu sem non mauris
                    consectetur adipiscing elit Sed ac mauris nisi. Etiam consequat,
                    nulla in semper semper, turpis ligula commodo sapien, eget tempus arcu sem non mauris.
                </p>
            </div>
        </div>

    </section>
  )
}

export default about
