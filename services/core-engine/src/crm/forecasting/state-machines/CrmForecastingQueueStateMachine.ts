export type CrmForecastingQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmForecastingQueueStateMachine {
  private allowedTransitions: Record<CrmForecastingQueueState, CrmForecastingQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmForecastingQueueState, to: CrmForecastingQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmForecastingQueueState, to: CrmForecastingQueueState): CrmForecastingQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmForecastingQueue: " + from + " -> " + to);
    }
    return to;
  }
}
