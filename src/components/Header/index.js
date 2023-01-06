import React from 'react'

function Header(location) {
    return (
        <header className='flex'>
            <h1 className='italic font-bold flex-auto pl-8 pr-3 py-8 lg:text-lg xl:text-2xl'>Chris Ibarra</h1>
            {location.children}
        </header>
    )
}

export default Header