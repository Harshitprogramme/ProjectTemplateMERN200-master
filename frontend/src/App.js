import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/main/Login";
import Admin from "./components/admin";
import User from "./components/user";
import Main from "./components/main";
import Dashboard from "./components/admin/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Admin />} path="admin">
          <Route element={<Dashboard />} path="dashboard" />
        </Route>
        <Route element={<User />} path="user"></Route>
        <Route element={<Login/>} path="Login"></Route>
        <Route element={<Main />} path="main"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
