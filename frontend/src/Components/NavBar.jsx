import React from 'react'

const NavBar = () => {
  return (
    <div>
      <nav className='bg-slate-400'>

            <ul className='flex flex-row gap-4 items-end justify-end'>
                <li>Home</li>
                <li>About Us</li>
                <li>Support Us</li>
                <button>Log In</button>
                <button>Register</button>
            </ul>

      </nav>
    </div>
  )
}

export default NavBar
