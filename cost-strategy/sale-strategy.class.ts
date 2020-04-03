import { CostParameters, CostStrategy } from "./cost-strategy.interface";
import { Currency } from "./constants";


export class SaleCostStrategy implements CostStrategy {
  getProductCost({
    price,
    quantity,
  }: CostParameters) {
    return price * quantity;
  }
  getCostCalculationsText({
    price,
    quantity,
  }: CostParameters) {
    return `${price} ${Currency} x ${quantity}`;
  }
}
