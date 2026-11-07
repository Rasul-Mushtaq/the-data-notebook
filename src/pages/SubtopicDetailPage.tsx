import { useParams, Link } from "react-router-dom";
import { topicsData } from "../data/topicsData";
import {
  ArrowLeft,
  BookOpen,
  Code2,
  Layers,
  Cpu,
  CheckCircle2,
} from "lucide-react";
import { BlockMath } from "react-katex";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function SubtopicDetailPage() {
  const { topicId, subtopicId } = useParams<{
    topicId: string;
    subtopicId: string;
  }>();
  const parentTopic = topicsData.find((t) => t.id === topicId);
  const subtopic = parentTopic?.subtopics?.[subtopicId || ""];

  if (!parentTopic || !subtopic) {
    return (
      <div className="min-h-screen bg-[#121212] text-zinc-100 flex flex-col items-center justify-center p-6">
        <h1 className="font-display text-3xl font-bold mb-4">
          Concept Deep-Dive Not Found
        </h1>
        <p className="text-zinc-400 mb-6">
          The concept module you are looking for does not exist or is currently
          being authored.
        </p>
        <Link
          to={parentTopic ? `/topics/${parentTopic.id}` : "/"}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 rounded-lg transition-colors text-sm font-mono"
        >
          <ArrowLeft className="w-4 h-4" />{" "}
          {parentTopic ? `Back to ${parentTopic.title}` : "Return Home"}
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121212] text-zinc-100 selection:bg-zinc-700 selection:text-zinc-100">
      <header className="sticky top-0 z-40 bg-[#121212]/90 backdrop-blur border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to={`/topics/${parentTopic.id}`}
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors text-sm font-mono"
          >
            <ArrowLeft className="w-4 h-4" /> Back to {parentTopic.title}
          </Link>
          <span className="text-xs font-mono px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-300">
            {subtopic.level} Level
          </span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12 border-b border-zinc-800 pb-10">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-3">
            <Cpu className="w-4 h-4 text-zinc-400" />
            <span>{parentTopic.title}</span>
            <span>/</span>
            <span className="text-zinc-200">{subtopic.title}</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mb-4 tracking-tight">
            {subtopic.title}
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed font-sans">
            {subtopic.summary}
          </p>
        </div>

        {/* Detailed Conceptual Explanation */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-zinc-100 mb-4 flex items-center gap-2">
            <Layers className="w-5 h-5 text-zinc-400" /> Detailed Mechanics
            &amp; Concepts
          </h2>
          <p className="text-zinc-300 leading-relaxed mb-6 text-base md:text-lg">
            {subtopic.explanation}
          </p>

          <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6">
            <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-4">
              Core Principles:
            </h3>
            <div className="space-y-3">
              {subtopic.keyTakeaways.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-200 text-sm md:text-base leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Math Formula if Present */}
        {subtopic.formula && (
          <section className="mb-14">
            <h2 className="font-display text-2xl font-bold text-zinc-100 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-zinc-400" /> Mathematical
              Formulation
            </h2>
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-8">
              <h3 className="font-mono text-sm text-zinc-400 mb-4">
                {subtopic.formula.title}
              </h3>
              <div className="bg-[#18181b] p-6 rounded-lg border border-zinc-800/80 text-center overflow-x-auto mb-4 text-zinc-100">
                <BlockMath math={subtopic.formula.latex} />
              </div>
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                {subtopic.formula.explanation}
              </p>
            </div>
          </section>
        )}

        {/* Code Snippet if Present */}
        {subtopic.code && (
          <section className="mb-14">
            <h2 className="font-display text-2xl font-bold text-zinc-100 mb-4 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-zinc-400" /> Practical Code
              Implementation
            </h2>
            <div className="rounded-xl overflow-hidden border border-zinc-800 bg-[#18181b]">
              <div className="bg-zinc-900 px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-300">
                  {subtopic.code.title}
                </span>
                <span className="font-mono text-xs uppercase px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                  {subtopic.code.language}
                </span>
              </div>
              <div className="p-4 text-sm overflow-x-auto">
                <SyntaxHighlighter
                  language={subtopic.code.language}
                  style={atomDark}
                  showLineNumbers
                  customStyle={{
                    background: "transparent",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  {subtopic.code.code}
                </SyntaxHighlighter>
              </div>
            </div>
          </section>
        )}

        {/* Real-World Use Cases */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-zinc-100 mb-4">
            Real-World Engineering Use Cases
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {subtopic.realWorldApps.map((app, idx) => (
              <div
                key={idx}
                className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-xl"
              >
                <span className="font-mono text-xs text-zinc-500 block mb-2">
                  Production Application 0{idx + 1}
                </span>
                <p className="text-zinc-200 text-sm leading-relaxed">{app}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
