export const metadata = { title: "Contact | Cedar Bites" };

export default function ContactPage() {
  return (
    <section className="container-page py-16">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cedar">Contact</p>
          <h1 className="mt-3 text-5xl font-black text-bark">Need help with your order?</h1>
          <p className="mt-5 text-lg leading-8 text-bark/70">
            Message us for orders, collaborations, or questions about Cedar Bites.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://wa.me/971000000000" className="btn-primary">WhatsApp placeholder</a>
            <a href="https://www.instagram.com/cedarbites" className="btn-secondary">Instagram placeholder</a>
          </div>
        </div>
        <form className="card p-6">
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm font-semibold text-bark">Name<input className="rounded-2xl border border-bark/15 bg-white px-4 py-3 font-normal outline-none focus:border-cedar" /></label>
            <label className="grid gap-2 text-sm font-semibold text-bark">Email<input type="email" className="rounded-2xl border border-bark/15 bg-white px-4 py-3 font-normal outline-none focus:border-cedar" /></label>
            <label className="grid gap-2 text-sm font-semibold text-bark">Message<textarea rows="5" className="rounded-2xl border border-bark/15 bg-white px-4 py-3 font-normal outline-none focus:border-cedar" /></label>
            <button type="button" className="btn-primary">Send message placeholder</button>
          </div>
        </form>
      </div>
    </section>
  );
}
