import './App.css';
import Home from './components/Home';
import SignIn from './components/SignIn';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/signin' element={<SignIn/>}/>
         <Route path='/signup' element={<SignUp/>}/>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
