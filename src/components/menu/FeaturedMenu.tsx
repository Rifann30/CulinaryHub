import React from "react";
import { MENU } from "../../data/menu";
import MenuCard from "./MenuCard";

export default function FeaturedMenu() {
  const featured = MENU.slice(0, 4);
  return (
    <section id="menu" className="py-12">
      <h2 className="font-playfair text-3xl mb-6">Featured Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featured.map(item => <MenuCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}
