import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Building2 } from "lucide-react";
import { Link } from "wouter";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-xs" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 font-heading font-bold text-2xl text-primary tracking-tight">
              <Building2 className="h-8 w-8" />
              <span>Spotworks</span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#solutions" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Solutions
            </a>
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <Button variant="default" className="rounded-full px-6">
              Book a Demo
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-5">
          <a 
            href="#features" 
            className="text-base font-medium p-2 hover:bg-muted rounded-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#solutions" 
            className="text-base font-medium p-2 hover:bg-muted rounded-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Solutions
          </a>
          <a 
            href="#about" 
            className="text-base font-medium p-2 hover:bg-muted rounded-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <Button className="w-full rounded-full">Book a Demo</Button>
        </div>
      )}
    </nav>
  );
}
