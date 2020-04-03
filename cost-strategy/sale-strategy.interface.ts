import { CostParameters } from "./cost-strategy.interface";

export class SaleCostStrategy {
  getProductCost({ price, quantity, deliveryDate, returnDate }: CostParameters){}
  getCostCalculationsText({ price, quantity, deliveryDate, returnDate }: CostParameters){}
}
