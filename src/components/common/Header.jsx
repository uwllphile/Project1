import React from "react"
import { Link, navLink } from "react-router-dom"

export const Header = () => {
    return (
        <>
            <header>
                <div className='container flexsb'>
                    <div className='logo'>
                        <img src={logo} alt=''/>
                    </div>
                    <div className='nav'>
                        {navLink.map((links, i) => (
                            <Link to={links.url} key={i}>
                                {links.text}
                            </Link>
                        ))}
                    </div>
                </div>
            </header>
        </>
    )
}