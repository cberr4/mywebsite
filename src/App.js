import React, { useState } from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Page from './components/Page'

function App() {
  const [pages] = useState([
    { name: 'Page 1' },
    { name: 'Page 2' },
    { name: 'Page 3' }
  ])

  const [currentPage, SetCurrent] = useState(pages[0])

  return (
    <div>
      <Header>
        <Nav pages={pages} SetCurrent={SetCurrent} currentPage={currentPage}></Nav>
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
    </div>
  );
}

export default App;
