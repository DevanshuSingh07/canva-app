import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './auth';
import Callback from './callback';
import { useState } from 'react';

function App() {
  console.log(process.env.REACT_APP_CANVA_CLIENT_ID)

  const [codeVerifier, setCodeVerifier] = useState('');
  const [url, seturl]=useState('');

  const verifyit=(value,value1)=>{
    setCodeVerifier(value)
    seturl(value1)
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth verify={verifyit} />} />
        <Route path="/callback" element={<Callback codehand={codeVerifier} url1={url} />} />
      </Routes>
    </Router>
  );
}

export default App;
