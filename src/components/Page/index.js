import React from 'react'
import Content from '../Content'
import Page1 from '../Page1'
import Page2 from '../Page2'
import Page3 from '../Page3'

function Page({ currentPage }) {

    const render = () => {
        switch(currentPage.name) {
            case 'About':
                return <Page1></Page1>
            case 'Portfolio':
                return <Page2></Page2>
            case 'Contact':
                return <Page3></Page3>
            default:
                return <Page1></Page1>
        }
    }

    return (
        <section className='mx-8 transition-opacity duration-700 opacity-100'>
            <h2 className='font-bold text-xl pb-6 md:px-16 md:text-3xl lg:px-28 lg:text-4xl xl:px-36 xl:text-6xl'>{currentPage.name}</h2>
                <Content>{render()}</Content>
        </section>
    )
}

export default Page