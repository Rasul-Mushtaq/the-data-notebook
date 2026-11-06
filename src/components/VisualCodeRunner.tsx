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
        comparison:
          "Initialize pointers left = 0, right = 9. Loop condition left <= right is true.",
        status: "Compute mid index = 4.",
      },
      {
        left: 5,
        right: 9,
        mid: 7,
        highlightLines: [9, 11, 13, 14],
        comparison: "arr[4] (16) < target (23). Adjust left = mid + 1 (5).",
        status: "Recalculate mid index = 7.",
      },
      {
        left: 5,
        right: 6,
        mid: 5,
        highlightLines: [9, 11, 13, 17],
        comparison: "arr[7] (56) > target (23). Adjust right = mid - 1 (6).",
        status: "Recalculate mid index = 5.",
      },
      {
        left: 5,
        right: 6,
        mid: 5,
        highlightLines: [9, 11, 12],
        comparison: "arr[5] == target (23). Target found at index 5.",
        status: "Algorithm complete. Return index 5.",
      },
    ],
    "database-management-sql": [
      {
        step: 1,
        highlightLines: [1, 2],
        query: "Scanning table daily_sales ordered by date",
        rowsProcessed: 30,
        status: "Partitioning records for rolling window frame.",
      },
      {
        step: 2,
        highlightLines: [3, 4, 5, 6],
        query: "Applying ROWS BETWEEN 6 PRECEDING AND CURRENT ROW",
        rowsProcessed: 30,
        status: "Computing running sum and average for 7-day partitions.",
      },
      {
        step: 3,
        highlightLines: [7, 8],
        query: "Aggregate completed successfully",
        rowsProcessed: 30,
        status: "Outputting rolling_7day_avg column results.",
      },
    ],
    "data-analysis-visualization": [
      {
        step: 1,
        highlightLines: [4, 5],
        operation: "DataFrame.dropna()",
        metrics: "Removed 14 null records from feature column.",
        status: "Cleaned dataset ready for statistical aggregation.",
      },
      {
        step: 2,
        highlightLines: [6, 7, 8, 9, 10],
        operation: "series.quantile([0.25, 0.75])",
        metrics: "Q1 = 42.0, Q3 = 88.0, IQR = 46.0",
        status: "Computed dispersion and interquartile range.",
      },
      {
        step: 3,
        highlightLines: [11],
        operation: "series.skew()",
        metrics: "Skewness coefficient = 0.34",
        status: "Distribution is moderately right-skewed.",
      },
    ],
    "machine-learning-modeling": [
      {
        step: 1,
        highlightLines: [6, 7],
        operation: "train_test_split(test_size=0.2)",
        metrics: "Train samples = 800, Test samples = 200",
        status: "Stratified dataset partitioning complete.",
      },
      {
        step: 2,
        highlightLines: [9, 10, 11, 12],
        operation: "Pipeline setup with StandardScaler and RandomForest",
        metrics: "Mean = 0.0, Standard Deviation = 1.0",
        status: "Normalized feature distributions.",
      },
      {
        step: 3,
        highlightLines: [14, 15],
        operation: "pipeline.fit() and score()",
        metrics: "Accuracy Score = 94.5%",
        status: "Ensemble training converged successfully.",
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

      {isRunning && topicId === "data-structures-algorithms" && (
        <div className="p-6 bg-zinc-950/90">
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
                Execution Finished
              </span>
            )}
          </div>

          <div className="mb-6">
            <p className="text-xs font-mono text-zinc-400 mb-2">
              Target Value: 23
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
            <div className="text-zinc-200 pt-1">
              Condition: {currentStep.comparison}
            </div>
            <div className="text-zinc-400 pt-1">{currentStep.status}</div>
          </div>
        </div>
      )}

      {isRunning && topicId !== "data-structures-algorithms" && (
        <div className="p-6 bg-zinc-950/90">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              Execution Stage {stepIndex + 1} of {steps.length}
            </span>
            {stepIndex < steps.length - 1 ? (
              <button
                onClick={handleNextStep}
                className="inline-flex items-center gap-1 px-3 py-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded text-xs font-mono transition-colors"
              >
                Next Stage <ChevronRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <span className="text-xs font-mono text-emerald-400">
                Execution Complete
              </span>
            )}
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 font-mono text-xs text-zinc-300 space-y-2">
            {currentStep.query && (
              <div className="text-blue-400">
                Query Plan: {currentStep.query}
              </div>
            )}
            {currentStep.operation && (
              <div className="text-blue-400">
                Operation: {currentStep.operation}
              </div>
            )}
            {currentStep.rowsProcessed && (
              <div className="text-zinc-400">
                Records Affected: {currentStep.rowsProcessed}
              </div>
            )}
            {currentStep.metrics && (
              <div className="text-amber-400">
                Metrics: {currentStep.metrics}
              </div>
            )}
            <div className="text-emerald-400 pt-1">
              Status: {currentStep.status}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
