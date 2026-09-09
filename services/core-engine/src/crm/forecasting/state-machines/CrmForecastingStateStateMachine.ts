export type CrmForecastingStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmForecastingStateStateMachine {
  private allowedTransitions: Record<CrmForecastingStateState, CrmForecastingStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmForecastingStateState, to: CrmForecastingStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmForecastingStateState, to: CrmForecastingStateState): CrmForecastingStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmForecastingState: " + from + " -> " + to);
    }
    return to;
  }
}
