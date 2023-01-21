import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './data';

import { ProductComponent } from './Components/productComponent';



function App() {

  return (
    <div className="App">

    <ProductComponent/>

    </div>

  );
}

export default App;
