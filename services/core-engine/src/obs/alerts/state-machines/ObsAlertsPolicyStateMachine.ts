export type ObsAlertsPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsAlertsPolicyStateMachine {
  private allowedTransitions: Record<ObsAlertsPolicyState, ObsAlertsPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsAlertsPolicyState, to: ObsAlertsPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsAlertsPolicyState, to: ObsAlertsPolicyState): ObsAlertsPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsAlertsPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
