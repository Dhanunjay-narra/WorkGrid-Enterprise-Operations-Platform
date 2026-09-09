export type ObsAlertsProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsAlertsProfileStateMachine {
  private allowedTransitions: Record<ObsAlertsProfileState, ObsAlertsProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsAlertsProfileState, to: ObsAlertsProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsAlertsProfileState, to: ObsAlertsProfileState): ObsAlertsProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsAlertsProfile: " + from + " -> " + to);
    }
    return to;
  }
}
