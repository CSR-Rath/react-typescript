import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
           <Route path="/products" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
