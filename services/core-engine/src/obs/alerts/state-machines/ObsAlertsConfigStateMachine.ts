export type ObsAlertsConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsAlertsConfigStateMachine {
  private allowedTransitions: Record<ObsAlertsConfigState, ObsAlertsConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsAlertsConfigState, to: ObsAlertsConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsAlertsConfigState, to: ObsAlertsConfigState): ObsAlertsConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsAlertsConfig: " + from + " -> " + to);
    }
    return to;
  }
}
