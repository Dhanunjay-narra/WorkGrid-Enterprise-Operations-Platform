export type CommPresenceMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommPresenceMetricStateMachine {
  private allowedTransitions: Record<CommPresenceMetricState, CommPresenceMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommPresenceMetricState, to: CommPresenceMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommPresenceMetricState, to: CommPresenceMetricState): CommPresenceMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommPresenceMetric: " + from + " -> " + to);
    }
    return to;
  }
}
