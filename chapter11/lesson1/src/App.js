import { Route, Routes,Navigate } from "react-router-dom";
import { About, Contact, Events, History, Home, Location, Products, Redirect, Services, Whoops404 } from "./pages.js";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="services" element ={<Redirect redirect="/about/services"/>}></Route>
        <Route path="/about" element={<About />}>
          <Route path="history" element={<History />}></Route>
          <Route path="services" element={<Services />}></Route>
          <Route path="location" element={<Location />}></Route>
        </Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<Whoops404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
