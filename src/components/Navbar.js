import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav style={{ padding: "20px 10px", boxShadow: "0px 0px 3px #000", backgroundColor:"#F3DE8B" }} className='navbar navbar-expand-lg navbar-light  py-8 px-2'>
            <div className='container-fluid'>
                <Link style={{ fontSize: 30 }} to='/' className='navbar-brand'>Contact List App</Link>
            </div>
        </nav >
    )
}

export default Navbar