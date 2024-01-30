import React from "react";
import Dashboard from "./dashboard/index";
import Login from "./login/index";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./dashboard/Home";
import PrivateRoute from "./router/privateRoute";
const App = () => {
  return (
    <>
      <div className="w-screen min-h-[calc(100vh-3.5vh)] relative">
        <Routes>
          <Route path="/" element={<Login />} />

          <Route
            element={
              <PrivateRoute>
                {" "}
                <Dashboard />{" "}
              </PrivateRoute>
            }
          >
            <Route path="/dashboard" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};
export default App;
