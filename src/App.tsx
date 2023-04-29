import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import LectureList from "./pages/LecturesList";
import { useEffect, useState } from "react";

function App() {
  const token = localStorage.getItem("accessToken");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(token !== null);
  useEffect(() => {}, [token]);

  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <Route path="/*" element={<LectureList />} />
        ) : (
          <>
            <Route path="/*" element={<SignIn setLogin={setIsLoggedIn} />} />
            <Route path="/signUp" element={<SignUp />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
