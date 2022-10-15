import React from 'react'

function Header(location) {
    return (
        <header className='mb'>
            <h1>Example header text</h1>
            {location.children}
        </header>
    )
}

export default Header