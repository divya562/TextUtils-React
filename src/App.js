
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode,  setMode]=useState('light')
  const [alert, setAlert]=useState(null)
        
  const showAlert=(message, type)=>{
          setAlert({
              msg: message,
              type: type
          })
          setTimeout(()=>{
            setAlert(null)
          },1500)
  }

  const toogleMode=()=>{
    if(mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor="#2a2929"
      showAlert("Dark mode is enable", "success")
      // document.title='TextUtils - Dark Mode';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white"
      showAlert("light mode is enable", "success")
      // document.title='TextUtils - Light Mode';
    }
  }
  return (
    <>
    <Router>
        <Navbar title="textUtils" home="Home" about="About us" mode={mode} toggleMode={toogleMode}/>
        <Alert alert={alert}/>
        <div className="container my-4">
          <Routes>
            <Route exact path='/about' element={<About  mode={mode}/>} />
            <Route exact path="/TextForm" element={<TextForm heading="Try TextUtils - Word Counter, Character Counter, Capital Text" mode={mode} showAlert={showAlert} />}/>
    
          </Routes>
          {/* <About></About> */}
        </div>
      </Router>
    </>
    
  );
}

export default App;
