
import React from 'react'
import Loading from './Loading';
import Features from './Features';
import { useState, useEffect } from 'react';

const Categories = () => {
    const [categories, setcategories] = useState([]);

    useEffect(() => {
        const fetchcategories = async () => {
            const response = await fetch('https://fakestoreapi.com/products/categories')
            const data = await response.json()
            console.log(data);
            setcategories(data);
        }
        fetchcategories();
    }, [])

    if (categories.length === 0) return <div><Loading /></div>

    return (
        <>
            <Features cards={categories} />

        </>
    )
}

export default Categories
