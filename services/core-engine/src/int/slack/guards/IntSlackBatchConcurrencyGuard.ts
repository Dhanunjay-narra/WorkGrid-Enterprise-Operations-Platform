export class IntSlackBatchConcurrencyGuard {
  private activeOperations = 0;

  public async enter(): Promise<boolean> {
    this.activeOperations++;
    return this.activeOperations <= 500;
  }

  public exit(): void {
    this.activeOperations = Math.max(0, this.activeOperations - 1);
  }
}
