import "./App.css";
import CertificatePdf from "./components/CertificatePdf";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Profile from "./components/Profile";
import CertificateProof from "./components/CertificateProof";

function App() {
  return (
    <>
      {/* <CertificatePdf/> */}

      {/* browser router  */}
      <Router>
        <Routes>
          <Route path="/" element={<CertificatePdf />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/proof-of-work" element={<CertificateProof />} />
        </Routes>
      </Router>
      



     
    </>
  );
}

export default App;
