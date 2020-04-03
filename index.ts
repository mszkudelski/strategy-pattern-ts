// Import stylesheets
import "./style.css";
import { CartProduct } from "./cart-product.model";
import { Currency } from "./cost-strategy/constants";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>TypeScript Strategy Example</h1>`;

const data = [
  {
    product: { isForSale: true, price: 15, name: "Product" },
    quantity: 5
  },
  {
    product: { isForSale: false, price: 6.5, name: "Another product" },
    quantity: 3,
    deliveryDate: new Date(),
    returnDate: new Date("2020-04-05")
  }
];

const products: CartProduct[] = data.map(
  item =>
    new CartProduct(
      item.product,
      item.quantity,
      item.deliveryDate,
      item.returnDate
    )
);

const productsHTML = products.map(
  cartProduct =>
    `<li>${
      cartProduct.product.name
    }: ${cartProduct.getCostCalculationsText()} = ${cartProduct.getProductCost()} ${Currency}</li>`
);

appDiv.innerHTML += `
  <ol>
    ${productsHTML}
  </ol>
`;
