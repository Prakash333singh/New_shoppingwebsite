import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import Loading from './Loading';
import Products from './Products';

const CategoriesProducts = () => {
    const { name } = useParams();
    const [products, setproducts] = useState({});
    console.log(name, "name", products);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/category/${name}`)
            const data = await response.json()
            console.log(data);
            setproducts(data);
        }
        fetchProducts();
    }, [])

    if (products.length == 0) return <><Loading /></>

    return (
        <>
            <Products products={products} />
        </>
    )
}

export default CategoriesProducts
