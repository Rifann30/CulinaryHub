import React from "react";

export default function EventsPromo() {
  return (
    <section className="py-12 bg-cream/90">
      <h2 className="font-playfair text-3xl mb-6">Events & Promo</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold">Live Jazz Night</h3>
          <p className="text-sm mt-2">Every Saturday — book early.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold">Weekend Brunch Promo</h3>
          <p className="text-sm mt-2">20% off for parties of 4+</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold">Chef's Seasonal Menu</h3>
          <p className="text-sm mt-2">Limited time — reserve to try.</p>
        </div>
      </div>
    </section>
  );
}
