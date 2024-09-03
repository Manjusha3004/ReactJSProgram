import Model from "./components/Model"
import './App.css'
import { useState } from 'react'

function App() {
  const [show, setShow] = useState(false)

  const handleClose = () => {
    setShow(false);
  }

  return (
    <div onClick={() => setShow(false)}>
      <h1 className="header">Model</h1>
      <button className="buttonStyle"
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setShow(true)
        }
        } >Show the modal</button>
      {show ? <Model handleClose={handleClose} /> : null}
    </div>
  )
}
export default App
