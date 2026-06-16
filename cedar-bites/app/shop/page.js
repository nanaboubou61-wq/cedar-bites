import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export const metadata = { title: "Shop | Cedar Bites" };

export default function ShopPage() {
  return (
    <section className="container-page py-16">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-cedar">Shop</p>
        <h1 className="mt-3 text-5xl font-black text-bark">Choose your crunch</h1>
        <p className="mt-5 text-lg leading-8 text-bark/70">Dubai delivery is AED 15. Order the 4-jar bundle to save AED 12 and get free delivery..</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </section>
  );
}
