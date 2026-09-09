export type FinanceForecastBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceForecastBatchStateMachine {
  private allowedTransitions: Record<FinanceForecastBatchState, FinanceForecastBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceForecastBatchState, to: FinanceForecastBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceForecastBatchState, to: FinanceForecastBatchState): FinanceForecastBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceForecastBatch: " + from + " -> " + to);
    }
    return to;
  }
}
