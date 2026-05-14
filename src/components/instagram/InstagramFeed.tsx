import React from "react";

const MOCK = [
  "/assets/gallery/1.jpg",
  "/assets/gallery/2.jpg",
  "/assets/gallery/3.jpg",
  "/assets/gallery/4.jpg"
];

export default function InstagramFeed() {
  return (
    <section className="py-12">
      <h2 className="font-playfair text-3xl mb-6">Instagram Preview</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {MOCK.map((src, i) => (
          <button key={i} className="rounded-lg overflow-hidden">
            <img src={src} alt={`insta-${i}`} className="w-full h-40 object-cover" />
          </button>
        ))}
      </div>
    </section>
  );
}
