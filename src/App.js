import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Create from './Create'
import Update from './Update'

function App() {
  return (
    <div>

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/update/:id' element={<Update/>}/>
        <Route path='/create' element={<Create/>}/>

      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
