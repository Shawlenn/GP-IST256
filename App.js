
import './App.css';
import Navbar from './components//Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App"> 
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
