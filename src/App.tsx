import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <Navbar />
      <main className="pt-20">
        <HomePage />
      </main>
    </div>
  );
}
