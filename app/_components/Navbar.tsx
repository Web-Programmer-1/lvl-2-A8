"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X, BarChart3 } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Your editable route list
  const navLinks = [
    { name: "Features", href: "/#features" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Why Us", href: "/#why-us" },
    { name: "About", href: "/about" },
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* LOGO */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-green-800 p-2 rounded-lg">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-green-800">
              MCQ Analysis BD
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-gray-700 hover:text-green-800 transition"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/get-started"
              className="bg-green-800 text-white px-6 py-2 rounded-lg hover:bg-green-900 transition transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 bg-white border-t">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-green-800 transition px-4"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/get-started"
              onClick={() => setMobileMenuOpen(false)}
              className="block bg-green-800 text-white px-6 py-2 rounded-lg mx-4 text-center hover:bg-green-900 transition"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
