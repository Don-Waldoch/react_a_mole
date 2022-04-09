import { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

const MoleContainer = (props) => {
  let [theMole, setTheMole] = useState(false)

  const handleClick = (e) => {
    props.setScore(props.score + 1)
    setTheMole(false)
  }
    
  const divStyle = {
    display : 'inline-block',
    width : '30vw'
  }

  let displayMole = theMole ? <Mole setScore={props.setScore} toggle={setTheMole} handleClick={handleClick} />
                            : <EmptySlot toggle={setTheMole} />

  return (
    <div style={divStyle}>{displayMole}</div>
  )
}

export default MoleContainer
