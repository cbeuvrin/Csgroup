"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, XCircle } from "lucide-react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/Hide logic
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled 
          ? "bg-black/40 backdrop-blur-xl shadow-2xl py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logocleaning.png" alt="Cleaning Solutions Group" width={300} height={112} className="h-16 md:h-24 lg:h-28 w-auto object-contain" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link href="#home" className="hover:text-primary transition-colors text-white">Inicio</Link>
          <Link href="#services" className="hover:text-primary transition-colors text-white">Servicios</Link>
          <Link href="#about" className="hover:text-primary transition-colors text-white">Nosotros</Link>
          <Link href="#contact" className="btn-primary !py-2 !px-6">Cotizar Ahora</Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <XCircle size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <Link href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link href="#contact" className="btn-primary text-center" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
        </div>
      )}
    </nav>
  );
}
