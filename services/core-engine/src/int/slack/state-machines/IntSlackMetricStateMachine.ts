export type IntSlackMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSlackMetricStateMachine {
  private allowedTransitions: Record<IntSlackMetricState, IntSlackMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSlackMetricState, to: IntSlackMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSlackMetricState, to: IntSlackMetricState): IntSlackMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSlackMetric: " + from + " -> " + to);
    }
    return to;
  }
}
