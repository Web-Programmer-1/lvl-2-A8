


"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { Menu, X, BarChart3, User, LogOut } from "lucide-react";

interface UserData {
  id: string;
  name: string;
  email?: string;
  phone_number: string;
}

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;

  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || null;

  return null;
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: "Guideline Hub", href: "/guide" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Why Us", href: "/#why-us" },
    { name: "About", href: "/about" },
  ];

  // Fetch user profile
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const accessToken = getCookie("access_token");
        
        if (!accessToken) {
          setLoading(false);
          return;
        }

        const response = await fetch(
          "https://mcq-analysis.vercel.app/api/v1/user/auth",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: accessToken,
            },
          }
        );

        const data = await response.json();
        console.log("Navbar API Response:", data);

        if (response.ok && data.success && data.data) {
          setUser(data.data);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Logout handler
  const handleLogout = () => {
    // Clear cookies
    document.cookie = "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "refresh_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    
    setUser(null);
    setProfileDropdownOpen(false);
    window.location.href = "/login";
  };

  // Get user initials for avatar
  const getUserInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

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

            {/* Authentication Section */}
            {loading ? (
              <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
            ) : user ? (
              // Logged in user - Profile Dropdown
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center space-x-3 hover:opacity-80 transition"
                >
                  <div className="w-10 h-10 rounded-full bg-green-800 flex items-center justify-center text-white font-semibold">
                    {getUserInitials(user.name)}
                  </div>
                  <div className="text-left hidden lg:block">
                    <p className="text-sm font-semibold text-gray-900">
                      {user.name}
                    </p>
                    <p className="text-xs text-gray-600">
                      {user.email || user.phone_number}
                    </p>
                  </div>
                </button>

                {/* Dropdown Menu */}
                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                    <Link
                      href="/profile"
                      onClick={() => setProfileDropdownOpen(false)}
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition"
                    >
                      <User className="w-5 h-5 text-green-800" />
                      <span className="text-gray-700">My Profile</span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-red-50 transition text-left"
                    >
                      <LogOut className="w-5 h-5 text-red-600" />
                      <span className="text-red-600">Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              // Not logged in - Show Login/Register
              <div className="flex items-center space-x-4">
                <Link
                  href="/login"
                  className="text-gray-700 hover:text-green-800 transition font-medium"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="bg-green-800 text-white px-6 py-2 rounded-lg hover:bg-green-900 transition transform hover:scale-105"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
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

            {/* Mobile Authentication */}
            {loading ? (
              <div className="px-4 py-2">
                <div className="w-full h-10 bg-gray-200 rounded-lg animate-pulse"></div>
              </div>
            ) : user ? (
              <>
                <div className="px-4 py-2 border-t border-gray-200">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-green-800 flex items-center justify-center text-white font-semibold">
                      {getUserInitials(user.name)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {user.name}
                      </p>
                      <p className="text-xs text-gray-600">
                        {user.email || user.phone_number}
                      </p>
                    </div>
                  </div>
                </div>
                <Link
                  href="/my-profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:text-green-800 transition"
                >
                  <User className="w-5 h-5" />
                  <span>My Profile</span>
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center space-x-3 px-4 py-2 text-red-600 hover:bg-red-50 transition text-left"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-700 hover:text-green-800 transition px-4 py-2"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block bg-green-800 text-white px-6 py-2 rounded-lg mx-4 text-center hover:bg-green-900 transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}