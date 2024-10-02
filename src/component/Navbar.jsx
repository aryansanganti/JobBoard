import React ,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaBarsStaggered } from "react-icons/fa6";
import { FaXmark } from 'react-icons/fa6';

const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen]=useState(false);
    const handleMenuTogggler = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    
    const navItems=[
        {path:"/",title: "Search"},
        {path:"/my-job",title: "My Jobs"},
        {path:"/post-job",title: "Post A Job"},
    ]
  return (
    <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <nav className='flex justify-between item-center py-6'>
            <a href="/" className='flex item-center gap-2 text-2xl text-black'>
                <svg width="60" height="38" viewBox="0 0 60 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30 0L55.1147 36H4.88526L30 0Z" fill="#D9D9D9"/>
<g filter="url(#filter0_d_1669_162202)">
<path d="M30 8L55.1147 44H4.88526L30 8Z" fill="black"/>
<path d="M5.84373 43.5L30 8.87389L54.1563 43.5H5.84373Z" stroke="black"/>
</g>
<defs>
<filter id="filter0_d_1669_162202" x="0.885254" y="8" width="58.2295" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1669_162202"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1669_162202" result="shape"/>
</filter>
</defs>
</svg>
<span>JobBoard</span>
    </a>
    {/* navitems for large devices */}
        <ul className='hidden md:flex gap-12'>
            {navItems.map(({path,title})=>(
                <li key={path} className='text-base text-primary'>
                    <NavLink
                    to={path}
                    className={({ isActive}) =>isActive? "active": ""}
                  >
                    {title}
                  </NavLink>
                  </li>
                  )
                )
            }
        </ul>

        {/* signup and login btn */}
        <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
            <Link to="/login" className='py-2 px-5 border rounded'>Login in</Link>
            <Link to="/signup" className='py-2 px-5 border rounded bg-blue text-white' >Sign up</Link>
        </div>
            {/* mobilemenu */}
            <div className='md:hidden block'>       
                <button onClick={handleMenuTogggler}> 
                    {
                        isMenuOpen ? <FaXmark className='w-5 h-5 text-primary'/>:<FaBarsStaggered className='w-5 h-5 text-primary'/>
                    }
                    
                </button>
            </div>
        </nav>

        <div  className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "":"hidden"}`}>
            <ul>
            {navItems.map(({path,title})=>(
                <li key={path} className='text-base text-white  first:text-white py-1'>
                    <NavLink
                    to={path}
                    className={({ isActive}) =>isActive? "active": ""}
                  >
                    {title}
                  </NavLink>
                  </li>
                  ))}

                  <li className='text-white py-1'><Link to="/login" >Login in</Link></li>
            </ul>
        </div>
    </header>
  )
}

export default Navbar