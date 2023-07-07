import React from 'react'
import { Link } from 'react-router-dom';
const navigations = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Product',
        path: '/products'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Contact',
        path: '/contact'
    },
]
const Header = () => {
    return (
        <header className="text-gray-600 bg-gradient-to-r from-violet-500 to-fuchsia-500 body-font shadow-lg ">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to={`/`} className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-2xl text-black font-bold">Ekart</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center lg:mr-80">
                    {
                        navigations.map((navigation) => {
                            return (
                                <Link to={navigation.path} className="mr-5 hover:text-gray-100 hover:border-b-2 text-lg text-white" >{navigation.name}</Link>
                            )
                        })
                    }

                </nav>
                <Link to={"/cart"} className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0">Cart

                </Link>
            </div>
        </header>
    )
}

export default Header
