import { useState }  from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

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
      <div className="App">
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <div className="container my-3">
          <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
            {/* <Route exact path="/about" element={<About />}/> */}
        </div>
    </div>
  );
}

export default App;
