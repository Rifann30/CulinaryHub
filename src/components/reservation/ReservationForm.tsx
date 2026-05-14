import React from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  date: string;
  time: string;
  guests: number;
  note?: string;
};

export default function ReservationForm() {
  const { register, handleSubmit, reset } = useForm<FormValues>({ defaultValues: { guests: 2 } });
  const API = import.meta.env.VITE_API_URL || "http://localhost:4000";

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await fetch(`${API}/api/reservations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        console.error("Reservation API error", err);
        alert("Gagal mengirim reservasi. Cek konsol untuk detail.");
        return;
      }
      const body = await res.json();
      alert("Reservasi terkirim — ID: " + (body.id || "(unknown)"));
      reset();
    } catch (e) {
      console.error(e);
      alert("Gagal terhubung ke server reservasi. Pastikan server berjalan.");
    }
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
