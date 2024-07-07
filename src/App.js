import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
   <>
  <Router>
    <Routes>
      <Route path = '' element={<Navbar/>}/>
    </Routes>
  </Router>
   </>
  );
}

export default App;
