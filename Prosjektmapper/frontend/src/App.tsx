import { BrowserRouter, Routes, Route,Link } from 'react-router-dom'
import { HomePage, DriverPage, NewDriverPage, QuizPage } from './pages'

function App() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <ul><li><Link to=""></Link></li></ul>
          <ul><li></li></ul>
        </nav>
        <main>
          <Routes>
            <Route></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
