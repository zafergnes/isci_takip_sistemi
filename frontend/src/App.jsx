import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from './pages/Layout'
import Home from './pages/Home'
import Workers from './pages/Workers'
import Works from './pages/Works'
import Wallet from './pages/Wallet'
import WorkersInput from "./pages/WorkersInput";
import Work from "./pages/Work";
import Worker from "./pages/Worker";
import CreateWork from "./pages/CreateWork";
import Add from "./pages/Add";
import AddWorker from "./pages/AddWorker";
import NoPage from "./pages/NoPage";
import DaysWorked from "./pages/DaysWorked.JSX";
import WalletWorker from "./pages/WalletWorker";
import WalletWork from "./pages/WalletWork";
import WalletWorkData from "./pages/WalletWorkData";
import WalletWorkerData from "./pages/WalletWorkerData";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/add" element={<Add />}></Route>
            <Route path="/add-worker" element={<AddWorker />} />
            <Route path="/workers" element={<Workers />} />
            <Route path="/workers/:id" element={<Workers />} />
            <Route path="/work/:id" element={<Work />} />
            <Route path="/worker/:id" element={<Worker />} />
            <Route path="/works" element={<Works />} />
            <Route path="/days_worked/:id" element={<DaysWorked />} />
            <Route path="/create-work" element={<CreateWork />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/wallet-worker" element={<WalletWorker />} />
            <Route path="/wallet-work" element={<WalletWork />} />
            <Route path="/wallet-work-data/:id" element={<WalletWorkData />} />
            <Route
              path="/wallet-worker-data/:id"
              element={<WalletWorkerData />}
            />
            <Route path="/worker-input" element={<WorkersInput />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
