import { BrowserRouter, Routes, Route,Link } from 'react-router-dom'
import { HomePage, DriverPage, NewDriverPage, QuizPage } from './pages'
import './app.css';
import homeIcon from './assets/New_era_F1_logo.png';

function App() {

  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top navbar-fixed-top">
          <Link className="navbar-brand" to="/"><img src={homeIcon} alt="Home" width="110em" className="d-inline-block align-top"/></Link>

          <div className="collaps navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto" id="navbarStyle">
              <li className="nav-item">
                <Link className="nav-link" to="/drivers">SEASONS FORMULA 1 DRIVERS AND TEAMS</Link>
              </li>
              <li className="nav-item ml-2">
                <Link className="nav-link" to="/new-driver">SIGN UP AS A DRIVER</Link>
              </li>
              <li className="nav-item ml-1">
                <Link className="nav-link" to="/quiz">QUIZ</Link>
              </li>
            </ul>
          </div>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/drivers" element={<DriverPage/>} />
            <Route path="/new-driver" element={<NewDriverPage/>} />
            <Route path="/quiz" element={<QuizPage/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
