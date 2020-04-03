import { CostStrategy } from "./cost-strategy/cost-strategy.interface";

class CartProduct {
  private readonly costStrategy: CostStrategy;

  constructor(product) {}

  getProductCost() {
    return this.costStrategy.
  }
}