import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { TopicDetailPage } from "./pages/TopicDetailPage";
import { SubtopicDetailPage } from "./pages/SubtopicDetailPage";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-cream text-charcoal">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/topics/:topicId" element={<TopicDetailPage />} />
          <Route
            path="/topics/:topicId/subtopic/:subtopicId"
            element={<SubtopicDetailPage />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
