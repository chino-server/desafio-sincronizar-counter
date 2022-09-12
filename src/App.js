import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetail from './components/ItemDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App= ()=> {
  return (
    <Router>
      <div className="App">
          <NavBar/>
    
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/detail/:id' element= {<ItemDetail/>} />  
      </Routes>
      </div>
    </Router>
     
  );
    
}

export default App;
