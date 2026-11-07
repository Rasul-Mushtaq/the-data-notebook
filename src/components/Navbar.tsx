import { Link, useLocation, useNavigate } from "react-router-dom";
import { SiGithub } from "react-icons/si";

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollTo = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-cream/95 backdrop-blur border-b border-borderSoft/60">
      <div className="container-page flex items-center justify-between px-6 h-14 md:h-16">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="h-7 w-7 object-contain" />
          <span className="font-display text-xl font-bold text-charcoal tracking-tight">
            The Data Notebook
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <a
            href="/#topics"
            onClick={(e) => handleScrollTo(e, "topics")}
            className="text-zinc-500 hover:text-charcoal transition-colors text-sm font-medium cursor-pointer"
          >
            Topics
          </a>
          <a
            href="/#resources"
            onClick={(e) => handleScrollTo(e, "resources")}
            className="text-zinc-500 hover:text-charcoal transition-colors text-sm font-medium cursor-pointer"
          >
            Resources
          </a>
          <a
            href="https://github.com/Rasul-Mushtaq"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-500 hover:text-charcoal transition-colors group"
            aria-label="GitHub"
          >
            <SiGithub className="w-5 h-5 text-zinc-600 group-hover:text-charcoal transition-colors" />
            <span className="text-xs font-mono text-charcoal/70">
              Rasul-Mushtaq
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
