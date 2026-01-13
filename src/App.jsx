import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
//import Testimonials from "./pages/Testimonials";
import Appointment from "./pages/Appointment";

import FloatingLanguageSwitcher from "./components/FloatingLanguageSwitcher";

function App() {
  return (
    <Router>
      <Layout>
        <FloatingLanguageSwitcher />

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/testimonials" element={<Testimonials />} /> */}
          <Route path="/services" element={<Services />} />
          <Route path="/contact_us" element={<Contact />} />
          ¨
          <Route path="/appointments" element={<Appointment />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
