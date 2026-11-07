import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-cream text-charcoal">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
