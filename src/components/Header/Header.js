import React from 'react';
import './header.css'

function Header() {
    return (
        <header>
            <div>
                <h1>Proyecto</h1>
            </div>
            <div className="search">
                <input className="searchBar" type="text" placeholder="Search.."></input>
            </div>
        </header>
    )
}

export default Header