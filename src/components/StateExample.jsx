import { Button } from 'react-bootstrap'
import { useState } from 'react'
import NameComponent from './NameComponent'

const StateExample = () => {
  const [counter, setCounter] = useState(0)

  const [name, setName] = useState('???')

  return (
    <section className="">
      <h1>--------ESEMPIO DI STATE--------</h1>
      <div className="d-flex justify-content-around align-items-baseline mt-3">
        <Button
          variant="primary"
          onClick={() => {
            setCounter(counter + 1)
          }}
        >
          Increase
        </Button>
        <p>{counter}</p>
        <div className="d-flex gap-2">
          <Button
            variant="danger"
            onClick={() => {
              setCounter(counter - 1)
            }}
          >
            {' '}
            Decrease
          </Button>
          <Button
            variant="warning"
            onClick={() => {
              setCounter(0)
            }}
          >
            {' '}
            Reset
          </Button>
        </div>
      </div>
      <div>
        <NameComponent nameProp={name} setNameFunction={setName} />
      </div>
    </section>
  )
}

export default StateExample
