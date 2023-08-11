import React from 'react'
import logo from './images/qalogo.svg'

function Header() {
  return (
    <>
        <header></header>
        <nav className='navbar navbar-expand-sm'>
            <a
                href='https://www.qa.com'
                className='navbar-brand'
                target='_blank'
                rel='noreferrer'
            >
                <img
                    src={logo}
                    alt='QA Ltd'
                    width={100}
                />
            </a>
            <a className="navbar-brand" href="/">
                <h1>Todo Appliaction</h1>
            </a>
        </nav>
    </>
  )
}

export default Header