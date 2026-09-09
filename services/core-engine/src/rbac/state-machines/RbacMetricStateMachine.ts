export type RbacMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class RbacMetricStateMachine {
  private allowedTransitions: Record<RbacMetricState, RbacMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: RbacMetricState, to: RbacMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: RbacMetricState, to: RbacMetricState): RbacMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for RbacMetric: " + from + " -> " + to);
    }
    return to;
  }
}
