import { useState } from "react";
import reactLogo from "./assets/emital-logo.png";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import {
  createBrowserRouter,
  RouterProvider,
  Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Bifold_page from "./pages/Bifold";
import MilleniumDoor from "./pages/MilleniumDoor";
import SlidingDoor from "./pages/SlidingDoor";
import Footer from "./components/sections/Footer";
import AutoScrollToTop from "./components/AutoScrollToTop";

export default function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter(
    [
      {
        element: <Navbar />,
      },
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "/bifold",
        element: <Bifold_page />,
      },
      {
        path: "/react-app/millenium",
        element: <MilleniumDoor />,
      },
      {
        path: "/react-app/sliding",
        element: <SlidingDoor />,
      },
    ],
    {
      basename: "/react-app",
    }
  );

  return (
    <div className="mx-0 ">
      {/* <Navbar /> */}
      {/* <RouterProvider router={router}> */}
      <BrowserRouter basename="/react-app/">
        <AutoScrollToTop />
        <Navbar />
        <div className="p-5  overflow-hidden bg-transparent">
          <Routes>
            <Route path="/" Component={Welcome} />
            <Route path="/bifold" Component={Bifold_page} />
            <Route path="/sliding" Component={SlidingDoor} />
            <Route path="/millenium" Component={MilleniumDoor} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}
