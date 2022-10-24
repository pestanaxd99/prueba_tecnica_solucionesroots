import React from 'react';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from './pages/Home';
import Invitation from './pages/Invitation';
import GenerateQR from './components/GenerateQR';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/invitation" element={<Invitation />} />
        <Route path="/invitation-qr" element={<GenerateQR />}></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;