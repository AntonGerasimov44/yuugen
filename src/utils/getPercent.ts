export function getPercent(currentAmount: number, totalAmount: number): number {
  return Math.round((100 / totalAmount) * currentAmount);
}
