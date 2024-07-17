import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import NavbarFooters from "./components/NavbarFooters";
import Home from "./pages/Home.mdx";
import Contact from "./pages/Contact.mdx";
import CV from "./pages/CV.mdx";

export default function App() {
  return (
    <>
      <div className="font-mono font-normal bg-bkg min-h-screen overflow-auto flex flex-col">
        <BrowserRouter>
          <Navbar />
          <div className="flex-1 flex bg-bkg text-content w-full self-start mx-2">
            <div className="max-w-screen-md  mx-auto relative">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/CV" element={<CV />} />
              </Routes>
            </div>
          </div>

          <NavbarFooters />
        </BrowserRouter>
      </div>
    </>
  );
}
