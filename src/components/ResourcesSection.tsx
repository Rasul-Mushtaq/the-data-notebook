import { useState, useMemo } from "react";
import { resourcesData, Resource } from "../data/resourcesData";
import {
  Search,
  ExternalLink,
  GraduationCap,
  Laptop,
  BookOpen,
} from "lucide-react";
import { FaYoutube } from "react-icons/fa";

const categoryIcons: Record<string, React.ReactNode> = {
  YouTube: <FaYoutube className="w-4 h-4 text-red-500" />,
  "University Course": <GraduationCap className="w-4 h-4 text-amber-500" />,
  "Online Course": <Laptop className="w-4 h-4 text-blue-500" />,
  "Interactive Platform": <BookOpen className="w-4 h-4 text-emerald-500" />,
};

export function ResourcesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "YouTube",
    "University Course",
    "Online Course",
    "Interactive Platform",
  ];

  const filteredResources = useMemo(() => {
    return resourcesData.filter((res) => {
      const matchesCategory =
        selectedCategory === "All" || res.category === selectedCategory;
      const matchesSearch =
        res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        res.platform.toLowerCase().includes(searchQuery.toLowerCase()) ||
        res.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        res.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="resources"
      className="section bg-linen/50 border-t border-borderSoft/60 py-20"
    >
      <div className="container-page">
        <div className="section-header">
          <h2 className="section-title italic">// Learning Resources</h2>
          <p className="section-desc">
            Selected YouTube courses, university lectures, online guides, and
            interactive platforms.
          </p>
        </div>

        {/* Search and Category Filters */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-mono transition-colors ${
                  selectedCategory === cat
                    ? "bg-charcoal text-cream shadow-sm"
                    : "bg-white border border-borderSoft text-charcoal/70 hover:bg-sand"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/40" />
            <input
              type="text"
              placeholder="Search resources, topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-borderSoft rounded-lg text-sm text-charcoal placeholder-charcoal/40 focus:outline-none focus:border-charcoal transition-colors"
            />
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((res: Resource) => (
            <a
              key={res.id}
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-borderSoft rounded-xl overflow-hidden shadow-soft hover:shadow-card hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              {/* Thumbnail / Header Area */}
              {res.thumbnailUrl ? (
                <div className="relative aspect-video w-full overflow-hidden bg-sand">
                  <img
                    src={res.thumbnailUrl}
                    alt={res.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-charcoal/80 backdrop-blur px-2.5 py-1 rounded text-[10px] font-mono text-cream flex items-center gap-1.5">
                    {categoryIcons[res.category]} {res.category}
                  </div>
                </div>
              ) : (
                <div className="p-6 bg-sand border-b border-borderSoft flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-charcoal/60">
                    {res.topic}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded bg-white border border-borderSoft text-charcoal">
                    {categoryIcons[res.category]} {res.category}
                  </div>
                </div>
              )}

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-semibold text-charcoal/60">
                      {res.platform}
                    </span>
                    <span className="text-[11px] font-mono text-charcoal/50">
                      {res.durationOrLevel}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-charcoal mb-2 group-hover:text-charcoal/80 line-clamp-2">
                    {res.title}
                  </h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed line-clamp-3 mb-4">
                    {res.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-borderSoft/60 flex items-center justify-between text-xs font-mono text-charcoal/60 group-hover:text-charcoal transition-colors">
                  <span>Explore resource</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-16">
            <p className="text-charcoal/60 font-mono text-sm">
              No learning resources match your search criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
