import moment from "moment";
import { CostStrategy, CostParameters } from "./cost-strategy.interface";
import { Currency } from "./constants";

function getDaysBetweenDates(date1: Date, date2: Date): number {
  return moment(date2)
    .startOf("day")
    .diff(moment(date1).startOf("day"), "days");
}

export class RentCostStrategy implements CostStrategy {
  getProductCost({
    price,
    quantity,
    deliveryDate,
    returnDate
  }: CostParameters) {
    return price * quantity * getDaysBetweenDates(deliveryDate, returnDate);
  }
  getCostCalculationsText({
    price,
    quantity,
    deliveryDate,
    returnDate
  }: CostParameters) {
    return `${price} ${Currency} x ${quantity} items x ${getDaysBetweenDates(
      deliveryDate,
      returnDate
    )} days`;
  }
}
