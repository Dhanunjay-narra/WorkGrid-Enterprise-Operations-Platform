export class SupportQueuesSummaryCircuitBreaker {
  private failureCount = 0;
  private state: "CLOSED" | "OPEN" | "HALF_OPEN" = "CLOSED";

  public canExecute(): boolean {
    return this.state !== "OPEN";
  }

  public recordSuccess(): void {
    this.failureCount = 0;
    this.state = "CLOSED";
  }

  public recordFailure(): void {
    this.failureCount++;
    if (this.failureCount >= 5) {
      this.state = "OPEN";
      setTimeout(() => { this.state = "HALF_OPEN"; }, 10000);
    }
  }
}
