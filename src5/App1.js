
import { useState} from 'react'

const App = () =>{
 

  const [countState, setCountState] = useState({
    count: 0,
    name: 'John Doe'
  })

  const handleIncrement = () => {
    setCountState({...countState, count: countState.count + 1})
  }

  const handleDecrement = () => {
    setCountState({ ...countState, count: countState.count - 1 })
  }

  const handleReset = () => {
    setCountState({ ...countState, count: 0 })
  }
  return(
    <>
    <h1>Count:{countState.count} </h1>
      <h1>name:{countState.name} </h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}> - </button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default App