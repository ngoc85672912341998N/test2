

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pagechatbot from "./page";
import Loginpage from "./components/login_page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Phân Trang cho website */}
          <Route path="/" element={<Loginpage />} />
          <Route path="/chatbot" element={<Pagechatbot />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
