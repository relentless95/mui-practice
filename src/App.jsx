// import { useState } from "react";
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import { AppBar } from "@mui/material";
import SearchAppBar from "./components/AppBar";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Tour from "./pages/Tour";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:tourId" element={<Tour />} />
      </Routes>
    </>
  );
}

export default App;
