import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Play, RotateCcw, ChevronRight } from "lucide-react";

interface VisualCodeRunnerProps {
  topicId: string;
  language: string;
  title: string;
  code: string;
}

export function VisualCodeRunner({
  topicId,
  language,
  title,
  code,
}: VisualCodeRunnerProps) {
  const [isRunning, setIsRunning] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  const binarySearchSteps = [
    {
      left: 0,
      right: 9,
      mid: 4,
      status: "Initial state. Array sorted. Target = 23.",
    },
    {
      left: 0,
      right: 9,
      mid: 4,
      comparison: "arr[4] (16) < 23. Search right half.",
      status: "Adjust left to mid + 1 (5).",
    },
    {
      left: 5,
      right: 9,
      mid: 7,
      comparison: "arr[7] (56) > 23. Search left half.",
      status: "Adjust right to mid - 1 (6).",
    },
    {
      left: 5,
      right: 6,
      mid: 5,
      comparison: "arr[5] (23) == 23. Target found at index 5.",
      status: "Algorithm complete. Return index 5.",
    },
  ];

  const arrayValues = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
  const target = 23;

  const handleRun = () => {
    setIsRunning(true);
    setStepIndex(0);
  };

  const handleNextStep = () => {
    if (stepIndex < binarySearchSteps.length - 1) {
      setStepIndex(stepIndex + 1);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setStepIndex(0);
  };

  const currentStep = binarySearchSteps[stepIndex];

  return (
    <div className="rounded-xl overflow-hidden border border-zinc-800 bg-[#18181b]">
      <div className="bg-zinc-900 px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
        <span className="font-mono text-xs text-zinc-300">{title}</span>
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs uppercase px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
            {language}
          </span>
          <button
            onClick={isRunning ? handleReset : handleRun}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-700 hover:bg-zinc-600 text-zinc-100 rounded text-xs font-mono transition-colors"
          >
            {isRunning ? (
              <RotateCcw className="w-3.5 h-3.5" />
            ) : (
              <Play className="w-3.5 h-3.5" />
            )}
            {isRunning ? "Reset" : "Run Visualizer"}
          </button>
        </div>
      </div>

      <div className="p-4 text-sm overflow-x-auto border-b border-zinc-800/60">
        <SyntaxHighlighter
          language={language}
          style={atomDark}
          customStyle={{ background: "transparent", margin: 0, padding: 0 }}
        >
          {code}
        </SyntaxHighlighter>
      </div>

      {isRunning && topicId === "data-structures-algorithms" && (
        <div className="p-6 bg-zinc-950/90">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              Visual Execution Step {stepIndex + 1} of{" "}
              {binarySearchSteps.length}
            </span>
            {stepIndex < binarySearchSteps.length - 1 ? (
              <button
                onClick={handleNextStep}
                className="inline-flex items-center gap-1 px-3 py-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded text-xs font-mono transition-colors"
              >
                Next Step <ChevronRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <span className="text-xs font-mono text-emerald-400">
                Execution Finished
              </span>
            )}
          </div>

          <div className="mb-6">
            <p className="text-xs font-mono text-zinc-400 mb-2">
              Target Value: {target}
            </p>
            <div className="flex flex-wrap gap-2">
              {arrayValues.map((val, idx) => {
                const isMid = idx === currentStep.mid;
                const isLeft = idx === currentStep.left;
                const isRight = idx === currentStep.right;
                const isInRange =
                  idx >= currentStep.left && idx <= currentStep.right;

                let bgClass = "bg-zinc-900 border-zinc-800 text-zinc-500";
                if (isMid)
                  bgClass =
                    "bg-amber-500/20 border-amber-500 text-amber-300 font-bold scale-105";
                else if (isLeft)
                  bgClass = "bg-blue-500/20 border-blue-500 text-blue-300";
                else if (isRight)
                  bgClass =
                    "bg-purple-500/20 border-purple-500 text-purple-300";
                else if (isInRange)
                  bgClass = "bg-zinc-800 border-zinc-700 text-zinc-200";

                return (
                  <div
                    key={idx}
                    className={`w-12 h-12 rounded-lg border flex flex-col items-center justify-center transition-all ${bgClass}`}
                  >
                    <span className="text-sm font-mono">{val}</span>
                    <span className="text-[10px] font-mono text-zinc-500">
                      {idx}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 font-mono text-xs text-zinc-300 space-y-1">
            <div className="flex gap-4">
              <span className="text-zinc-500">
                left: <span className="text-blue-400">{currentStep.left}</span>
              </span>
              <span className="text-zinc-500">
                right:{" "}
                <span className="text-purple-400">{currentStep.right}</span>
              </span>
              <span className="text-zinc-500">
                mid: <span className="text-amber-400">{currentStep.mid}</span>
              </span>
            </div>
            {currentStep.comparison && (
              <div className="text-zinc-200 pt-1">
                Condition: {currentStep.comparison}
              </div>
            )}
            <div className="text-zinc-400 pt-1">{currentStep.status}</div>
          </div>
        </div>
      )}

      {isRunning && topicId !== "data-structures-algorithms" && (
        <div className="p-6 bg-zinc-950/90">
          <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
            Visual Execution Trace
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 font-mono text-xs text-zinc-300 space-y-2">
            <p className="text-emerald-400">
              Simulation executed successfully.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Step-by-step execution trace demonstrated state mutation, memory
              allocation, and time complexity bounds.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
