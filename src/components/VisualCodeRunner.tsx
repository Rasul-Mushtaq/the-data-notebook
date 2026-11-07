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

  const stepsMap: Record<string, any[]> = {
    "data-structures-algorithms": [
      {
        left: 0,
        right: 9,
        mid: 4,
        highlightLines: [5, 6, 8],
        comparison: "left = 0, right = 9. Range valid.",
        status: "Mid element is arr[4] (16).",
      },
      {
        left: 5,
        right: 9,
        mid: 7,
        highlightLines: [9, 11, 13, 14],
        comparison: "16 < target 23. Move left pointer to 5.",
        status: "Mid element is arr[7] (56).",
      },
      {
        left: 5,
        right: 6,
        mid: 5,
        highlightLines: [9, 11, 13, 17],
        comparison: "56 > target 23. Move right pointer to 6.",
        status: "Mid element is arr[5] (23).",
      },
      {
        left: 5,
        right: 6,
        mid: 5,
        highlightLines: [9, 11, 12],
        comparison: "arr[5] == 23. Match identified!",
        status: "Algorithm returns index 5.",
      },
    ],
    "database-management-sql": [
      {
        step: 1,
        highlightLines: [1, 2],
        activeWindow: [0, 1, 2],
        query: "Partitioning stream: Evaluating window frame (Row 1-3)",
        status: "Accumulating rolling sum for initial window buffer.",
      },
      {
        step: 2,
        highlightLines: [3, 4, 5, 6],
        activeWindow: [3, 4, 5, 6, 7, 8, 9],
        query: "Applying 7-Day Window Partitioning",
        status: "Calculating AVG(revenue) OVER 7 preceding rows.",
      },
      {
        step: 3,
        highlightLines: [7, 8],
        activeWindow: [10, 11, 12, 13],
        query: "Finalizing Window Sort Order",
        status: "Emitting rolling average dataset output stream.",
      },
    ],
    "data-analysis-visualization": [
      {
        step: 1,
        highlightLines: [4, 5],
        filter: "dropna()",
        result: "Dropped null entries",
        status: "Series clean. Length: 120 elements.",
      },
      {
        step: 2,
        highlightLines: [6, 7, 8, 9, 10],
        filter: "Quantiles",
        result: "Q1: 42.0 | Q3: 88.0",
        status: "Computed IQR: 46.0.",
      },
      {
        step: 3,
        highlightLines: [11],
        filter: "Skew",
        result: "Skewness: +0.34",
        status: "Distribution confirmed moderately right-skewed.",
      },
    ],
    "machine-learning-modeling": [
      {
        step: 1,
        highlightLines: [6, 7],
        state: "Train/Test Split",
        metric: "80% Train (800) | 20% Test (200)",
        status: "Random seed locked to 42.",
      },
      {
        step: 2,
        highlightLines: [9, 10, 11, 12],
        state: "StandardScaler Fit",
        metric: "μ = 0.0, σ = 1.0",
        status: "Normalizing continuous feature vectors.",
      },
      {
        step: 3,
        highlightLines: [14, 15],
        state: "RandomForest Fit",
        metric: "Validation Accuracy: 94.5%",
        status: "100 Decision Trees converged.",
      },
    ],
  };

  const steps = stepsMap[topicId] || [];

  const handleRun = () => {
    setIsRunning(true);
    setStepIndex(0);
  };

  const handleNextStep = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setStepIndex(0);
  };

  const currentStep = steps[stepIndex] || {};
  const activeLines = currentStep.highlightLines || [];
  const arrayValues = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];

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
          showLineNumbers
          wrapLines
          lineProps={(lineNumber) => {
            const style: React.CSSProperties = {
              display: "block",
              width: "100%",
            };
            if (isRunning && activeLines.includes(lineNumber)) {
              style.backgroundColor = "rgba(59, 130, 246, 0.15)";
              style.borderLeft = "3px solid #3b82f6";
              style.paddingLeft = "8px";
            }
            return { style };
          }}
          customStyle={{ background: "transparent", margin: 0, padding: 0 }}
        >
          {code}
        </SyntaxHighlighter>
      </div>

      {isRunning && (
        <div className="p-6 bg-zinc-950/90 border-t border-zinc-800">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              Visual Execution Step {stepIndex + 1} of {steps.length}
            </span>
            {stepIndex < steps.length - 1 ? (
              <button
                onClick={handleNextStep}
                className="inline-flex items-center gap-1 px-3 py-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded text-xs font-mono transition-colors"
              >
                Next Step <ChevronRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <span className="text-xs font-mono text-emerald-400">
                Execution Completed
              </span>
            )}
          </div>

          {topicId === "data-structures-algorithms" && (
            <div className="space-y-4">
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
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 font-mono text-xs text-zinc-300 space-y-1">
                <div className="flex gap-4">
                  <span className="text-zinc-500">
                    left:{" "}
                    <span className="text-blue-400">{currentStep.left}</span>
                  </span>
                  <span className="text-zinc-500">
                    right:{" "}
                    <span className="text-purple-400">{currentStep.right}</span>
                  </span>
                  <span className="text-zinc-500">
                    mid:{" "}
                    <span className="text-amber-400">{currentStep.mid}</span>
                  </span>
                </div>
                <div className="text-zinc-200 pt-1">
                  Condition: {currentStep.comparison}
                </div>
                <div className="text-zinc-400">{currentStep.status}</div>
              </div>
            </div>
          )}

          {topicId !== "data-structures-algorithms" && (
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 font-mono text-xs text-zinc-300 space-y-2">
              {currentStep.query && (
                <div className="text-blue-400">
                  Execution Plan: {currentStep.query}
                </div>
              )}
              {currentStep.filter && (
                <div className="text-blue-400">
                  Transform: {currentStep.filter}
                </div>
              )}
              {currentStep.state && (
                <div className="text-blue-400">
                  Pipeline Stage: {currentStep.state}
                </div>
              )}
              {currentStep.result && (
                <div className="text-amber-400">
                  Result: {currentStep.result}
                </div>
              )}
              {currentStep.metric && (
                <div className="text-amber-400">
                  Evaluation: {currentStep.metric}
                </div>
              )}
              <div className="text-emerald-400 pt-1">
                Status: {currentStep.status}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
