export const products = [
  {
    id: "zaatar-jar",
    slug: "zaatar-jar",
    name: "Cedar Bites Zaatar Jar",
    shortName: "Zaatar Jar",
    price: 33,
    image: "/images/cedar-bites-jar.png",
    description:
      "Crunchy zaatar bites made with simple ingredients and a Lebanese-inspired flavor.",
    details:
      "A premium savory snack with a light crunch, warm zaatar flavor, and a homemade UAE feel. Perfect for work, gatherings, movie nights, or gifting.",
  },
  {
    id: "bundle-4-jars",
    slug: "bundle-4-jars",
    name: "Bundle Pack - 4 Jars",
    shortName: "4 Jar Bundle",
    price: 120,
    image: "/images/cedar-bites-bundle.png",
    description:
      "Best value bundle. Includes 4 jars. Customer saves AED 12 compared to buying 4 single jars.",
    details:
      "The best choice for weekly snacking or sharing. Includes four Cedar Bites jars and qualifies for free Dubai delivery.",
  },
];

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}

export function getProductById(id) {
  return products.find((product) => product.id === id);
}
