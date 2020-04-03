import { CostStrategy } from "./cost-strategy/cost-strategy.interface";
import { SaleCostStrategy } from "./cost-strategy/sale-strategy.class";
import { RentCostStrategy } from "./cost-strategy/rent-strategy.class";

interface Product {
  isForSale: boolean;
  price: number;
  name: string;
}

export class CartProduct {
  private readonly costStrategy: CostStrategy;

  constructor(
    public product: Product,
    public quantity: number,
    private deliveryDate?: Date,
    private returnDate?: Date
  ) {
    this.costStrategy = product.isForSale
      ? new SaleCostStrategy()
      : new RentCostStrategy();
  }

  getProductCost() {
    return this.costStrategy.getProductCost({
      price: this.product.price,
      quantity: this.quantity,
      deliveryDate: this.deliveryDate,
      returnDate: this.returnDate
    });
  }

  getCostCalculationsText() {
    return this.costStrategy.getCostCalculationsText({
      price: this.product.price,
      quantity: this.quantity,
      deliveryDate: this.deliveryDate,
      returnDate: this.returnDate
    });
  }
}
