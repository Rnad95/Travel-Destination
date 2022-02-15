// import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import data from './data/db.json';
import Tour from './components/Tours/Tour/Tour';
import TourDetails from './components/TourDetails/TourDetails';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/city/:id' element={<TourDetails data={data} />} />

      </Routes>
    </>
  );
}

export default App;
