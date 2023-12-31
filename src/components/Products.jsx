import React from 'react'
import { Link } from 'react-router-dom';

const Products = ({ products = [] }) => {
    return (
        <div className='mt-20'>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            products.map((product) => {
                                console.log(product);
                                const { title, image, price, category, id } = product;
                                return (
                                    <Link to={`/product/${id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-50 mb-4 cursor-pointer ">
                                        <a className="block relative h-48 rounded overflow-hidden">
                                            <img alt={title} className="object-contain object-center w-full h-full block" src={image} />
                                        </a>
                                        <div className="mt-4 text-center">
                                            <h3 className="text-gray-500 text-xs  font-bold tracking-widest title-font mb-1">{category}</h3>
                                            <h2 className="text-gray-600 title-font text-lg font-medium">{title}</h2>
                                            <p className="mt-1 text-sm font-bold text-gray-600">${price}</p>
                                        </div>
                                    </Link>

                                )

                            })
                        }

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Products
