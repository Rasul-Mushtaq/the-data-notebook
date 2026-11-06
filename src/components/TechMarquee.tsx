import { useEffect, useRef } from "react";
import {
  SiPython,
  SiR,
  SiMysql,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiPytorch,
  SiTensorflow,
  SiHuggingface,
  SiOpencv,
  SiFastapi,
  SiStreamlit,
  SiGit,
  SiPostgresql,
  SiDocker,
  SiJupyter,
  SiScipy,
} from "react-icons/si";

const techStack = [
  { id: "python", Component: SiPython, color: "#3776AB" },
  { id: "pandas", Component: SiPandas, color: "#FF686B" },
  { id: "numpy", Component: SiNumpy, color: "#5975A4" },
  { id: "scikitlearn", Component: SiScikitlearn, color: "#3776AB" },
  { id: "pytorch", Component: SiPytorch, color: "#E6582E" },
  { id: "tensorflow", Component: SiTensorflow, color: "#FF6F00" },
  { id: "huggingface", Component: SiHuggingface, color: "#FFD21E" },
  { id: "opencv", Component: SiOpencv, color: "#5C3EE8" },
  { id: "fastapi", Component: SiFastapi, color: "#009688" },
  { id: "streamlit", Component: SiStreamlit, color: "#FF4B4B" },
  { id: "git", Component: SiGit, color: "#F05032" },
  { id: "mysql", Component: SiMysql, color: "#00758F" },
  { id: "r", Component: SiR, color: "#D53226" },
  { id: "postgresql", Component: SiPostgresql, color: "#336791" },
  { id: "docker", Component: SiDocker, color: "#2496ED" },
  { id: "jupyter", Component: SiJupyter, color: "#F9A825" },
  { id: "scipy", Component: SiScipy, color: "#8CAAE6" },
];

export function TechMarquee() {
  const setRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setEl = setRef.current;
    const containerEl = containerRef.current;
    if (!setEl || !containerEl) return;

    let animationFrameId: number;
    let x = 0;
    const speed = 0.8;

    const animate = () => {
      x += speed;
      const setWidth = setEl.offsetWidth;

      if (x >= setWidth) {
        x = 0;
      }

      containerEl.style.transform = `translate3d(-${x}px, 0, 0)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden bg-cream py-4 relative select-none">
      <div
        ref={containerRef}
        className="flex w-max items-center will-change-transform"
      >
        <div ref={setRef} className="flex items-center gap-12 shrink-0 pr-12">
          {techStack.map((item, index) => (
            <div
              key={`set1-${item.id}-${index}`}
              className="flex-shrink-0 flex items-center justify-center w-10 h-10"
            >
              <item.Component size={40} style={{ color: item.color }} />
            </div>
          ))}
        </div>

        <div
          className="flex items-center gap-12 shrink-0 pr-12"
          aria-hidden="true"
        >
          {techStack.map((item, index) => (
            <div
              key={`set2-${item.id}-${index}`}
              className="flex-shrink-0 flex items-center justify-center w-10 h-10"
            >
              <item.Component size={40} style={{ color: item.color }} />
            </div>
          ))}
        </div>

        <div
          className="flex items-center gap-12 shrink-0 pr-12"
          aria-hidden="true"
        >
          {techStack.map((item, index) => (
            <div
              key={`set3-${item.id}-${index}`}
              className="flex-shrink-0 flex items-center justify-center w-10 h-10"
            >
              <item.Component size={40} style={{ color: item.color }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
