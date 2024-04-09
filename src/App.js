import { useState } from 'react';
import './App.css';
import About from './components/About';
import EditorForm from './components/EditorForm';
import Header from './components/Header'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null);

  const createAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#001f4c';
      document.title = 'TextUtils- Dark'
      createAlert('Dark mode enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils- Light'
      createAlert('Light mode enabled', 'success');
    }
  }

  const getMode = (mode) => {
    if (mode === 'danger') {
      setMode('danger');
      document.body.style.backgroundColor = '#001f4c';
      createAlert('Red theme applied', 'success');
    } else if (mode === 'warning') {
      setMode('warning');
      document.body.style.backgroundColor = '#001f4c';
      createAlert('Yellow theme applied', 'success');
    } else if (mode === 'success') {
      setMode('success');
      document.body.style.backgroundColor = '#001f4c';
      createAlert('Green theme applied', 'success');
    }
  }

  return (
    <>
      <Router>
        <Header title="TextEditor" mode={mode} toggleMode={toggleMode} passMode={getMode} />
        <Alert alert={alert} />
        <div className="container my-3 pt-5">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}  />}></Route>
            <Route exact path="/" element={<EditorForm heading="Use Below Text Area For Text Editing" mode={mode} alert={createAlert} />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
