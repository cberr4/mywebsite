import React, { useState, useRef } from 'react'
import Particle from './components/Particle'
import Header from './components/Header'
import Nav from './components/Nav'
import Page from './components/Page'
import FadeIn from 'react-fade-in'
import { CSSTransition } from 'react-transition-group'

function App() {
  // For Navigation
  const [pages] = useState([
    { name: 'Page1' },
    { name: 'Page2' },
    { name: 'Page3' }
  ])
  const [currentPage, SetCurrent] = useState(pages[0])

  const [inProp] = useState(false);
  const nodeRef = useRef(null);

  return (
    <>
      <Particle/>
      <CSSTransition nodeRef={nodeRef} in={inProp} timeout={1000} classNames="my-node">
        <div ref={nodeRef}/>
      </CSSTransition>
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
