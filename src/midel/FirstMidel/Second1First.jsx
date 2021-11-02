import React from 'react'
import CategoryPart from './CategoryPart'
import Categoryes from './categorys.json'

export default function Second1First() {
    return (
        <div className="topCategoryFlex">
           {Categoryes.map((el,ind)=><CategoryPart key={ind} class={ind} title={el.titel} deal={el.deal}/>)} 
        </div>
    )
}
