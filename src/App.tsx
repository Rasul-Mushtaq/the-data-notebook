import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { TopicDetailPage } from "./pages/TopicDetailPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cream text-charcoal">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/topics/:topicId" element={<TopicDetailPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
