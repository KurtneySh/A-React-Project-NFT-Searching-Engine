import React from 'react'
import { createRoot } from "react-dom/client"
import Explorer from './components/Explorer.js'
// import NFTcards from './components/NFTcards.js'

const App = () => {
  return (
    <div>
      <Explorer />
    </div>
    
  )
}

const app = document.querySelector("#app")
const root = createRoot(app)
root.render(<App />)