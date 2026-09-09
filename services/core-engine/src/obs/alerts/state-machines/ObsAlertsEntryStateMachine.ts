export type ObsAlertsEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsAlertsEntryStateMachine {
  private allowedTransitions: Record<ObsAlertsEntryState, ObsAlertsEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsAlertsEntryState, to: ObsAlertsEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsAlertsEntryState, to: ObsAlertsEntryState): ObsAlertsEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsAlertsEntry: " + from + " -> " + to);
    }
    return to;
  }
}
