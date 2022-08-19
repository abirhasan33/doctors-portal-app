import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './page/About';
import Home from './page/Home/Home';
import Login from './page/Login';
import Navbar from './page/Navbar';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </>
  );
}

export default App;
