import "./App.css";
import { Routes, Route } from "react-router";

// pages
import Home from './pages/Home';
import PhoneDetails from './pages/PhoneDetails';
import PhoneList from "./pages/PhoneList";
import Error from './pages/Error';
import NotFound from './pages/NotFound';

// components
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phones" element={<PhoneList />} />
        <Route path="/phones/:id" element={<PhoneDetails />} />
    
        {/* error FE routes */}
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
