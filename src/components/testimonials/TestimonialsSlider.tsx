import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const TEST = [
  { author: "Diana", text: "The ambience and coffee quality are incredible." },
  { author: "Riko", text: "A cinematic experience — booking was a breeze." },
  { author: "Amelia", text: "Service and food presentation, 5 stars." }
];

export default function TestimonialsSlider() {
  return (
    <section className="py-12">
      <h2 className="font-playfair text-3xl mb-6">Testimonials</h2>
      <Swiper spaceBetween={16} slidesPerView={1} autoplay={{ delay: 4000 }}>
        {TEST.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white p-6 rounded-lg shadow">{t.text}<div className="mt-3 text-sm font-semibold">— {t.author}</div></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
