export type CommCallsMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommCallsMetricStateMachine {
  private allowedTransitions: Record<CommCallsMetricState, CommCallsMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommCallsMetricState, to: CommCallsMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommCallsMetricState, to: CommCallsMetricState): CommCallsMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommCallsMetric: " + from + " -> " + to);
    }
    return to;
  }
}
