import React from "react";

export default function Navbar() {
  return (
    <header className="fixed w-full z-50 top-0 left-0 bg-white/50 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-playfair text-xl font-bold">CulinaryHub</div>
        <nav className="hidden md:flex gap-6">
          <a className="hover:underline" href="#menu">Menu</a>
          <a className="hover:underline" href="#gallery">Gallery</a>
          <a className="hover:underline" href="#reservation">Reservation</a>
        </nav>
        <div>
          <button className="btn-primary">Book a Table</button>
        </div>
      </div>
    </header>
  );
}
