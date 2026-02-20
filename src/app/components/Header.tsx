import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4",
        isScrolled ? "bg-slate-950/90 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-serif font-bold text-white tracking-wide"
          onClick={() => scrollToSection("home")}
        >
          Squaretron<span className="text-yellow-500">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "About Us"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
              className="text-slate-300 hover:text-yellow-500 transition-colors text-sm uppercase tracking-widest font-medium"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-2 bg-yellow-600 hover:bg-yellow-500 text-slate-950 font-semibold rounded-sm transition-all transform hover:scale-105"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-slate-950 border-t border-slate-800 p-6 md:hidden flex flex-col gap-6 items-center shadow-xl animate-in slide-in-from-top-5 duration-200">
          {["Home", "About Us"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
              className="text-slate-300 hover:text-yellow-500 text-lg uppercase tracking-widest font-medium"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 bg-yellow-600 hover:bg-yellow-500 text-slate-950 font-bold w-full max-w-xs rounded-sm"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
}
