import './normalize.css';
import Navigation from './Components/Navigation/Navigation';
import BillBoard from './Components/BillBoard/BillBoard';
import Titles from './Components/Titles/Titles';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BillBoard/>
      <Navigation/>
      <Titles/>
      <Footer/>
    </div>
  );
}

export default App;
