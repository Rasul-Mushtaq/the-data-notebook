import { useEffect, useRef } from "react";
import {
  SiPython,
  SiR,
  SiMysql,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiPytorch,
  SiPostgresql,
  SiDocker,
  SiJupyter,
} from "react-icons/si";

const techStack = [
  { id: "python", Component: SiPython, color: "#3776AB" },
  { id: "pandas", Component: SiPandas, color: "#FF686B" },
  { id: "numpy", Component: SiNumpy, color: "#5975A4" },
  { id: "scikitlearn", Component: SiScikitlearn, color: "#3776AB" },
  { id: "pytorch", Component: SiPytorch, color: "#E6582E" },
  { id: "mysql", Component: SiMysql, color: "#00758F" },
  { id: "r", Component: SiR, color: "#D53226" },
  { id: "postgresql", Component: SiPostgresql, color: "#336791" },
  { id: "docker", Component: SiDocker, color: "#2496ED" },
  { id: "jupyter", Component: SiJupyter, color: "#F9A825" },
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
    const speed = 0.8; // Smooth scrolling speed

    const animate = () => {
      x += speed;
      // Measures the exact pixel width of one full icon set
      const setWidth = setEl.offsetWidth;

      if (x >= setWidth) {
        x = 0; // Seamless instant reset when the first set has scrolled past
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
        {/* Set 1 (Measured for exact width reset boundary) */}
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

        {/* Set 2 (Continuous visual flow) */}
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

        {/* Set 3 (Extra buffer set to completely fill wide monitors) */}
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
