import React, { useState } from 'react';
import Search from './Search';
import BrandsData from '../brands.json';
import Brand from './Brand';


const Content = () => {
    
const barndsArray = []

Object.keys(BrandsData).map(key => {
  barndsArray.push(BrandsData[key])
});
    
const [brands ,setBrands] =useState(barndsArray)

    return (
        <main className='contnet'>
            <header className='header'>
                <Search/>
            </header>
            <section className='brands'>
                {brands.map(brand => (
                    <Brand brand ={brand} />
                ))}
            </section>
        </main>
    );
}

export default Content;
