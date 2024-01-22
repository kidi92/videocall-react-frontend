import NavbarComponents from "../components/Navbar";
import ContentComponents from "../components/Content";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Admin() {
  return (
    <div>
      <div className="myBG">
        <NavbarComponents />
        <ContentComponents />
      </div>
    </div>
  );
}

export default Admin;
