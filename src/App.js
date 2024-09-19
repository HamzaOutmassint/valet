import { BrowserRouter , Route , Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

import Valet from "./pages/Valet-ma";


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Valet />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
