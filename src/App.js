
import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes , Route } from "react-router-dom" 
const Registration = React.lazy(()=>import('./Components/Registration'))
const Login = React.lazy(()=>import('./Components/Login'))
const Nomatch = React.lazy(()=>import('./Components/Nomatch'))
const Dashboard = React.lazy(()=>import('./Components/Dashboard'))
const Admin = React.lazy(()=>import('./Components/Admin'))
const Adminpanel = React.lazy(()=>import('./Components/Adminpanel'))
const Newproblem = React.lazy(()=>import('./Components/Newproblem'))

function App() {
  return (
    <div className="App">
      <Router>
      <Routes> 
          <Route path="/" element={<React.Suspense fallback={<>...</>}><Login /></React.Suspense> } /> 
          <Route path="/login" element={<React.Suspense fallback={<>...</>}><Login /></React.Suspense> } />
          <Route path="/registration" element={<React.Suspense fallback={<>...</>}><Registration /></React.Suspense> } />
          <Route path="/dashboard" element={<React.Suspense fallback={<>...</>}><Dashboard /></React.Suspense> } />
          <Route path='/adminPanel' element={<React.Suspense fallback={<>...</>}><Adminpanel /></React.Suspense> } />
          <Route path='/newProblem' element={<React.Suspense fallback={<>...</>}><Newproblem /></React.Suspense> } />
          
          <Route path='/admin' element={
          <React.Suspense fallback={<>...</>}>
            <Admin />
          </React.Suspense> 
          } />
        
          
          <Route path='*' element={<Nomatch />}  />      
     </Routes> 
      </Router>
  </div>
  );
}

export default App;
