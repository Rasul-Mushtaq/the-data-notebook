import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { TechMarquee } from "../components/TechMarquee";
import { topicsData } from "../data/topicsData";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Database, LineChart, Brain } from "lucide-react";

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

      {/* Topics Section with id="topics" */}
      <section id="topics" className="section bg-linen/50">
        <div className="container-page">
          <div className="section-header">
            <h2 className="section-title italic">// Topics</h2>
            <p className="section-desc">
              Explore core subjects across data science and engineering with
              mathematical foundations and code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topicsData.map((topic) => (
              <Link
                key={topic.id}
                to={`/topics/${topic.id}`}
                className="card-base group block rounded-xl overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-sand flex items-center justify-center transition-transform group-hover:scale-110">
                    {iconMap[topic.id] || (
                      <Code2 className="w-6 h-6 text-charcoal" />
                    )}
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-charcoal/50">
                    {topic.eyebrow}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-charcoal mb-3 group-hover:text-charcoal/80">
                  {topic.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-6 text-sm md:text-base">
                  {topic.summary}
                </p>

                <div className="link-arrow">
                  Explore Topic{" "}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Resources Section */}
      <section className="section">
        <div className="container-page">
          <div className="section-header">
            <h2 className="section-title italic">// Learning Resources</h2>
            <p className="section-desc">
              Selected study guides from university and online platforms.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
