const faqs = [
  ["Where do you deliver?", "We currently deliver in Dubai."],
  ["How much is delivery?", "Dubai delivery is AED 15. Orders of AED 120 or more get free delivery."],
  ["What is the bundle offer?", "4 jars for AED 120, saving AED 12 compared to buying 4 single jars."],
  ["How can I pay?", "Online payment is coming soon. For now, payment options can be updated based on business setup."],
  ["Are the crisps fried?", "Placeholder answer. Update this once your final production and label details are confirmed."],
];

export const metadata = { title: "FAQ | Cedar Bites" };

export default function FAQPage() {
  return (
    <section className="container-page py-16">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-cedar">FAQ</p>
        <h1 className="mt-3 text-5xl font-black text-bark">Common questions</h1>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {faqs.map(([question, answer]) => (
          <div key={question} className="card p-6">
            <h2 className="text-xl font-bold text-bark">{question}</h2>
            <p className="mt-3 leading-7 text-bark/70">{answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
