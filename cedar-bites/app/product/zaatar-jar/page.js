import Link from "next/link";
import ProductDetailActions from "@/components/ProductDetailActions";
import AddToCartButton from "@/components/AddToCartButton";
import { getProductBySlug } from "@/lib/products";
import { formatAED } from "@/lib/pricing";

export const metadata = { title: "Zaatar Jar | Cedar Bites" };

export default function ZaatarJarPage() {
  const product = getProductBySlug("zaatar-jar");

  return (
    <section className="container-page py-16">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="card flex min-h-[520px] items-center justify-center p-8">
          <img src={product.image} alt={product.name} className="max-h-[450px] w-full object-contain" />
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cedar">Signature jar</p>
          <h1 className="mt-4 text-5xl font-black text-bark">{product.name}</h1>
          <p className="mt-4 text-3xl font-black text-cedar">{formatAED(product.price)}</p>
          <p className="mt-6 text-lg leading-8 text-bark/70">{product.details}</p>
          <ProductDetailActions productId={product.id} />

          <div className="mt-10 rounded-[2rem] border border-cedar/20 bg-cedar/10 p-6">
            <h2 className="text-2xl font-black text-bark">Bundle upsell</h2>
            <p className="mt-3 leading-7 text-bark/70">Get 4 jars for AED 120, save AED 12, and unlock free Dubai delivery.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <AddToCartButton productId="bundle-4-jars" label="Add 4-jar bundle" />
              <Link href="/shop" className="btn-secondary">Back to shop</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
