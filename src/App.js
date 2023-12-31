import "./App.css";
import { Box } from "@mui/material";
import { Components } from "./Components/Components";
import { Navbar } from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router";
import { Login } from "./Components/Login/Login";
import { Page } from "./Components/Error/Page";
import Register from "./Components/Register/Register";

function App() {
  return (
    <Box>
      <Navbar />

      <Routes>
        <Route path="/" element={<Components />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="*" element={<Page />}/>
        <Route path="/register" element={<Register />} />
      </Routes>
    </Box>
  );
}

export default App;
