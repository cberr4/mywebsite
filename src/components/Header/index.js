import React from 'react'

function Header(location) {
    return (
        <header className='flex'>
            <h1 className='font-bold flex-auto px-8 py-8 lg:text-lg xl:text-2xl'>Charles Peace</h1>
            {location.children}
        </header>
    )
}

export default Header