export type ObsAlertsStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsAlertsStateStateMachine {
  private allowedTransitions: Record<ObsAlertsStateState, ObsAlertsStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsAlertsStateState, to: ObsAlertsStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsAlertsStateState, to: ObsAlertsStateState): ObsAlertsStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsAlertsState: " + from + " -> " + to);
    }
    return to;
  }
}
