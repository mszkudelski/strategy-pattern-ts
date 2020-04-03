export interface CostParameters {
  price: number;
  quantity: number;
  deliveryDate?: Date;
  returnDate?: Date;
}

export interface CostStrategy {
  getProductCost({
    price,
    quantity,
    deliveryDate,
    returnDate
  }: CostParameters): number;
  getCostCalculationsText({
    price,
    quantity,
    deliveryDate,
    returnDate
  }: CostParameters): string;
}
