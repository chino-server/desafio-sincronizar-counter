import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetail from './components/ItemDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contex/useContex';
import Cart from './components/views/cart';

import PrimeReact from 'primereact/api';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';



import Shop from './components/Shop';

const App= ()=> {
  return (
    <CartProvider> 
 
      <Router>
        <div className="App">
            <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/detail/:id' element= {<ItemDetail/>} />  
          <Route path='/cart' element= {<Cart/>} /> 
          <Route path='/purchase' element= {<Shop/>}/>
        </Routes>
        </div>
      </Router>
  
    </CartProvider>
  );
    
}

export default App;
