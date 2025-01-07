document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Robusta Brazil", img: "1.jpg", price: 20000 },
      { id: 1, name: "Arabica Blend", img: "2.jpg", price: 25000 },
      { id: 1, name: "Primo Passo", img: "3.jpg", price: 30000 },
      { id: 1, name: "Aceh Gayo", img: "4.jpg", price: 35000 },
      { id: 1, name: "Sumatra Mandheling", img: "5.jpg", price: 40000 },
    ],
  }));
});

// konversi ke Rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
