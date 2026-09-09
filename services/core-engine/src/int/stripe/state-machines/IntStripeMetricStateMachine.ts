export type IntStripeMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntStripeMetricStateMachine {
  private allowedTransitions: Record<IntStripeMetricState, IntStripeMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntStripeMetricState, to: IntStripeMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntStripeMetricState, to: IntStripeMetricState): IntStripeMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntStripeMetric: " + from + " -> " + to);
    }
    return to;
  }
}
