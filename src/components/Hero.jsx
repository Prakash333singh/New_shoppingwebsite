import React from 'react'

const Hero = () => {
    return (
        <>
            <div className="bg-white pb-6 sm:pb-8 lg:pb-12 mt-28">

                <section className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-8 flex flex-wrap justify-between md:mb-16">
                        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pt-48 lg:pb-24">
                            <h1 className="text-black-800 mb-4 text-4xl font-bold sm:text-5xl md:mb-8 md:text-6xl">Find your<br />style online</h1>

                            <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares characteristics of real text.</p>
                        </div>

                        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
                            <div className="relative top-12 left-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:top-16 md:left-16 lg:ml-0">
                                <img src="https://images.unsplash.com/photo-1542340916-951bb72c8f74?auto=format&q=75&fit=crop&w=550&h=550" loading="lazy" alt="Photo by Kaung Htet" className="h-full w-full object-cover object-center" />
                            </div>

                            <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                                <img src="https://images.unsplash.com/photo-1586295166487-b265f7e83a7f?auto=format&q=75&fit=crop&w=550&h=550" loading="lazy" alt="Photo by Manny Moreno" className="h-full w-full object-cover object-center" />
                            </div>
                        </div>
                    </div>


                </section>
            </div>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="flex flex-col overflow-hidden rounded-lg bg-gray-900 sm:flex-row md:h-80">

                        <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
                            <h2 className="mb-4 text-xl font-bold text-white md:text-2xl lg:text-4xl">Summer Sale<br />Up to 70% off.</h2>

                            <p className="mb-8 max-w-md text-gray-400">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>

                            <div className="mt-auto">
                                <a href="#" className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">Save now</a>
                            </div>
                        </div>

                        <div className="order-first h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
                            <img src="https://images.unsplash.com/photo-1505846951821-e25bacf2eccd?auto=format&q=75&fit=crop&crop=top&w=1000&h=500" loading="lazy" alt="Photo by Dom Hill" className="h-full w-full object-cover object-center" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
