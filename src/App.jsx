import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from './pages/loginPage/LoginPage';
import RegisterPage from './pages/registerPage/RegisterPage';
import './index.css';  // Import Tailwind here
import SideBar from "./common/sideBar/SideBar.jsx";
import DashboardPage from "./pages/dashboardPage/DashboardPage.jsx";
import ExpensesPage from "./pages/expensesPage/ExpensesPage.jsx";


function App() {

  return (
    // <Router>
    //   <Routes>
    //     <Route path="*" element={<LoginPage />} />
    //     <Route path="/login" element={<LoginPage />} />
    //     <Route path="/register" element={<RegisterPage />} />
    //   </Routes>
    // </Router>
    <Router>
      <SideBar />
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/expenses" element={<ExpensesPage />} />
        {/* Add additional routes as needed */}
      </Routes>
    </Router>
  )
}

export default App
