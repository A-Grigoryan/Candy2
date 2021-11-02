import React from 'react'
import ThirdAllList from './ThirdAllList'



export default function ThirdList() {
    return (
        <div className="AllThirdList">
            <div className="ThirdList">
                <button className="thirdButton left">
                <i class="leftIcon fas fa-angle-left"></i>
                </button>
                <ThirdAllList/>
                <button className="thirdButton right">
                <i class="rightIcon fas fa-angle-right"></i>
                </button>
            </div>
        </div>
    )
}
