import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Bookmyshow from './components/Bookmyshow'
import MovieView from './components/MovieView';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
   <div>
    <Header/>
    <Routes>
    <Route path='/' element={<Bookmyshow></Bookmyshow>}/>
    <Route path='/view-bookmyshow/:id' element={<MovieView/>}></Route>
    </Routes>
    <Footer/>
 
   </div>
  );
}

export default App;
