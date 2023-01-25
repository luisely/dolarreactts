import './styles/global.css'
import './lib/datefns'
import { Header } from './components/Header'
import { Dolar } from './components/Dolar'

function App() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-md flex flex-col gap-4 m-0">
        <Header />
        <Dolar />
      </div>
    </div>
  )
}

export default App
