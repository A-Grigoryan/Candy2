import React from 'react'
import List from '../SecondMidle/product.json'
import ThirdListPart from './ThirdListPart'

export default function ThirdAllList() {
    const list = List.slice(5)
    return (
        <div className="List">
            
            {list.map((el,ind)=><ThirdListPart key={ind} class={ind} title={el.title} description={el.description} weight={el.weight} price={el.price}/>)}
           
        </div>
    )
}
