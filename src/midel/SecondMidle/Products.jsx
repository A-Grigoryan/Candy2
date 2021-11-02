import React from 'react'

export default function Products(props) {
    return (
        <div key={props.key} className="productFlex">
            <div className={`imgProduct-${props.class} imgProduct`}></div>
            <div className="text">
                <div className="productTitel">{props.title}</div>
                <span className="productDescription">{props.description}</span>
                <span className="productDescription">{props.weight}</span>
            </div>
            <div className="productPrice">
                <div className="onlyPrice">
                    <div>
                        <span className="PriceValue">{props.price}</span>
                        <span>/ pcs</span>
                    </div>
                </div>
                <div className="onlySoppingCart">
                    <button className="miniShopcart">
                        <span>
                        <i class="fas fa-shopping-cart onlyminiCart"></i>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}
