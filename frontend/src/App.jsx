import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from './pages/Layout'
import Home from './pages/Home'
import Workers from './pages/Workers'
import Works from './pages/Works'
import Wallet from './pages/Wallet'
import WorkerInput from './pages/WorkerInput'
import Work from './pages/Work'
import CreateWork from './pages/CreateWork'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}></Route>
          
          <Route path='/workers' element={<Workers/>}/>
          <Route path='/workers/:id' element={<Workers/>}/>
          <Route path='/work/:id' element={<Work/>}/>
          <Route path='/works' element={<Works/>}/>
          <Route path='/create-work' element={<CreateWork/>}/>
          <Route path='/wallet' element={<Wallet/>}/>
          <Route path='/workerinput' element={<WorkerInput/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
