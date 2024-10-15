import './basicStyles.css';
import Header from './components/header/header.jsx';
import Carroussel from './components/carroussel/carroussel.jsx';

import React, { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      await axios.get("http://localhost:8080/https://api-receitas-pi.vercel.app/receitas/todas")
      .then((response) => setData(response.data))
    }
    fetchData()

  }, [])

  return (
    <div className="App">
      <Header></Header>
      <Carroussel data={data}/>
    </div>
  );
}

export default App;
