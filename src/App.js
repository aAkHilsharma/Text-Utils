import { useState }  from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=> {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500)
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode Enabled", "success");
    } else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success");
    }
  }
  
  return (
    <BrowserRouter>  
      <div className="App">
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
              <Route path="/" element={<TextForm heading="TextUtils - Word Counter, Character Counter, Case Convertion" mode={mode} showAlert={showAlert}/>} />
              <Route path="/about" element={<About mode = {mode}/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter> 
  );
}

export default App;
