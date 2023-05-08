import Navbar from '@/components/Navbar'
import React from 'react'

const about = () => {

  return (
    <div className='w-screen min-h-screen relative '>
        <Navbar />
    <section>
        <div className=' flex'>
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

        <div className=' flex bg-red-400'>
            <div className=' w-1/6 bg-[#FEBF0E] hidden md:block '></div>
            <div className=' w-full md:w-5/6 bg-white text-black p-16'>
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
                
            <div class="flex flex-col md:flex-row py-12">

            <div class="w-full md:w-1/3 flex items-center py-4 md:py-0">
                <div class="text-4xl md:text-5xl lg:text-8xl pr-4">01</div>
                <div class="text-base md:text-md pr-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mauris nisi.</div>
            </div>

            <div class="w-full md:w-1/3 flex items-center py-4 md:py-0">
                <div class="text-4xl md:text-5xl lg:text-8xl pr-4">02</div>
                <div class="text-base md:text-md pr-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mauris nisi.</div>
            </div>

            <div class="w-full md:w-1/3 flex items-center py-4 md:py-0">
                <div class="text-4xl md:text-5xl lg:text-8xl pr-4">03</div>
                <div class="text-base md:text-md pr-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mauris nisi.</div>
            </div>

</div>

            </div>
        </div>

    </section>

    <section className="w-screen h-screen md:pb-[150px] flex flex-col bg-white   ">
        <div className='h-1/2 flex'>
            <div class='bg-[#4713AD] w-1/2 relative rounded-br-[160px]'>
                <img src="https://res.cloudinary.com/duthzbfub/image/upload/v1683267261/telemarketing%20appointments/team1-min_auy4p8.png" alt="[IMAGE ALT TEXT]" class="rounded-full absolute bottom-0 right-0 border-8 border-yellow-400 h-80 w-80 object-cover" />
            </div>

                <div className=' w-1/2 px-12 py-16 bg-white text-black'>
                    <div className='text-lg md:text-6xl lg:text-7xl font-normal'>
                    <span className=' underline decoration-[#FEBF0E]'> Our </span> Best <span className=' text-[#FEBF0E]'>Team</span>
                        <p className=' text-sm md:text-md lg:text-lg pt-8'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed ac mauris nisi. Etiam consequat, nulla in semper semper,
                            turpiLorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
            </div>

            {/* <div class="h-1/2 flex justify-center items-center px-72">
                <div class="flex flex-col items-center mx-4">
                    <div class="rounded-full border-4 border-yellow-400 h-32 w-32 object-cover"></div>
                        <h2 class="text-black font-bold text-lg mt-4">John Doe</h2>
                            <p class="text-yellow-400">Frontend Developer</p>
                            <p class="text-black mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nibh justo, dignissim non luctus ac.</p>
                </div>

                <div class="flex flex-col items-center mx-4">
                    <div class="rounded-full border-4 border-yellow-400 h-32 w-32 object-cover"></div>
                        <h2 class="text-black font-bold text-lg mt-4">John Doe</h2>
                            <p class="text-yellow-400">Frontend Developer</p>
                            <p class="text-black mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nibh justo, dignissim non luctus ac.</p>
                </div>

                <div class="flex flex-col items-center mx-4">
                    <div class="rounded-full border-4 border-yellow-400 h-32 w-32 object-cover"></div>
                        <h2 class="text-black font-bold text-lg mt-4">John Doe</h2>
                            <p class="text-yellow-400">Frontend Developer</p>
                            <p class="text-black mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nibh justo, dignissim non luctus ac.</p>
                </div>

                <div class="flex flex-col items-center mx-4">
                    <div class="rounded-full border-4 border-yellow-400 h-32 w-32 object-cover"></div>
                        <h2 class="text-black font-bold text-lg mt-4">John Doe</h2>
                            <p class="text-yellow-400">Frontend Developer</p>
                            <p class="text-black mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nibh justo, dignissim non luctus ac.</p>
                </div>
    
            </div> */}
    



    </section>

    </div>

  )
}

export default about
