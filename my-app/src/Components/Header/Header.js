import React, {useState} from 'react'
import "./Header.css"
import {AiFillHome} from 'react-icons/ai'
import {FaBookOpen} from 'react-icons/fa'
import {AiFillContacts} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import {GiCancel} from 'react-icons/gi'
import Bugger from '../BuggerClick/Bugger'

const Header = () => {
    const [toggle, setToggle] =useState(false)

    const toggleChange = () =>{
        setToggle(!toggle)
    }
  return (
    <div className='mainHeader'>
        <div className='HeaderHold'> 
            <div className='LogoDiv'>
                Logo
            </div>


            <div className='NavsDiv'>
                <div className='Navigations'>
                    <AiFillHome />
                    <span>Home</span>
                </div>
                
                <div className='Navigations'>
                    <FaBookOpen />
                    <span>About</span>
                </div>

                <div className='Navigations'>
                    <AiFillContacts />
                    <span>Contact</span>
                </div>

            </div>
            <div className='BurgerIconHold' onClick={toggleChange}>
                {toggle ? (
                    <GiCancel color='white'
                    size='25px' />
                ) : (
                    <GiHamburgerMenu color='white'
                 size='25px' />
                )}

            </div>
        </div>

        <div className='BuggerContentHold'>
            {toggle ? <Bugger /> : null}
        </div> 

    </div>
  )
}

export default Header