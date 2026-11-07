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
        highlightLines: [11, 12, 13],
        action: "Cache Miss: Key 10 not found in hash map.",
        cacheState: "[Empty]",
        status: "Checking capacity limits.",
      },
      {
        highlightLines: [22, 23, 24],
        action: "Insert Key 10 with Value 55 into front of list.",
        cacheState: "[(10: 55)]",
        status: "Map updated with iterator reference.",
      },
      {
        highlightLines: [11, 15],
        action: "Cache Hit: Access Key 10.",
        cacheState: "[(10: 55)]",
        status: "Splice node to front as most recently used.",
      },
      {
        highlightLines: [26, 27, 28, 29],
        action:
          "Capacity exceeded during insert of Key 20. Evict back element.",
        cacheState: "[(20: 99), (10: 55)]",
        status: "LRU eviction complete.",
      },
    ],
    "database-management-sql": [
      {
        highlightLines: [2, 3, 4, 5],
        action: "Anchor Member Evaluation",
        queryPlan: "Seq Scan on employees where manager_id IS NULL",
        status: "Initialized recursion depth 1 with root management nodes.",
      },
      {
        highlightLines: [9, 10, 11],
        action: "Recursive Member Traversal",
        queryPlan: "Hash Join employees with org_hierarchy on manager_id",
        status: "Fetched direct reports at depth 2.",
      },
      {
        highlightLines: [14, 15],
        action: "Final Aggregation & Ordering",
        queryPlan: "Sort by depth, name",
        status: "Complete hierarchical organizational tree constructed.",
      },
    ],
    "data-analysis-visualization": [
      {
        highlightLines: [5, 6],
        action: "Extract Quartiles",
        computation: "Q1 = 24.5, Q3 = 78.2",
        status: "Computed 25th and 75th percentiles.",
      },
      {
        highlightLines: [7, 9, 10],
        action: "Calculate Bounds",
        computation: "IQR = 53.7 | Upper Bound = 158.7",
        status: "Established outlier rejection thresholds.",
      },
      {
        highlightLines: [12, 13],
        action: "Filter Dataset",
        computation: "Removed 12 outlier rows",
        status: "Cleaned analytical dataframe returned successfully.",
      },
    ],
    "machine-learning-modeling": [
      {
        highlightLines: [6, 7],
        action: "Initialize Weights",
        metrics: "weights = [0.0, 0.0], bias = 0.0",
        status: "Model parameters initialized to zero.",
      },
      {
        highlightLines: [10, 11, 14],
        action: "Compute Gradient & L2 Penalty",
        metrics: "dw = [-0.42, 0.18], db = -0.05",
        status: "Calculated error gradients with weight decay.",
      },
      {
        highlightLines: [16, 17],
        action: "Gradient Descent Update",
        metrics: "New weights = [0.04, -0.01]",
        status: "Weights adjusted along negative gradient step.",
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
            {isRunning ? "Reset Simulation" : "Run Visualizer"}
          </button>
        </div>
      </div>

      <div className="p-4 text-sm overflow-x-auto border-b border-zinc-800/65">
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
              style.backgroundColor = "rgba(59, 130, 246, 0.18)";
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
        <div className="p-6 bg-zinc-950/95">
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
                Execution Completed Successfully
              </span>
            )}
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 font-mono text-xs text-zinc-300 space-y-2">
            {currentStep.action && (
              <div className="text-blue-400 font-semibold">
                Action: {currentStep.action}
              </div>
            )}
            {currentStep.cacheState && (
              <div className="text-zinc-300">
                Cache State: {currentStep.cacheState}
              </div>
            )}
            {currentStep.queryPlan && (
              <div className="text-zinc-300">
                Query Plan: {currentStep.queryPlan}
              </div>
            )}
            {currentStep.computation && (
              <div className="text-amber-400">
                Computation: {currentStep.computation}
              </div>
            )}
            {currentStep.metrics && (
              <div className="text-amber-400">
                Parameters: {currentStep.metrics}
              </div>
            )}
            <div className="text-emerald-400 pt-1 border-t border-zinc-800">
              Status: {currentStep.status}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
