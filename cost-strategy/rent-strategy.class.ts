import * as moment from "moment";
import { CostStrategy, CostParameters } from "./cost-strategy.interface";

function getDaysBetweenDates(date1: Date, date2: Date): number {
  return moment(date1)
    .startOf("day")
    .diff(moment(date2).startOf("day"), "days");
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
    return `${price} ${Currency} x ${quantity} x ${getDaysBetweenDates(
      deliveryDate,
      returnDate
    )}`;
  }
}
