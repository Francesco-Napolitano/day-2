import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import StateExample from './components/StateExample'
import EffectComponent from './components/EffectComponent'

function App() {
  return (
    <div
      className="App bg-info d-flex align-items-center justify-content-center w-100 "
      style={{ height: '100vh' }}
    >
      <EffectComponent />
    </div>
  )
}

export default App
