export type ObsAlertsSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsAlertsSessionStateMachine {
  private allowedTransitions: Record<ObsAlertsSessionState, ObsAlertsSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsAlertsSessionState, to: ObsAlertsSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsAlertsSessionState, to: ObsAlertsSessionState): ObsAlertsSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsAlertsSession: " + from + " -> " + to);
    }
    return to;
  }
}
