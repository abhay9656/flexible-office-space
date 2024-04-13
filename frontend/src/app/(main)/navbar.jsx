import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-green-500 flex justify-between h-16 items-center list-none'>
      <div className='ml-2'>LOGO</div>
      <div className='flex mr-2 gap-5'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Login</li>
        <li>Sign Up</li>
      </div>
    </nav>
  )
}

export default Navbar;