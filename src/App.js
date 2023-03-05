import { Route, Routes } from 'react-router-dom';
import './App.css';
import {Header, Footer} from './Components';
import {IndexPage, Home, Profile} from './Pages'

function App() {
  return (
    <div className=' min-h-full'>
        <Header/>
        <Routes>
          <Route path='/' element={<IndexPage/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/me' element={<Profile/>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
