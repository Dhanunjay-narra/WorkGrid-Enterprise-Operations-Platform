export type CrmForecastingBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmForecastingBatchStateMachine {
  private allowedTransitions: Record<CrmForecastingBatchState, CrmForecastingBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmForecastingBatchState, to: CrmForecastingBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmForecastingBatchState, to: CrmForecastingBatchState): CrmForecastingBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmForecastingBatch: " + from + " -> " + to);
    }
    return to;
  }
}
