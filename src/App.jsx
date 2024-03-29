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
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="mx-0">
      {/* <Navbar /> */}
      {/* <RouterProvider router={router}> */}
      <BrowserRouter basename="/">
        <AutoScrollToTop />
        <Navbar />

        <div className=" overflow-hidden bg-bg-gray">
          <Routes>
            <Route path="/" Component={Welcome} />
            <Route path="/bifold" Component={Bifold_page} />
            <Route path="/sliding" Component={SlidingDoor} />
            <Route path="/millenium" Component={MilleniumDoor} />
          </Routes>
        </div>
        <ScrollToTop />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
