export type IntOauthMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntOauthMetricStateMachine {
  private allowedTransitions: Record<IntOauthMetricState, IntOauthMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntOauthMetricState, to: IntOauthMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntOauthMetricState, to: IntOauthMetricState): IntOauthMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntOauthMetric: " + from + " -> " + to);
    }
    return to;
  }
}
