import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Tab from "./components/Tab";
import data from "./walls.json";
import Nav from "./components/Nav";
import ProgressBar from "react-scroll-progress-bar"; 
function App() {
  console.log(data);

  return (
    <>
     <ProgressBar
     bgcolor="#6272a4"
     ></ProgressBar>
    <BrowserRouter>
   
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Tab />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
