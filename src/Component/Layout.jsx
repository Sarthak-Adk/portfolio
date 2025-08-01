import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"; // Optional
import Footer from "./Footer"; // Optional

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
