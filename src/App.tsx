import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div className="font-inter text-foreground bg-cream min-h-screen">
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}
