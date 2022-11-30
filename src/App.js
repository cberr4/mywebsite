import React, { useState } from 'react'
import Particle from './components/Particle'
import Header from './components/Header'
import Nav from './components/Nav'
import Page from './components/Page'
import FadeIn from 'react-fade-in'

function App() {
  // For Navigation
  const [pages] = useState([
    { name: 'About' },
    { name: 'Portfolio' },
    { name: 'Contact' }
  ])
  const [currentPage, SetCurrent] = useState(pages[0])


  return (
    <>
      <Particle/>
        <FadeIn transitionDuration={2500}>
          <div className='text-slate-200 font-mono'>
            <Header>
              <Nav pages={pages} SetCurrent={SetCurrent} currentPage={currentPage}></Nav>
            </Header>
            <main>
              <Page currentPage={currentPage}></Page>
            </main>
          </div>
        </FadeIn>
    </>
  );
}

export default App;
