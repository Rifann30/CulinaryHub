import React from "react";
import { MenuItem } from "../../data/menu";
import { motion } from "framer-motion";

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <motion.article whileHover={{ scale: 1.03 }} className="bg-white rounded-2xl overflow-hidden shadow-md">
      <div className="h-48 bg-gray-100">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{item.title}</h3>
        <p className="text-sm text-muted mt-2">{item.desc}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-gold font-medium">{item.price}</div>
          <button className="text-sm text-darkbrown/80">See details</button>
        </div>
      </div>
    </motion.article>
  );
}
