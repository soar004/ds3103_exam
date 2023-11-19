import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage, DriverPage, NewDriverPage, QuizPage, RacePage } from './pages'
import './app.css';
import Navbar from './components/Navbar';
import { Formula1Provider } from './context/Formula1Context';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Formula1Provider>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/drivers" element={<DriverPage/>} />
            <Route path="/races" element={<RacePage/>} />
            <Route path="/new-driver" element={<NewDriverPage/>} />
            <Route path="/quiz" element={<QuizPage/>} />
          </Routes>
          </Formula1Provider>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
