import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='bg-[#BFD8AF] flex justify-between h-16 items-center list-none'>
      <div className='ml-2'>LOGO</div>
      <div className='flex mr-2 gap-5'>
        <li>Home</li>
       <Link href="/about"><li>About</li></Link> 
       <Link href='/contact'><li>Contact</li></Link> 
       <Link href='/login'><li>Login</li></Link>
        <Link href="/signup"><li>Sign Up</li></Link>
      </div>
    </nav>
  )
}

export default Navbar;