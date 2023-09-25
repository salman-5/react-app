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
import Bifold from "./pages/Bifold";
import MilleniumDoor from "./pages/MilleniumDoor";
import SlidingDoor from "./pages/SlidingDoor";
import Footer from "./components/sections/Footer";

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
        element: <Bifold />,
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
    <div className="mx-0 p-0">
      {/* <Navbar /> */}
      {/* <RouterProvider router={router}> */}
      <BrowserRouter basename="/react-app/">
        <Navbar />

        <Routes>
          <Route path="/" Component={Welcome} />
          <Route path="/bifold" Component={Bifold} />
          <Route path="/sliding" Component={SlidingDoor} />
          <Route path="/millenium" Component={MilleniumDoor} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
