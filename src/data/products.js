const products = [
  { id: 1, name: "Fertilizante A", category: "fertilizantes", price: 10 },
  { id: 2, name: "Lampara LED", category: "iluminacion", price: 15 },
  { id: 3, name: "Maceta", category: "accesorios", price: 5 },
  // agrega más productos según necesites
];

export function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 500);
  });
}

export function getProductsByCategory(categoryId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products.filter(p => p.category === categoryId)), 500);
  });
}

export function getProductById(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products.find(p => p.id === Number(id))), 500);
  });
}
