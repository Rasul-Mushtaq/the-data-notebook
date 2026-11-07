import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { TechMarquee } from "../components/TechMarquee";
import { ResourcesSection } from "../components/ResourcesSection";
import { topicsData } from "../data/topicsData";
import { Code2, Database, LineChart, Brain } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "data-structures-algorithms": <Code2 className="w-6 h-6 text-charcoal" />,
  "database-management-sql": <Database className="w-6 h-6 text-charcoal" />,
  "data-analysis-visualization": (
    <LineChart className="w-6 h-6 text-charcoal" />
  ),
  "machine-learning-modeling": <Brain className="w-6 h-6 text-charcoal" />,
};

export function HomePage() {
  return (
    <section className="min-h-screen">
      <Navbar />

      <Hero />

      <TechMarquee />

      {/* Topics Overview Section */}
      <section id="topics" className="section bg-cream">
        <div className="container-page">
          <div className="section-header">
            <h2 className="section-title italic">// Topics</h2>
            <p className="section-desc">
              Data-related subjects that will be focused on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topicsData.map((topic) => (
              <div
                key={topic.id}
                className="card-base rounded-xl overflow-hidden cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-sand flex items-center justify-center">
                    {iconMap[topic.id] || (
                      <Code2 className="w-6 h-6 text-charcoal" />
                    )}
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-charcoal/50">
                    {topic.eyebrow}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-charcoal mb-3">
                  {topic.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed text-sm md:text-base">
                  {topic.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Resources Hub Section */}
      <ResourcesSection />
    </section>
  );
}
