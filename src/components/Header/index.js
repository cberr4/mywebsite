import React from 'react'

function Header(location) {
    return (
        <header className='flex items-center'>
            <h1 className='px-8'>My website</h1>
            {location.children}
        </header>
    )
}

export default Header