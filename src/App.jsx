import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Layout from "./Pages/Layout.jsx";
import Home from "./Pages/Home.jsx";
import Contact from "./Pages/Contact.jsx";
import Service from "./Pages/Service.jsx";
import About from "./Pages/About.jsx";
import NotFound from "./Pages/NotFound.jsx";

function App() {
 
  return (

        <>
          <BrowserRouter>
            <Routes>

              <Route path="/" element={<Layout />}>
                <Route index element={<Home />}></Route>
                <Route path="about" element={<About />}></Route>
                <Route path="service" element={<Service />}></Route>
                <Route path="contact" element={<Contact />}></Route>
              </Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </BrowserRouter>
      </>  
  )
}

export default App;
