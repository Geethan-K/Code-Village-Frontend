
import './App.css';
import Registration from './Components/Registration';
import Login from './Components/Login';
import {BrowserRouter as Router,Routes , Route } from "react-router-dom" 
import Nomatch from './Components/Nomatch'
import Dashboard from './Components/Dashboard';
import Admin from './Components/Admin';
import Adminpanel from './Components/Adminpanel';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes> 
          <Route path="/" element={<Login/> } /> 
          <Route path="/login" element={<Login/> } /> 
          <Route path="/registration" element={<Registration/> } /> 
          <Route path="/Dashboard" element={<Dashboard/> } />
          <Route path='/admin' element={<Admin/>} />
          <Route path='/adminPanel' element={<Adminpanel/>} />
          
          <Route path='*' element={<Nomatch />}  />      
     </Routes> 
      </Router>
  </div>
  );
}

export default App;
