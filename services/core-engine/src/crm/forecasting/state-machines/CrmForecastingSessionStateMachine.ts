export type CrmForecastingSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmForecastingSessionStateMachine {
  private allowedTransitions: Record<CrmForecastingSessionState, CrmForecastingSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmForecastingSessionState, to: CrmForecastingSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmForecastingSessionState, to: CrmForecastingSessionState): CrmForecastingSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmForecastingSession: " + from + " -> " + to);
    }
    return to;
  }
}
