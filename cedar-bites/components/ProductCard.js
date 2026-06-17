import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";
import { formatAED } from "@/lib/pricing";

export default function ProductCard({ product }) {
  const href = "/product/zaatar-crisps";

  return (
    <div className="card overflow-hidden p-5">
      <div className="flex aspect-square items-center justify-center rounded-[1.5rem] bg-sand/45 p-6">
        <img src={product.image} alt={product.name} className="h-full w-full object-contain" />
      </div>
      <div className="pt-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold text-bark">{product.name}</h3>
          <p className="whitespace-nowrap rounded-full bg-cedar/10 px-3 py-1 text-sm font-bold text-cedar">
            {formatAED(product.price)}
          </p>
        </div>
        <p className="mt-3 min-h-16 text-sm leading-6 text-bark/65">{product.description}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <AddToCartButton productId={product.id} />
          <Link href={href} className="btn-secondary">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
