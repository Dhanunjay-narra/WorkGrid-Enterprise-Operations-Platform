export type IntSyncMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSyncMetricStateMachine {
  private allowedTransitions: Record<IntSyncMetricState, IntSyncMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSyncMetricState, to: IntSyncMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSyncMetricState, to: IntSyncMetricState): IntSyncMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSyncMetric: " + from + " -> " + to);
    }
    return to;
  }
}
