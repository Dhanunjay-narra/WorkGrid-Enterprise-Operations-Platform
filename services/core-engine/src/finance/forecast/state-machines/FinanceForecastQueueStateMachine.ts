export type FinanceForecastQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceForecastQueueStateMachine {
  private allowedTransitions: Record<FinanceForecastQueueState, FinanceForecastQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceForecastQueueState, to: FinanceForecastQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceForecastQueueState, to: FinanceForecastQueueState): FinanceForecastQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceForecastQueue: " + from + " -> " + to);
    }
    return to;
  }
}
