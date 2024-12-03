import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
const EffectComponent = () => {
  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)
  useEffect(() => {
    console.log('INVOCATO AD OGNI CLICK')
  })
  useEffect(() => {
    console.log('INVOCATO SOLO CON IL SECONDO')
  }, [counter2])
  return (
    <div className="d-flex flex-column">
      <div>
        <Button onClick={() => setCounter(counter + 1)}>Aumenta</Button>
        <p>{counter}</p>
      </div>
      <div>
        <Button onClick={() => setCounter2(counter + 1)}>
          Aumenta il secondo contatore
        </Button>
        <p>{counter2}</p>
      </div>
    </div>
  )
}

export default EffectComponent
