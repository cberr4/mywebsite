import bg from './bliss.jpg'
import Header from './components/Header'

function App() {
  return (
    <div>
      <img src={bg} className='bliss' alt='background'/>
      <Header></Header>
    </div>
  );
}

export default App;
