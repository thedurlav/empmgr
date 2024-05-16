import './App.css';
import AdminLogin from './components/AdminLogin';
import {BrowserRouter,Routes,Router, Route} from 'react-router-dom'
import CreateEmp from './components/CreateEmp';
import Home from './components/Home';
import { createContext, useContext } from 'react';
function App() {
 

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/loginadmin' element={<AdminLogin/>}></Route>
        <Route path='/createEmp' element={<CreateEmp/>}></Route>
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
