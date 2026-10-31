export function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-serif text-4xl font-semibold text-turmeric sm:text-5xl">{value}</p>
      <p className="mt-2 text-sm text-white/75">{label}</p>
    </div>
  );
}
