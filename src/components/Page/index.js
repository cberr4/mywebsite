import React from 'react'
import Content from '../Content'
import Page1 from '../Page1'
import Page2 from '../Page2'
import Page3 from '../Page3'

function Page({ currentPage }) {

    const render = () => {
        switch(currentPage.name) {
            case 'Page1':
                return <Page1></Page1>
            case 'Page2':
                return <Page2></Page2>
            case 'Page3':
                return <Page3></Page3>
            default:
                return <Page1></Page1>
        }
    }

    return (
        <section className='mx-8 transition-opacity duration-700 opacity-100'>
            <h2 className='text-2xl font-bold pb-6 sm:px-4 md:px-24 lg:px-56'>{currentPage.name}</h2>
                <Content>{render()}</Content>
        </section>
    )
}

export default Page