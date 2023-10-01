import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default function Layout() {
  return (
    <div>
      <Header />
      {/* Layout Ke children routes will be shown here */}
      <Outlet />
      <Footer />
    </div>
  );
}
