import React from "react";
import { Parallax } from "react-parallax";

const images = [
  "/assets/gallery/1.jpg",
  "/assets/gallery/2.jpg",
  "/assets/gallery/3.jpg",
  "/assets/gallery/4.jpg",
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-12">
      <h2 className="font-playfair text-3xl mb-6">Interactive Food Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, i) => (
          <Parallax key={i} bgImage={src} strength={200}>
            <div style={{ height: 200 }} className="rounded-lg overflow-hidden shadow-lg" />
          </Parallax>
        ))}
      </div>
    </section>
  );
}
