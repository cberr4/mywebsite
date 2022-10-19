import React from 'react'
import Content from '../Content'
import Page1 from '../Page1'
import Page2 from '../Page2'
import Page3 from '../Page3'

function Page({ currentPage }) {

    const render = () => {
        switch(currentPage.name) {
            case 'Page 1':
                return <Page1></Page1>
            case 'Page 2':
                return <Page2></Page2>
            case 'Page 3':
                return <Page3></Page3>
            default:
                return <Page1></Page1>
        }
    }

    return (
        <section className='mx-8'>
            <h2 className='text-2xl font-bold py-8'>{currentPage.name}</h2>
            <Content>{render()}</Content>
        </section>
    )
}

export default Page