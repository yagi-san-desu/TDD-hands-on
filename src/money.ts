export class Money {
  protected amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }
  equals(money: Money) {
    return this.amount === money.amount && money instanceof this.constructor;
  }
}
