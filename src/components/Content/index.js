import React from 'react'

const Content = (location) => {
    return (
        <div className='md:text-lg lg:text-xl xl:text-2xl h-full'>
            {location.children}
        </div>
    )
}

export default Content