export type CommNotificationsMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommNotificationsMetricStateMachine {
  private allowedTransitions: Record<CommNotificationsMetricState, CommNotificationsMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommNotificationsMetricState, to: CommNotificationsMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommNotificationsMetricState, to: CommNotificationsMetricState): CommNotificationsMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommNotificationsMetric: " + from + " -> " + to);
    }
    return to;
  }
}
