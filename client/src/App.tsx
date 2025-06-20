// react
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// css
import "./css/global.css"
// pages
import Home from "./pages/Home"
import Authorization from "./pages/Authorization"
import Error from "./pages/error/Error"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authorization" element={<Authorization />} />
        <Route path="*" element={<Error />} />
        <Route path='' />
      </Routes>
    </Router>
  );
}

export default App;