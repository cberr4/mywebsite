import React from 'react'

function Header(location) {
    return (
        <header className='flex'>
            <h1 className='flex-auto cursor-pointer pl-8 py-8'>MyWebsite</h1>
            {location.children}
        </header>
    )
}

export default Header