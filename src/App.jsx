import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from './pages/loginPage/LoginPage';
import RegisterPage from './pages/registerPage/RegisterPage';
import './index.css';  // Import Tailwind here
import SideBar from "./common/sideBar/SideBar";


function App() {

  return (
    // <Router>
    //   <Routes>
    //     <Route path="*" element={<LoginPage />} />
    //     <Route path="/login" element={<LoginPage />} />
    //     <Route path="/register" element={<RegisterPage />} />
    //   </Routes>
    // </Router>
    <SideBar />
  )
}

export default App
