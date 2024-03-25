import './App.css';
import { HashRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/Home';
import Search from './Components/Routes/Search';
import Login from './Components/Routes/Login';
import Signup from './Components/Routes/Signup';

function App() {
  return (
    <div>
      <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
