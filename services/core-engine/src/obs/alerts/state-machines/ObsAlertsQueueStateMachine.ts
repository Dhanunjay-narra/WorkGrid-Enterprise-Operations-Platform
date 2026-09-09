export type ObsAlertsQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsAlertsQueueStateMachine {
  private allowedTransitions: Record<ObsAlertsQueueState, ObsAlertsQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsAlertsQueueState, to: ObsAlertsQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsAlertsQueueState, to: ObsAlertsQueueState): ObsAlertsQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsAlertsQueue: " + from + " -> " + to);
    }
    return to;
  }
}
