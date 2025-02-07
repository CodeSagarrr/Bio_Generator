import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer';
import BioGenerate from './Pages/BioGenerate';
import Templates from './Pages/Templates';
import Analytics from './Pages/Analytics';
import { Toaster } from 'react-hot-toast'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate" element={<BioGenerate />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
      <Toaster/>
      <Footer/>
    </>
  )
}

export default App
