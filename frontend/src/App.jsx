import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Navbar from './pages/Navbar';
import JobDetails from './pages/JobDetails';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs/:jobId" element={<JobDetails />} />
      </Routes>
    </Router>
  );
}

export default App;