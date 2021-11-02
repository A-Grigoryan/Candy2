import React from 'react'
import Product from './product.json'
import Products from './Products'


export default function ProductList() {
    return (
        <div className="secondProductFlex">
            {Product.map((el,ind)=><Products key={ind} class={ind} title={el.title} description={el.description} weight={el.weight} price={el.price}/>)}
        </div>
    )
}
