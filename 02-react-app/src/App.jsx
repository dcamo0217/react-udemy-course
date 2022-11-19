import { useState } from "react"
import reactLogo from './assets/react.svg'
import './App.css'

const App = () => {
  
  const [cont, setCont] = useState(10)

  const disminuir = () => {
    setCont(cont-1)
  } 
  const aumentar = () => {
    setCont(cont+1)
  } 

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img width="250px" src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img width="250px" src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <button onClick={disminuir}> - </button>
        <h1>{cont}</h1>
        <button onClick={aumentar}> + </button>
      </div>
    </div>
  )
}

export default App
