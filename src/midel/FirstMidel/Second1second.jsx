import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Second1second() {
    return (
        <div className="Second1Button">
            <NavLink className="w20" to="/">
                <button className="Button">
                    <span>All Categories</span>
                </button>
            </NavLink>
        </div>
    )
}
