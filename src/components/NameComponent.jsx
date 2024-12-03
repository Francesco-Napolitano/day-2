import { Button } from 'react-bootstrap'

const NameComponent = (props) => {
  return (
    <>
      <div className="d-flex justify-content-around align-items-baseline mt-3">
        <Button
          variant="primary"
          onClick={() => props.setNameFunction('Mussolini')}
        >
          ???
        </Button>
        <p></p>
        <Button
          variant="warning"
          onClick={() => props.setNameFunction('Stalin')}
        >
          ???
        </Button>
      </div>
      <div>
        <p>Il mio nome è: {props.nameProp}</p>
      </div>
    </>
  )
}

export default NameComponent
