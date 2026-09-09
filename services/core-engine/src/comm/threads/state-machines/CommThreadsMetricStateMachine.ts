export type CommThreadsMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommThreadsMetricStateMachine {
  private allowedTransitions: Record<CommThreadsMetricState, CommThreadsMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommThreadsMetricState, to: CommThreadsMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommThreadsMetricState, to: CommThreadsMetricState): CommThreadsMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommThreadsMetric: " + from + " -> " + to);
    }
    return to;
  }
}
