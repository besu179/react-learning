import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import AppLayout from "./pages/AppLayout"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/applayout" element={<AppLayout />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}
