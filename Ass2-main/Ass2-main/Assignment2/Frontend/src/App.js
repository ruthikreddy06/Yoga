
import './App.css';
import Getdetails from './Getdetails';
import Payment from './Payment';
import Register from './Register';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Navbar from './Navbar';
import { useState } from 'react';
import Alert from './Alert';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }
  return (
    <div>
      <Router>
        <Navbar/>
        <Alert alert={alert}/>
    <Routes>
          <Route exact path="/payment" element={<Payment showAlert={showAlert}/>} />
          <Route exact path="/" element={<Register showAlert={showAlert}/>}/>
          <Route exact path="/Getdetails" element={<Getdetails showAlert={showAlert}/>}/>
          </Routes>
          </Router>
        </div>
   
  );
}

export default App;
