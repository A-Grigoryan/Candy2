import React from 'react'

export default function CategoryPart(props) {
    {console.log(props.title)}
    return (
        <div key={props.key} className={`TopCategoryHead TopCategoryHead${props.class}`}>
            <div className="CategoryText">
                <h4>{props.title}</h4>
                <span>{props.deal}</span>
            </div>
            <div className={`img${props.class} img`}></div>            
        </div>
    )
}
