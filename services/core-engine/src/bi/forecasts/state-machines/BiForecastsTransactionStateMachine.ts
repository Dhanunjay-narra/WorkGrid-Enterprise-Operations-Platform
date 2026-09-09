export type BiForecastsTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiForecastsTransactionStateMachine {
  private allowedTransitions: Record<BiForecastsTransactionState, BiForecastsTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiForecastsTransactionState, to: BiForecastsTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiForecastsTransactionState, to: BiForecastsTransactionState): BiForecastsTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiForecastsTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
