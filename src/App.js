import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact"
import { Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // To know whether dark mode is enabled or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#474b4e";
      showAlert("Dark mode has been enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "Success");
    }
  };

  return (
    <>      
      <Navbar
        title="Text@Converter"
        mode={mode}
        toggleMode={toggleMode}
        key={new Date()}/>
        <Alert alert={alert} />
        <div className="container my-3">
        <Routes>
        <Route path="/aboutus" element={ <AboutUs/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/"
        element = {<TextForm 
          showAlert={showAlert}
          heading="Enter Your text to convert." mode={mode}
          />} />
        </Routes>
      </div>
    </>
  );
}
export default App;