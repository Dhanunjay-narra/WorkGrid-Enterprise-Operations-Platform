export type ObsAlertsTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsAlertsTaskStateMachine {
  private allowedTransitions: Record<ObsAlertsTaskState, ObsAlertsTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsAlertsTaskState, to: ObsAlertsTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsAlertsTaskState, to: ObsAlertsTaskState): ObsAlertsTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsAlertsTask: " + from + " -> " + to);
    }
    return to;
  }
}
