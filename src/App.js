import "./App.css";
import NavbarComponents from "./components/Navbar";
import ContentComponents from "./components/Content";
import "./style/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComplaintComponent from "./components/Complaint";
import Client from "./client/Client";
import Admin from "./admin/Admin";
import Category from "./components/Category";
import Waiting from "./components/Waiting";

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Admin />}></Route>
            <Route path="/client" element={<Client />}></Route>
            <Route path="/category" element={<Category />}></Route>
            <Route path="/waiting" element={<Waiting />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
