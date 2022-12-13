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
        <section className='ml-8 mr-6 transition-opacity duration-700 opacity-100'>
                <Content>{render()}</Content>
        </section>
    )
}

export default Page