import './App.css'
import { BrowserRouter as Router } from "react-router-dom";
import AppRoute from "./route/appRoute.tsx";

function App() {

  return (
    <>
      <Router>
        <AppRoute/>
      </Router>
    </>
  )
}

export default App
