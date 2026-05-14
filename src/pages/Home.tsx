import React from "react";
import Hero from "../components/hero/Hero";
import FeaturedMenu from "../components/menu/FeaturedMenu";
import GallerySection from "../components/gallery/GallerySection";
import ReservationForm from "../components/reservation/ReservationForm";
import TestimonialsSlider from "../components/testimonials/TestimonialsSlider";
import EventsPromo from "../components/events/EventsPromo";
import BranchMap from "../components/map/BranchMap";
import InstagramFeed from "../components/instagram/InstagramFeed";

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="py-20 container mx-auto px-6">
        <FeaturedMenu />
      </section>

      <section className="py-20 bg-cream/80">
        <div className="container mx-auto px-6">
          <GallerySection />
        </div>
      </section>

      <section className="py-20 container mx-auto px-6">
        <ReservationForm />
      </section>

      <section className="container mx-auto px-6">
        <TestimonialsSlider />
      </section>

      <section className="container mx-auto px-6">
        <EventsPromo />
      </section>

      <section className="container mx-auto px-6">
        <BranchMap />
      </section>

      <section className="container mx-auto px-6">
        <InstagramFeed />
      </section>
    </div>
  );
}
