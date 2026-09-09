export type IntRateLimitsMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntRateLimitsMetricStateMachine {
  private allowedTransitions: Record<IntRateLimitsMetricState, IntRateLimitsMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntRateLimitsMetricState, to: IntRateLimitsMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntRateLimitsMetricState, to: IntRateLimitsMetricState): IntRateLimitsMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntRateLimitsMetric: " + from + " -> " + to);
    }
    return to;
  }
}
