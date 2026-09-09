export type CrmForecastingTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmForecastingTransactionStateMachine {
  private allowedTransitions: Record<CrmForecastingTransactionState, CrmForecastingTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmForecastingTransactionState, to: CrmForecastingTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmForecastingTransactionState, to: CrmForecastingTransactionState): CrmForecastingTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmForecastingTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
