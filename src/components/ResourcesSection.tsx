import { useState, useMemo } from "react";
import { resourcesData, Resource } from "../data/resourcesData";
import {
  Search,
  ExternalLink,
  Play,
  GraduationCap,
  Laptop,
  BookOpen,
  Database,
  BarChart2,
} from "lucide-react";
import {
  SiYoutube,
  SiUdacity,
  SiCodecademy,
  SiKhanacademy,
} from "react-icons/si";

const platformIcons: Record<string, React.ReactNode> = {
  freeCodeCamp: <Laptop className="w-5 h-5 text-emerald-600" />,
  "Alex The Analyst": <SiYoutube className="w-5 h-5 text-red-600" />,
  StatQuest: <SiYoutube className="w-5 h-5 text-red-600" />,
  "3Blue1Brown": <SiYoutube className="w-5 h-5 text-red-600" />,
  "MIT OpenCourseWare": <GraduationCap className="w-5 h-5 text-red-700" />,
  "Harvard University": <GraduationCap className="w-5 h-5 text-red-900" />,
  Codecademy: <SiCodecademy className="w-5 h-5 text-black" />,
  Udacity: <SiUdacity className="w-5 h-5 text-cyan-500" />,
  Simplilearn: <Laptop className="w-5 h-5 text-blue-600" />,
  "Khan Academy": <SiKhanacademy className="w-5 h-5 text-emerald-600" />,
  Tableau: <BarChart2 className="w-5 h-5 text-orange-600" />,
  "UseTheIndexLuke.com": <Database className="w-5 h-5 text-slate-700" />,
  VisuAlgo: <BookOpen className="w-5 h-5 text-indigo-600" />,
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
    <section id="resources" className="py-24 bg-linen/60">
      <div className="container-page">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4 italic">
            // Learning Resources
          </h2>
          <p className="text-charcoal/70 leading-relaxed text-base md:text-lg">
            Selected YouTube videos, university lectures, and interactive
            platforms to learn these topics.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="mb-14 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-charcoal text-cream shadow-sm"
                    : "bg-white border border-borderSoft text-charcoal/70 hover:bg-sand hover:text-charcoal"
                }`}
              >
                {cat}
              </button>
            ))}
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
            return (
              <a
                key={res.id}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-borderSoft rounded-2xl overflow-hidden shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {isYouTube && res.thumbnailUrl ? (
                  <div className="relative aspect-video w-full overflow-hidden bg-charcoal">
                    <img
                      src={res.thumbnailUrl}
                      alt={res.title}
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                      <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-4 h-4 fill-white ml-0.5" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-6 bg-sand/40 border-b border-borderSoft flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white border border-borderSoft flex items-center justify-center shadow-sm">
                        {platformIcons[res.platform] || (
                          <BookOpen className="w-5 h-5 text-charcoal" />
                        )}
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-charcoal/90 block">
                          {res.platform}
                        </span>
                        <span className="text-[11px] text-charcoal/50">
                          {res.category}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {isYouTube && (
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-sand flex items-center justify-center">
                            {platformIcons[res.platform]}
                          </div>
                          <span className="text-xs font-semibold text-charcoal/90">
                            {res.platform}
                          </span>
                        </div>
                        <span className="text-xs text-charcoal/50 font-medium">
                          YouTube
                        </span>
                      </div>
                    )}

                    <span className="inline-block text-xs font-medium text-charcoal/70 bg-sand px-3 py-1 rounded-md mb-3">
                      {res.topic}
                    </span>

                    <h3 className="font-display text-lg font-bold text-charcoal mb-3 group-hover:text-charcoal/90 line-clamp-2 leading-snug">
                      {res.title}
                    </h3>
                    <p className="text-sm text-charcoal/70 leading-relaxed line-clamp-3 mb-6">
                      {res.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-borderSoft flex items-center justify-between text-xs font-medium text-charcoal group-hover:text-black transition-colors">
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
            <p className="text-charcoal/60 text-sm">
              No learning resources match your search criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
