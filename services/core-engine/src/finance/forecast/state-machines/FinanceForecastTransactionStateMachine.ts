export type FinanceForecastTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceForecastTransactionStateMachine {
  private allowedTransitions: Record<FinanceForecastTransactionState, FinanceForecastTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceForecastTransactionState, to: FinanceForecastTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceForecastTransactionState, to: FinanceForecastTransactionState): FinanceForecastTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceForecastTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
