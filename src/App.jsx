import React from 'react'
import "./App.css"
import {Route} from 'react-router-dom'
import Header from './header/Header'
import Midel from './midel/Midel'
import FotherMain from './fother/FotherMain'

export default function App() {
    return (
        <Route>
        <div>
            <Header/>
            <Midel/>
            <FotherMain/>
        </div>
        </Route>
    )
}
