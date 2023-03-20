import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import Partners from "../src/pages/partners";
import Booking from "../src/pages/booking";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
