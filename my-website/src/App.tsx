import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footers from "./components/Footers";
import Home from "./pages/Home.mdx";
import CV from "./components/CV";

export default function App() {
  return (
    <>
      <div className="font-mono font-normal bg-bkg min-h-screen overflow-y-auto overflow-x-hidden flex flex-col">
        <BrowserRouter>
          <Navbar />
          <div className="flex-1 flex bg-bkg text-content w-full self-start">
            <div className="max-w-screen-md w-full mx-auto justify-start px-16 margin-padding-override ">
              <Routes>
                <Route
                  path="/"
                  element={
                    <div className="pt-5">
                      <Home />
                    </div>
                  }
                />
                <Route path="/CV" element={<CV />} />
              </Routes>
            </div>
          </div>
          <Footers />
        </BrowserRouter>
      </div>
    </>
  );
}
