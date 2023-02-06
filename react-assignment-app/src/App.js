import React, { useState, useEffect } from 'react';
import { fetchData } from './data';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData().then((res) => setData(res));
  }, []);

  return (
    <div className="App">
      <Navbar navItems = {data}/>
    </div>
  );
}

export default App;
