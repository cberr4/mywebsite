import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Particle from './components/Particle'
import Header from './components/Header'
import Nav from './components/Nav'
import Page from './components/Page'
// import Loader from './components/Loader'

function App() {
  // For Navigation
  const [pages] = useState([
    { name: 'Page1' },
    { name: 'Page2' },
    { name: 'Page3' }
  ])

  const [currentPage, SetCurrent] = useState(pages[0])

  const loader = document.querySelector('.loader')

  // if you want to show the loader when React loads data again
  const showLoader = () => loader.classList.remove('loader--hide')

  const hideLoader = () => loader.classList.add('loader--hide')

  const App = ({ hideLoader }) => {
    useEffect(hideLoader, [])

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
          {/* <Loader/> */}
        </div>
      </div>
    )
  }
  // the setTimeout simulates the time it takes react to load, and is not part of the solution
  setTimeout(() => 
    // the show/hide functions are passed as props
    ReactDOM.render(
      <App
        hideLoader={hideLoader}
        showLoader={showLoader} 
        />,
      document.getElementById('app')
    )
  , 1500);
}

export default App;
