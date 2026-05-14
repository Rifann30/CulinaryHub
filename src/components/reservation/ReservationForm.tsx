import React from "react";
import { useForm } from "react-hook-form";
import { createReservationSupabase } from "../../services/supabaseClient";
import { createReservationFirestore } from "../../services/firebaseClient";

type FormValues = {
  name: string;
  date: string;
  time: string;
  guests: number;
  note?: string;
};

export default function ReservationForm() {
  const { register, handleSubmit } = useForm<FormValues>({ defaultValues: { guests: 2 } });
  const onSubmit = async (data: FormValues) => {
    const payload = { ...data, created_at: new Date().toISOString() };
    // Demo: write to both Supabase and Firestore (for demo/testing)
    try {
      await createReservationSupabase(payload);
    } catch (e) { console.warn("Supabase error", e); }
    try {
      await createReservationFirestore(payload);
    } catch (e) { console.warn("Firestore error", e); }
    alert("Reservation submitted (demo). Check Supabase / Firestore for persistence.");
  };

  return (
    <section id="reservation" className="py-12">
      <h2 className="font-playfair text-3xl mb-6">Book a Table</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl bg-white rounded-2xl p-6 shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input {...register("name", { required: true })} placeholder="Your name" className="input" />
          <input {...register("date", { required: true })} type="date" className="input" />
          <input {...register("time", { required: true })} type="time" className="input" />
          <input {...register("guests", { valueAsNumber: true })} type="number" min={1} max={20} className="input" />
        </div>
        <textarea {...register("note")} placeholder="Special request (optional)" className="input mt-4 h-24" />
        <div className="mt-4 flex justify-end">
          <button type="submit" className="btn-primary">Request Reservation</button>
        </div>
      </form>
    </section>
  );
}
