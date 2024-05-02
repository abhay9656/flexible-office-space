import React from 'react'
import Navbar from './navbar';

const userLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default userLayout;