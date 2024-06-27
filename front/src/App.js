import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';
import Slider from './Components/Slider/Slider';

function App() {
  return (
    <>
      <Header/>
      
      <Slider/>
    </>
  );
}

export default App;
