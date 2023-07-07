import React from 'react'
import { Link } from 'react-router-dom'

const Features = ({ cards = [1, 2, 3] }) => {
    return (
        <>
            <div className="bg-white py-6 sm:py-8 lg:py-12 mb-28">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">Collections</h2>

                    <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                        {
                            cards?.map((card) => {
                                return (
                                    <Link to={`/categories/${card}`} >
                                        <a href="#" className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:scale-50 duration-1000 p-4 shadow-lg">

                                            <div className="relative border border-b-2 flex w-full flex-col rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 my-32 p-4 text-center">
                                                <span className="text-xl  font-bold text-black uppercase lg:text-xl">{card}</span>
                                            </div>
                                        </a>
                                    </Link>
                                )
                            })
                        }


                    </div>
                </div>
            </div>

        </>
    )
}

export default Features



