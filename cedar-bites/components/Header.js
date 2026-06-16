"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";

export default function Header() {
  const { count } = useCart();

  const links = [
    ["Home", "/"],
    ["Shop", "/shop"],
    ["About", "/about"],
    ["FAQ", "/faq"],
    ["Contact", "/contact"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-bark/10 bg-cream/90 backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
         <img
  src="/images/cedar-bites-logo.png"
  alt="Cedar Bites logo"
  className="h-12 w-12 rounded-full object-contain"
    />
          <div>
            <p className="text-lg font-bold tracking-tight text-bark">Cedar Bites</p>
            <p className="hidden text-xs text-bark/60 sm:block">Lebanese-inspired crunch</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-bark/75 md:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-cedar">
              {label}
            </Link>
          ))}
        </nav>

        <Link href="/cart" className="rounded-full bg-bark px-5 py-2.5 text-sm font-semibold text-white">
          Cart ({count})
        </Link>
      </div>
    </header>
  );
}
