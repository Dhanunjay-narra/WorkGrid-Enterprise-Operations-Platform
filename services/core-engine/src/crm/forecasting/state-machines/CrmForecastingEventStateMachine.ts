export type CrmForecastingEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmForecastingEventStateMachine {
  private allowedTransitions: Record<CrmForecastingEventState, CrmForecastingEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmForecastingEventState, to: CrmForecastingEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmForecastingEventState, to: CrmForecastingEventState): CrmForecastingEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmForecastingEvent: " + from + " -> " + to);
    }
    return to;
  }
}
