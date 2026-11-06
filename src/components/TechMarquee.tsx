import { useEffect, useRef, useState } from "react";
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
  { id: "python", name: "Python", Component: SiPython, color: "#3776AB" },
  { id: "pandas", name: "Pandas", Component: SiPandas, color: "#FF686B" },
  { id: "numpy", name: "NumPy", Component: SiNumpy, color: "#5975A4" },
  {
    id: "scikitlearn",
    name: "Scikit-Learn",
    Component: SiScikitlearn,
    color: "#3776AB",
  },
  { id: "pytorch", name: "PyTorch", Component: SiPytorch, color: "#E6582E" },
  {
    id: "tensorflow",
    name: "TensorFlow",
    Component: SiTensorflow,
    color: "#FF6F00",
  },
  {
    id: "huggingface",
    name: "Hugging Face",
    Component: SiHuggingface,
    color: "#FFD21E",
  },
  { id: "opencv", name: "OpenCV", Component: SiOpencv, color: "#5C3EE8" },
  { id: "fastapi", name: "FastAPI", Component: SiFastapi, color: "#009688" },
  {
    id: "streamlit",
    name: "Streamlit",
    Component: SiStreamlit,
    color: "#FF4B4B",
  },
  { id: "git", name: "Git", Component: SiGit, color: "#F05032" },
  { id: "mysql", name: "MySQL", Component: SiMysql, color: "#00758F" },
  { id: "r", name: "R Language", Component: SiR, color: "#D53226" },
  {
    id: "postgresql",
    name: "PostgreSQL",
    Component: SiPostgresql,
    color: "#336791",
  },
  { id: "docker", name: "Docker", Component: SiDocker, color: "#2496ED" },
  { id: "jupyter", name: "Jupyter", Component: SiJupyter, color: "#F9A825" },
  { id: "scipy", name: "SciPy", Component: SiScipy, color: "#8CAAE6" },
];

export function TechMarquee() {
  const setRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredTechId, setHoveredTechId] = useState<string | null>(null);
  const lastMousePos = useRef<{ x: number; y: number } | null>(null);

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

      // Dynamically re-evaluate item under cursor even when mouse is stationary
      if (lastMousePos.current) {
        const el = document.elementFromPoint(
          lastMousePos.current.x,
          lastMousePos.current.y,
        );
        const techEl = el?.closest("[data-tech-id]");
        if (techEl) {
          setHoveredTechId(techEl.getAttribute("data-tech-id"));
        } else {
          setHoveredTechId(null);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    lastMousePos.current = { x: e.clientX, y: e.clientY };
    const el = document.elementFromPoint(e.clientX, e.clientY);
    const techEl = el?.closest("[data-tech-id]");
    if (techEl) {
      setHoveredTechId(techEl.getAttribute("data-tech-id"));
    } else {
      setHoveredTechId(null);
    }
  };

  const handleMouseLeave = () => {
    lastMousePos.current = null;
    setHoveredTechId(null);
  };

  return (
    <div
      className="w-full overflow-hidden bg-cream py-12 relative select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={containerRef}
        className="flex w-max items-center will-change-transform"
      >
        <div ref={setRef} className="flex items-center gap-12 shrink-0 pr-12">
          {techStack.map((item, index) => {
            const uniqueId = `${item.id}-set1-${index}`;
            const isHovered = hoveredTechId === uniqueId;
            return (
              <div
                key={uniqueId}
                data-tech-id={uniqueId}
                className="relative flex-shrink-0 flex items-center justify-center w-10 h-10 cursor-pointer"
              >
                {isHovered && (
                  <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 flex flex-col items-center z-50 pointer-events-none">
                    <div className="w-2 h-2 bg-charcoal rotate-45 -mb-1"></div>
                    <span className="px-2.5 py-1 bg-charcoal text-cream text-[11px] font-mono rounded-md shadow-lg whitespace-nowrap">
                      {item.name}
                    </span>
                  </div>
                )}
                <div
                  className={`transition-transform duration-300 ${
                    isHovered ? "scale-125 -translate-y-1" : ""
                  }`}
                >
                  <item.Component size={40} style={{ color: item.color }} />
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="flex items-center gap-12 shrink-0 pr-12"
          aria-hidden="true"
        >
          {techStack.map((item, index) => {
            const uniqueId = `${item.id}-set2-${index}`;
            const isHovered = hoveredTechId === uniqueId;
            return (
              <div
                key={uniqueId}
                data-tech-id={uniqueId}
                className="relative flex-shrink-0 flex items-center justify-center w-10 h-10 cursor-pointer"
              >
                {isHovered && (
                  <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 flex flex-col items-center z-50 pointer-events-none">
                    <div className="w-2 h-2 bg-charcoal rotate-45 -mb-1"></div>
                    <span className="px-2.5 py-1 bg-charcoal text-cream text-[11px] font-mono rounded-md shadow-lg whitespace-nowrap">
                      {item.name}
                    </span>
                  </div>
                )}
                <div
                  className={`transition-transform duration-300 ${
                    isHovered ? "scale-125 -translate-y-1" : ""
                  }`}
                >
                  <item.Component size={40} style={{ color: item.color }} />
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="flex items-center gap-12 shrink-0 pr-12"
          aria-hidden="true"
        >
          {techStack.map((item, index) => {
            const uniqueId = `${item.id}-set3-${index}`;
            const isHovered = hoveredTechId === uniqueId;
            return (
              <div
                key={uniqueId}
                data-tech-id={uniqueId}
                className="relative flex-shrink-0 flex items-center justify-center w-10 h-10 cursor-pointer"
              >
                {isHovered && (
                  <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 flex flex-col items-center z-50 pointer-events-none">
                    <div className="w-2 h-2 bg-charcoal rotate-45 -mb-1"></div>
                    <span className="px-2.5 py-1 bg-charcoal text-cream text-[11px] font-mono rounded-md shadow-lg whitespace-nowrap">
                      {item.name}
                    </span>
                  </div>
                )}
                <div
                  className={`transition-transform duration-300 ${
                    isHovered ? "scale-125 -translate-y-1" : ""
                  }`}
                >
                  <item.Component size={40} style={{ color: item.color }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
