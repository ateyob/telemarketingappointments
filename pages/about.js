import React from 'react'

const about = () => {
  return (
    <section>
        <div className=' h-96 flex'>
            <div className=' w-4/6 bg-right bg-cover' style={{backgroundImage: 'url("https://res.cloudinary.com/duthzbfub/image/upload/v1683267339/telemarketing%20appointments/hero-min_aomggp.png")'}}></div>
            <div className=' w-2/6 p-8 py-16 bg-white text-black'>
            <div className='text-2xl'>
                Lorem ipsum dolor <br/> <span className=' text-[#FEBF0E]'>sit amet.</span>
            </div>
            <p className='text-sm py-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed ac mauris nisi. Etiam consequat, nulla in semper semper,
            turpis ligula commodo sapien, eget tempus arcu sem non mauris.
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

                <section className="w-screen px-8 md:px-5 py-[50px] md:pt-[120px] md:pb-[60px]" 
        // ref={stepRef}
        >
                <div className="max-w-[1120px] relative pb-[100px] mask-horizontal-1 -mx-8 md:mx-auto text-red ">
                    <div
                        // className={`overflow-x-scroll ${
                        //     windowWidth > 768 ? 'custom-scrollbar custom-scrollbar-horizontal' : 'hide-scrollbar'
                        // } relative z-20 pl-8 md:pl-[60px] scroll-smooth md:pb-[100px]`}
                        // ref={stepSliderRef}
                    >
                        asdasd
                        <div
                            className="flex gap-x-20 w-max relative"
                            // style={{
                            //     paddingRight: windowWidth <= 768 ? (stepWidth * 1) / 3 : stepWidth / 2,
                            // }}
                        >
                            {/* {stepInfo.map((item, index) => (
                                <div className="relative z-20 " key={index}>
                                    <div className="rounded-full h-[75px] w-[75px] bg-pink flex items-center justify-center">
                                        <span className="text-black text-[24px]">
                                            {(index + 1).toString().padStart(2, '0')}
                                        </span>
                                    </div>
                                    <div className="pl-[28px] pt-[60px] max-w-[350px]">
                                        <span className="text-[20px]">{item.label}</span>
                                        <p className="text-[14px]">{item.text}</p>
                                    </div>
                                </div>
                            ))} */}
                            <div
                                className="absolute h-[1px] border-t-[1px] border-pink border-dashed top-[37px]"
                                // style={{
                                //     width: `calc(100% - ${windowWidth <= 768 ? (stepWidth * 1) / 3 : stepWidth / 2}px)`,
                                // }}
                            />
                        </div>
                    </div>
                    <div className="absolute w-[66.6%] md:w-[50%] h-[4px] bg-pink rounded-[3px] left-0 top-[35px]" />
                    {/* <div className="hidden md:block absolute bottom-[0px] h-[2px] w-full bg-[#333333]" />
                    <div
                        className="hidden md:block absolute bottom-[0px] h-[2px] bg-pink transition-all duration-500"
                        style={{
                            width: `${stepSliderWidth}%`,
                        }}
                    /> */}
                    <div className="px-8 pt-8 flex md:hidden justify-between">
                        <div className="">
                            {/* <ArrowRightIcon
                                fill={stepSliderWidth > 0 ? '#ff006c' : '#333333'}
                                className="-rotate-180 transition"
                                onClick={() => {
                                    stepSliderRef.current.scrollLeft -=
                                        (stepSliderRef.current.scrollWidth - stepSliderRef.current.clientWidth) / 5;
                                }}
                            /> */}
                        </div>
                        <div className="">
                            {/* <ArrowRightIcon
                                fill={stepSliderWidth < 100 ? '#ff006c' : '#333333'}
                                className="transition"
                                onClick={() => {
                                    stepSliderRef.current.scrollLeft +=
                                        (stepSliderRef.current.scrollWidth - stepSliderRef.current.clientWidth) / 5;
                                }}
                            /> */}
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </div>

    </section>
  )
}

export default about
