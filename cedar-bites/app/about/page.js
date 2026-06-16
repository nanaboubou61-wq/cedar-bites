export const metadata = { title: "About | Cedar Bites" };

export default function AboutPage() {
  return (
    <section className="container-page py-16">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cedar">About</p>
          <h1 className="mt-3 text-5xl font-black text-bark">A homegrown UAE snack brand with Lebanese roots.</h1>
        </div>
        <div className="card p-8 text-lg leading-9 text-bark/70">
          <p>
            Cedar Bites was created to bring a familiar Lebanese-inspired zaatar flavor into a cleaner, premium snack format. The goal is simple: a light crunch, warm flavor, and packaging that feels good enough to keep on the table.
          </p>
          <p className="mt-6">
            We are starting with our signature zaatar jar and a 4-jar bundle made for sharing, gifting, and weekly snacking across Dubai.
          </p>
        </div>
      </div>
    </section>
  );
}
