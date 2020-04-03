// Import stylesheets
import "./style.css";
import { CartProduct } from "./cart-product.model";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const data = [
  {
    product: { isForSale: true, price: 15 },
    quantity: 5
  }
];

const products: CartProduct = data.map(
  item => new CartProduct(item.product, item.quantity)
);

