import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { TechMarquee } from "../components/TechMarquee";

export function HomePage() {
  return (
    <section className="min-h-screen">
      <Navbar />

      <Hero />

      <TechMarquee />

      <section className="section">
        <div className="container-page">
          <div className="section-header">
            <h2 className="section-title">Topics</h2>
            <p className="section-desc">
              Explore core subjects across data science and engineering.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="section-header">
            <h2 className="section-title">Learning Resources</h2>
            <p className="section-desc">
              Selected study guides from university and online platforms.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
