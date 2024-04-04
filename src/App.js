import './App.css';
import AdminLogin from './components/AdminLogin';
import {BrowserRouter,Routes,Router, Route} from 'react-router-dom'
import CreateEmp from './components/CreateEmp';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<AdminLogin/>}></Route>
        <Route path='/createEmp' element={<CreateEmp/>}></Route>
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
