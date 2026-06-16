import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-bark/10 bg-bark text-white">
      <div className="container-page grid gap-10 py-12 md:grid-cols-3">
        <div>
          <p className="text-2xl font-bold">Cedar Bites</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
            Premium Lebanese-inspired zaatar crisps made for modern snacking in the UAE.
          </p>
        </div>
        <div>
          <p className="font-semibold">Explore</p>
          <div className="mt-4 grid gap-2 text-sm text-white/70">
            <Link href="/shop">Shop</Link>
            <Link href="/about">About</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold">Delivery</p>
          <p className="mt-4 text-sm leading-6 text-white/70">
            Dubai delivery is AED 15. Orders of AED 120 or more get free delivery.
          </p>
        </div>
      </div>
    </footer>
  );
}
