import './App.css'; // I limit the image size
import { useState } from 'react'
import MoleContainer from './Components/MoleContainer'

function App() {
  let [score, setScore] = useState(0)

  const createMoleHills = () => {
    let hills = []
    for (let i=0; i<9; i++) {
      hills.push(
        <
          MoleContainer
          key={i}
          setScore={setScore}
          score={score}
        />
      )
    }
    
    return (
      <div>{hills}</div>
    )
  }

  return (
    <div className="App">
      <h1>React-a-Mole!</h1>
      <h3>Whack a Mole When One Appears!</h3>
      Score: {score}
      {createMoleHills()}
    </div>
  )
}

export default App
