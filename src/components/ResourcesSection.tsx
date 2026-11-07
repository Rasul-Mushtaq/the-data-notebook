import { useState, useMemo } from "react";
import { resourcesData, Resource } from "../data/resourcesData";
import {
  Search,
  ExternalLink,
  Play,
  BookOpen,
  Database,
  GraduationCap,
  BarChart,
} from "lucide-react";
import {
  SiYoutube,
  SiGithub,
  SiUdacity,
  SiCodecademy,
  SiKhanacademy,
  SiW3Schools,
  SiKaggle,
} from "react-icons/si";

const platformIcons: Record<string, React.ReactNode> = {
  freeCodeCamp: <SiYoutube className="w-6 h-6 text-emerald-600" />,
  "Alex The Analyst": <SiYoutube className="w-6 h-6 text-red-600" />,
  StatQuest: <SiYoutube className="w-6 h-6 text-red-600" />,
  "3Blue1Brown": <SiYoutube className="w-6 h-6 text-cyan-600" />,
  "DataTalks.Club": <SiGithub className="w-6 h-6 text-charcoal" />,
  "GitHub Community": <SiGithub className="w-6 h-6 text-charcoal" />,
  "MIT OpenCourseWare": <GraduationCap className="w-6 h-6 text-red-700" />,
  "Harvard University": <GraduationCap className="w-6 h-6 text-red-900" />,
  W3Schools: <SiW3Schools className="w-6 h-6 text-emerald-600" />,
  Kaggle: <SiKaggle className="w-6 h-6 text-sky-500" />,
  Codecademy: <SiCodecademy className="w-6 h-6 text-slate-900" />,
  Udacity: <SiUdacity className="w-6 h-6 text-cyan-500" />,
  "Khan Academy": <SiKhanacademy className="w-6 h-6 text-emerald-600" />,
  Tableau: <BarChart className="w-6 h-6 text-orange-500" />,
  "UseTheIndexLuke.com": <Database className="w-6 h-6 text-slate-700" />,
  VisuAlgo: <BookOpen className="w-6 h-6 text-indigo-600" />,
};

const categoryStyles: Record<
  string,
  { accentBar: string; activePill: string; pillBorder: string }
> = {
  All: {
    accentBar: "bg-charcoal",
    activePill: "bg-charcoal text-cream shadow-md",
    pillBorder: "hover:border-charcoal",
  },
  YouTube: {
    accentBar: "bg-red-500",
    activePill: "bg-red-600 text-white shadow-md shadow-red-500/20",
    pillBorder: "hover:border-red-400 hover:text-red-600",
  },
  "GitHub Repository": {
    accentBar: "bg-zinc-800",
    activePill: "bg-zinc-900 text-white shadow-md shadow-zinc-900/20",
    pillBorder: "hover:border-zinc-700 hover:text-zinc-900",
  },
  "University Course": {
    accentBar: "bg-amber-600",
    activePill: "bg-amber-600 text-white shadow-md shadow-amber-600/20",
    pillBorder: "hover:border-amber-500 hover:text-amber-700",
  },
  "Online Course": {
    accentBar: "bg-blue-600",
    activePill: "bg-blue-600 text-white shadow-md shadow-blue-600/20",
    pillBorder: "hover:border-blue-500 hover:text-blue-700",
  },
  "Interactive Platform": {
    accentBar: "bg-emerald-600",
    activePill: "bg-emerald-600 text-white shadow-md shadow-emerald-600/20",
    pillBorder: "hover:border-emerald-500 hover:text-emerald-700",
  },
};

export function ResourcesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "YouTube",
    "GitHub Repository",
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
    <section id="resources" className="py-24 bg-linen/60">
      <div className="container-page">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4 italic">
            // Learning Resources
          </h2>
          <p className="text-charcoal/70 leading-relaxed text-base md:text-lg">
            Selected YouTube videos, university courses, GitHub repositories,
            and interactive platforms.
          </p>
        </div>

        {/* Search & Category Filter Pills */}
        <div className="mb-14 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const style = categoryStyles[cat] || categoryStyles["All"];
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 border border-borderSoft ${
                    isSelected
                      ? style.activePill
                      : `bg-white text-charcoal/70 hover:bg-sand ${style.pillBorder}`
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="relative w-full lg:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/40" />
            <input
              type="text"
              placeholder="Search resources, topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-borderSoft rounded-xl text-sm text-charcoal placeholder-charcoal/40 focus:outline-none focus:border-charcoal transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((res: Resource) => {
            const isYouTube = res.category === "YouTube";
            const catStyle =
              categoryStyles[res.category] || categoryStyles["All"];
            return (
              <a
                key={res.id}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white border border-borderSoft rounded-2xl overflow-hidden shadow-soft hover:shadow-card hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Category Color Accent Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 ${catStyle.accentBar} z-20`}
                />

                {res.imageUrl ? (
                  <div className="relative aspect-video w-full overflow-hidden bg-sand border-b border-borderSoft">
                    <img
                      src={res.imageUrl}
                      alt={res.platform}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {isYouTube && (
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 fill-white ml-0.5" />
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  /* Architectural Grid Header with High-Contrast Solid White Badge */
                  <div
                    className="relative aspect-video w-full p-6 flex flex-col items-center justify-center overflow-hidden border-b border-borderSoft transition-transform duration-500"
                    style={{ backgroundColor: res.brandTheme.bg }}
                  >
                    {/* Restored Subtle Geometric Grid Pattern */}
                    <div
                      className="absolute inset-0 opacity-15 pointer-events-none"
                      style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
                        backgroundSize: "20px 20px",
                      }}
                    />

                    {/* Restored Subtle Ambient Radial Glow */}
                    <div
                      className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full opacity-25 blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700"
                      style={{ backgroundColor: res.brandTheme.accent }}
                    />

                    {/* Solid White High-Contrast Badge Container */}
                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-white shadow-lg ring-1 ring-black/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {platformIcons[res.platform] || (
                        <BookOpen className="w-7 h-7 text-charcoal" />
                      )}
                    </div>
                  </div>
                )}

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-7 h-7 rounded-lg bg-white border border-borderSoft shadow-sm flex items-center justify-center">
                        {platformIcons[res.platform] || (
                          <BookOpen className="w-4 h-4 text-charcoal" />
                        )}
                      </div>
                      <span className="text-xs font-mono font-semibold text-charcoal/90">
                        {res.platform}
                      </span>
                    </div>

                    <span className="inline-block text-xs font-mono font-medium text-charcoal/70 bg-sand px-3 py-1 rounded-md mb-3">
                      {res.topic}
                    </span>

                    <h3 className="font-display text-lg font-bold text-charcoal mb-3 group-hover:text-charcoal/90 line-clamp-2 leading-snug">
                      {res.title}
                    </h3>
                    <p className="text-sm text-charcoal/70 leading-relaxed line-clamp-3 mb-6">
                      {res.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-borderSoft flex items-center justify-between text-xs font-mono font-medium text-charcoal group-hover:text-black transition-colors">
                    <span className="underline underline-offset-4">
                      Access resource
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-borderSoft mt-8">
            <p className="text-charcoal/60 text-sm font-mono">
              No learning resources match your search criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
