export type CrmForecastingItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmForecastingItemStateMachine {
  private allowedTransitions: Record<CrmForecastingItemState, CrmForecastingItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmForecastingItemState, to: CrmForecastingItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmForecastingItemState, to: CrmForecastingItemState): CrmForecastingItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmForecastingItem: " + from + " -> " + to);
    }
    return to;
  }
}
