import React, { useState, useEffect } from 'react'
import Particle from './components/Particle'
import Header from './components/Header'
import Nav from './components/Nav'
import Page from './components/Page'

function App() {
  // For Navigation
  const [pages] = useState([
    { name: 'Page 1' },
    { name: 'Page 2' },
    { name: 'Page 3' }
  ])
  const [currentPage, SetCurrent] = useState(pages[0])

  // Media query
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  return (
    <div>
      {matches && (<h1>Big Screen</h1>)}
      {!matches && (<h3>Small Screen</h3>)}
      <Particle/>
      <div className='text-slate-200 font-mono'>
        <Header>
          <Nav pages={pages} SetCurrent={SetCurrent} currentPage={currentPage}></Nav>
        </Header>
        <main>
          <Page currentPage={currentPage}></Page>
        </main>
      </div>
    </div>
  );
}

export default App;
