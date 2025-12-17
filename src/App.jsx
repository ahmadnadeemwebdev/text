import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextFoam from './components/TextFoam';
import Aleart from "./components/Aleart";
// import About from "./components/About";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {    
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {       
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#121212';
      showAlert("Dark mode is enabled", "success");
      document.title = 'madam hera malik';
    } else {
      setmode('light');
      document.body.style.backgroundColor = '#ffffff';
      showAlert("Light mode is enabled", "success");
      document.title = 'oouchhh';
    }
  };

  return (
    <>
      <Navbar title="TEXTCORRECTOR" mode={mode} toggleMode={toggleMode} />
      <Aleart alert={alert} />

      <div className="container">
        <TextFoam
          showAlert={showAlert}
          heading="Enter the text to analyze"
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
