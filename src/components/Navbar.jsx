import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Image from './Image'
import Logo from '../assets/images/logo.png'
import Heading from './Heading'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
<div className=''>
<Container>
<div className="navbar bg-base-100">
  <div className="w-[40%]">
    <div className="dropdown">
      <div tabIndex={0} role="button" className=" lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      <li>
        <Link to='/'>
        <Heading as='h3' text='Home' className='text-base text-menuText hover:text-black hover:font-semibold'/>
        </Link>
      </li>
      <li>
        <Link to='/shop'>
        <Heading as='h3' text='Shop' className='text-base text-menuText hover:text-black hover:font-semibold'/>
        </Link>
      </li>
      <li>
        <Link to='/about'>
        <Heading as='h3' text='About' className='text-base text-menuText hover:text-black hover:font-semibold'/>
        </Link>
      </li>
      <li>
        <Link to='/contacts'>
        <Heading as='h3' text='Contacts' className='text-base text-menuText hover:text-black hover:font-semibold'/>
        </Link>
      </li>
      </ul>
    </div>
   <Link to='/'><Image imgSrc={Logo} imgAlt={'logo.png'} className={'pl-5'}/></Link>
  </div>
  <div className="hidden navbar-center lg:flex lg:w-[60%]">
    <ul className="px-1 menu menu-horizontal">
      <li>
        <Link to='/'>
        <Heading as='h3' text='Home' className='text-base text-menuText hover:text-black hover:font-semibold'/>
        </Link>
      </li>
      <li>
        <Link to='/shop'>
        <Heading as='h3' text='Shop' className='text-base text-menuText hover:text-black hover:font-semibold'/>
        </Link>
      </li>
      <li>
        <Link to='/about'>
        <Heading as='h3' text='About' className='text-base text-menuText hover:text-black hover:font-semibold'/>
        </Link>
      </li>
      <li>
        <Link to='/contacts'>
        <Heading as='h3' text='Contacts' className='text-base text-menuText hover:text-black hover:font-semibold'/>
        </Link>
      </li>
    </ul>
  </div>
</div>
</Container>
</div>
  )
}

export default Navbar
