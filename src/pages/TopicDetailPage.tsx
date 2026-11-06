import { useParams, Link } from "react-router-dom";
import { topicsData } from "../data/topicsData";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  BookOpen,
  Layers,
  Cpu,
  PlayCircle,
} from "lucide-react";
import { BlockMath } from "react-katex";
import { VisualCodeRunner } from "../components/VisualCodeRunner";

export function TopicDetailPage() {
  const { topicId } = useParams<{ topicId: string }>();
  const currentIndex = topicsData.findIndex((t) => t.id === topicId);
  const topic = topicsData[currentIndex];

  if (!topic) {
    return (
      <div className="min-h-screen bg-[#121212] text-zinc-100 flex flex-col items-center justify-center p-6">
        <h1 className="font-display text-3xl font-bold mb-4">
          Topic Not Found
        </h1>
        <p className="text-zinc-400 mb-6">
          The topic you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 rounded-lg transition-colors text-sm font-mono"
        >
          <ArrowLeft className="w-4 h-4" /> Return Home
        </Link>
      </div>
    );
  }

  // Calculate the next topic in rotation
  const nextTopic = topicsData[(currentIndex + 1) % topicsData.length];

  return (
    <div className="min-h-screen bg-[#121212] text-zinc-100 selection:bg-zinc-700 selection:text-zinc-100">
      <header className="sticky top-0 z-40 bg-[#121212]/90 backdrop-blur border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors text-sm font-mono"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Notebook
          </Link>
          <Link
            to={`/topics/${nextTopic.id}`}
            className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors text-sm font-mono"
          >
            Move to {nextTopic.title} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12 border-b border-zinc-800 pb-10">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mb-4 tracking-tight flex items-center gap-3">
            <Cpu className="w-8 h-8 text-zinc-400 flex-shrink-0" />{" "}
            {topic.title}
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed font-sans">
            {topic.summary}
          </p>
        </div>

        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-zinc-100 mb-4 flex items-center gap-2">
            <Layers className="w-5 h-5 text-zinc-400" /> Overview and Key
            Breakdown
          </h2>
          <p className="text-zinc-300 leading-relaxed mb-6">
            {topic.description}
          </p>
          <div className="grid gap-3 bg-zinc-900/60 border border-zinc-800 rounded-xl p-6">
            {topic.breakdown.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-zinc-800 text-zinc-300 flex items-center justify-center text-xs font-mono">
                  {idx + 1}
                </span>
                <span className="text-zinc-200 text-sm md:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-zinc-100 mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-zinc-400" /> Mathematical
            Foundation
          </h2>
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-8">
            <h3 className="font-mono text-sm text-zinc-400 mb-4">
              {topic.formula.title}
            </h3>
            <div className="bg-[#18181b] p-6 rounded-lg border border-zinc-800/80 text-center overflow-x-auto mb-4 text-zinc-100">
              <BlockMath math={topic.formula.latex} />
            </div>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
              {topic.formula.explanation}
            </p>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-zinc-100 mb-4 flex items-center gap-2">
            <PlayCircle className="w-5 h-5 text-zinc-400" /> Interactive Visual
            Execution
          </h2>
          <VisualCodeRunner
            topicId={topic.id}
            language={topic.code.language}
            title={topic.code.title}
            code={topic.code.code}
          />
        </section>

        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-zinc-100 mb-4">
            Real-World Applications
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {topic.realWorldApps.map((app, idx) => (
              <div
                key={idx}
                className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-xl"
              >
                <span className="font-mono text-xs text-zinc-500 block mb-2">
                  Use Case 0{idx + 1}
                </span>
                <p className="text-zinc-200 text-sm leading-relaxed">{app}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-zinc-800 pt-10">
          <h2 className="font-display text-xl font-bold text-zinc-100 mb-4">
            Selected Learning References
          </h2>
          <div className="flex flex-wrap gap-4">
            {topic.links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-zinc-100 transition-colors text-sm font-mono"
              >
                {link.label}{" "}
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
