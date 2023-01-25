import './index.css'
import Home from './home';
import Navbar from './navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
     <div className="content">
      <Home />
     </div>
    </div>
  );
}

export default App;
