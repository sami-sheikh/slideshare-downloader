"use client";

import React, { useState } from "react";
import "./Header.css";
import Link from "next/link";

export default function Header({ links }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <Link href="/">
        <svg
          width="76"
          height="65"
          viewBox="0 0 76 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="logo"
        >
          <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff" />
        </svg>
      </Link>
      <nav className="nav">
        <ul className="nav-list">
          {links.map((link) => (
            <li key={link.name} className="nav-item">
              <Link href={link.url} className="nav-link">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className="mobile-menu-button" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            viewBox="0 0 24 24"
            stroke="#fff"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            viewBox="0 0 24 24"
            stroke="#fff"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-nav-list">
            {links.map((link) => (
              <li key={link.name} className="mobile-nav-item">
                <Link
                  href={link.url}
                  className="mobile-nav-link"
                  onClick={toggleMobileMenu}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
