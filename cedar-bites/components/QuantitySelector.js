"use client";

export default function QuantitySelector({ value, onChange }) {
  return (
    <div className="inline-flex items-center rounded-full border border-bark/15 bg-white">
      <button type="button" onClick={() => onChange(Math.max(1, value - 1))} className="px-4 py-2 text-lg">−</button>
      <span className="min-w-10 text-center font-semibold">{value}</span>
      <button type="button" onClick={() => onChange(value + 1)} className="px-4 py-2 text-lg">+</button>
    </div>
  );
}
