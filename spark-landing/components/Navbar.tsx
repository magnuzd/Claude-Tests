"use client";

import { useState } from "react";
import SparkLogo from "./SparkLogo";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-5 md:px-14">
      {/* Logo */}
      <a href="#" className="flex items-center gap-2 text-white">
        <SparkLogo />
        <span className="text-lg font-semibold tracking-wide">Spark</span>
      </a>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8 text-sm text-white font-medium">
        <a href="#services" className="hover:opacity-80 transition-opacity">
          Services
        </a>
        <a href="#why-spark" className="hover:opacity-80 transition-opacity">
          Why Spark?
        </a>
        <a
          href="#contact"
          className="border border-white px-5 py-1.5 rounded hover:bg-white hover:text-[#2B45E8] transition-colors"
        >
          Contact us
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#1a1060] flex flex-col gap-4 px-8 py-6 text-white text-sm font-medium md:hidden">
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#why-spark" onClick={() => setMenuOpen(false)}>Why Spark?</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="border border-white px-4 py-1.5 rounded w-fit">
            Contact us
          </a>
        </div>
      )}
    </nav>
  );
}
