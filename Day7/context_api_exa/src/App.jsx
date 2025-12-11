import './App.css'
import { Dataprovider } from './context/DataContext'
import One from './One'
import Two from './Two'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Dataprovider>
        <One/>
        <Two/>
      </Dataprovider>
    </>
  )
}

export default App
                                                              