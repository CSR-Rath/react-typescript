// layouts/MainLayout.tsx
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import "../../styles/layout.css";

const MainLayout = () => {
  return (
    <div className="app-layout">
      <Header />

      <div className="content">
        <Sidebar />

        <main className="main">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
