import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function DefaultLayout() {
  return (
    <div className="page-wrapper">
      <header>
        <Navbar />
      </header>
      <main>
        <div className="container py-5">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
