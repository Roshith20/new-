import logo from './logo.svg';
import './App.css';
import Course from './Components/Course/Course';
import Member from './Components/Member/Member';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div 
      className="App">
      <Home/>
      <BrowserRouter>
      <Routes>
        <Route path={'/member'} element={<Member/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
