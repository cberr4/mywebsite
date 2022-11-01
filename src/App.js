import React, { useState } from 'react'
import Particle from './components/Particle'
import Header from './components/Header'
import Nav from './components/Nav'
import Page from './components/Page'
import Loader from './components/Loader'

function App() {
  // For Navigation
  const [pages] = useState([
    { name: 'Page1' },
    { name: 'Page2' },
    { name: 'Page3' }
  ])
  const [currentPage, SetCurrent] = useState(pages[0])


  return (
    <div>
      <Particle/>
      <div className='text-slate-200 font-mono'>
        <Header>
          <Nav pages={pages} SetCurrent={SetCurrent} currentPage={currentPage}></Nav>
        </Header>
        <main>
          <Page currentPage={currentPage}></Page>
        </main>
        <Loader/>
      </div>
    </div>
  );
}

export default App;
