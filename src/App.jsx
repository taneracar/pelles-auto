import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Coupons from "./pages/Coupons"; // Import Coupons page
import Layout from "./components/Layout";
import Testimonials from "./pages/Testimonials";
import Appointment from "./pages/Appointment";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/coupons" element={<Coupons />} />
          <Route path="/appointments" element={<Appointment />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
