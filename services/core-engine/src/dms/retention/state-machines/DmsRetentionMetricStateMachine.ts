export type DmsRetentionMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsRetentionMetricStateMachine {
  private allowedTransitions: Record<DmsRetentionMetricState, DmsRetentionMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsRetentionMetricState, to: DmsRetentionMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsRetentionMetricState, to: DmsRetentionMetricState): DmsRetentionMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsRetentionMetric: " + from + " -> " + to);
    }
    return to;
  }
}
