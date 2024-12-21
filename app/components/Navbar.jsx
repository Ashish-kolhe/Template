import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar  text-black bg-white">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Your Name</a>
  </div>
  <div className="flex-none gap-2">
   
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="./profile.gif" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow text-white">
        <li>
          <a href='/about' className="justify-between">
            About
           
          </a>
        </li>
        <li><a href='/contact'>Contact</a></li>
        <li><a href='/hire'>Hire Me</a></li>
      </ul>
    </div>
  </div>
</div>
    
 
  )
}

export default Navbar