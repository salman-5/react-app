import { lazy, Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Footer from "./components/sections/Footer";
import AutoScrollToTop from "./components/AutoScrollToTop";
import ScrollToTop from "./components/ScrollToTop";

const Welcome = lazy(() => import("./components/Welcome"));
const Bifold_page = lazy(() => import("./pages/Bifold"));
const MilleniumDoor = lazy(() => import("./pages/MilleniumDoor"));
const SlidingDoor = lazy(() => import("./pages/SlidingDoor"));

function RouteFallback() {
  return <div className="min-h-[50vh] bg-bg-gray" aria-hidden="true" />;
}

export default function App() {
  return (
    <div className="mx-0">
      {/* <Navbar /> */}
      {/* <RouterProvider router={router}> */}
      <BrowserRouter basename="/">
        <AutoScrollToTop />
        <Navbar />

        <div className=" overflow-hidden bg-bg-gray">
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" Component={Welcome} />
              <Route path="/bifold" Component={Bifold_page} />
              <Route path="/sliding" Component={SlidingDoor} />
              <Route path="/millenium" Component={MilleniumDoor} />
            </Routes>
          </Suspense>
        </div>
        <ScrollToTop />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
