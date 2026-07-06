import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Counter from "./pages/Counter";
import InputDemo from "./pages/InputDemo";
import FormDemo from "./pages/FormDemo";
import Conditional from "./pages/Conditional";
import Theme from "./pages/Theme";
import Students from "./pages/Students";
import FilterStudents from "./pages/FilterStudents";


import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>

      <Header/>

      <Routes>
        <Route
        path="/"
        element={
          <Home
           name="Ayush" 
           college="Lloyd Institute of Engineering & Technology"
           course= "Master of Computer Applications(MCA)"
           tech= "MERN Stack"
          />
        }
       />

         <Route path="/about" element={<About />} />
         <Route path="/service" element={<Service />} />
         <Route path="/contact" element={<Contact />} />

         <Route path="/counter" element={<Counter />} />
         <Route path="/input" element={<InputDemo />} />
         <Route path="/form" element={<FormDemo />} />
         <Route path="/conditional" element={<Conditional />} />
         <Route path="/theme" element={<Theme />} />
         <Route path="/students" element={<Students />} />
         <Route path="/filter" element={<FilterStudents />} />

      </Routes>

      <Footer/>

    </BrowserRouter>
  );
}

export default App;