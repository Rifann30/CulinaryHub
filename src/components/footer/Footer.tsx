import React from "react";

export default function Footer() {
  return (
    <footer className="mt-20 bg-darkbrown text-cream py-12">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-playfair text-xl">CulinaryHub</h3>
          <p className="mt-3 text-sm">A premium demo site for cafe & restaurant portfolios.</p>
        </div>

        <div>
          <h4 className="font-semibold">Hours</h4>
          <p className="text-sm mt-2">Mon-Sun: 08:00 - 22:00</p>
        </div>

        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="text-sm mt-2">hello@culinaryhub.example</p>
        </div>
      </div>
    </footer>
  );
}
