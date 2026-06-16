import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import AddToCartButton from "@/components/AddToCartButton";
import { products } from "@/lib/products";

export default function HomePage() {
  const jar = products[0];
  const bundle = products[1];

  return (
    <>
      <section className="overflow-hidden bg-cream">
        <div className="container-page grid min-h-[720px] gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full bg-cedar/10 px-4 py-2 text-sm font-semibold text-cedar">
              Premium zaatar crunch made in the UAE
            </p>
            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-bark sm:text-6xl lg:text-7xl">
              Lebanese-inspired bites with a clean modern crunch.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-bark/70">
              Cedar Bites turns classic zaatar flavor into a premium jar snack made for sharing, gifting, and everyday cravings.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link className="btn-primary" href="/shop">Shop now</Link>
              <a className="btn-secondary" href="#bundle">View bundle</a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-cedar/10 blur-3xl" />
            <div className="relative card flex min-h-[460px] items-center justify-center p-8">
              <img src="/images/cedar-bites-hero.png" alt="Cedar Bites hero" className="max-h-[420px] w-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cedar">Signature product</p>
            <h2 className="mt-3 text-4xl font-black text-bark">Start with the original jar</h2>
          </div>
          <Link href="/shop" className="btn-secondary">View shop</Link>
        </div>
        <ProductCard product={jar} />
      </section>

      <section id="bundle" className="bg-bark py-16 text-white">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="rounded-[2rem] bg-white/10 p-8">
            <img src={bundle.image} alt={bundle.name} className="mx-auto max-h-[420px] w-full object-contain" />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-sand">Best value</p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">4 jars for AED 120</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/75">
              Save AED 12 compared to buying 4 single jars. The bundle also gets free Dubai delivery.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <AddToCartButton productId="bundle-4-jars" label="Add bundle to cart" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-bark transition hover:bg-sand" />
              <Link href="/cart" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white">Go to cart</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-5 md:grid-cols-4">
          {["Lebanese-inspired flavor", "Crunchy and light", "Made for sharing", "Simple ingredients"].map((item) => (
            <div key={item} className="card p-6">
              <div className="mb-5 h-10 w-10 rounded-full bg-cedar/15" />
              <h3 className="text-lg font-bold text-bark">{item}</h3>
              <p className="mt-3 text-sm leading-6 text-bark/65">A premium snack experience made to feel natural, warm, and easy to enjoy.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cedar">Reviews</p>
          <h2 className="mt-3 text-4xl font-black text-bark">Early customer feedback</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {["Perfect with labneh and coffee.", "The zaatar flavor feels homemade.", "The bundle is great for the family."].map((review) => (
            <div key={review} className="card p-6">
              <p className="text-lg font-semibold text-bark">“{review}”</p>
              <p className="mt-4 text-sm text-bark/60">Placeholder review</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="rounded-[2.5rem] bg-cedar p-10 text-center text-white">
          <h2 className="text-4xl font-black">Ready to try Cedar Bites?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/75">Order the single jar or go straight for the bundle with free Dubai delivery.</p>
          <Link href="/shop" className="mt-8 inline-flex rounded-full bg-white px-7 py-3 text-sm font-bold text-cedar">Shop Cedar Bites</Link>
        </div>
      </section>
    </>
  );
}
