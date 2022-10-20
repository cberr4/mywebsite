import React from 'react'

function Header(location) {
    return (
        <header className='flex space-x-24 pr-20'>
            <h1 className='flex-auto cursor-pointer pl-8 py-8'>MyWebsite</h1>
            {location.children}
        </header>
    )
}

export default Header