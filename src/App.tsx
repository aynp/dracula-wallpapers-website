import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Tab from './Tab';

import data from './walls.json';
import Nav from './Nav';

function App() {
  console.log(data);
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Tab />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
