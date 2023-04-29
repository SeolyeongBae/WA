import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard.tsx/Dashboard";
import LectureList from "./pages/LecturesList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/" element={<LectureList />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
